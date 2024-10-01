import React, { useEffect, useState } from "react";
import { Divider, Text} from "@hubspot/ui-extensions";
import { LineChart, BarChart } from "@hubspot/ui-extensions/experimental";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ context }) => <Extension context={context} />);

const Extension = () => {
  const salesOverTimeSample = [
    {
      date: '2024-08-01',
      sales: 10,
    },
    {
      date: '2024-08-02',
      sales: 30,
    },
    {
     date: '2024-08-03',
     sales: 60,
    },
  ];  

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://softwium.com/api/books'; // replace with your own
      const response = await hubspot.fetch(url, {
        timeout: 2_000,
        method: 'GET',
      });
      console.log('Server response:', response.status);
      try {
        const getBookData = await response.json();
        console.log('Book Data: ', getBookData);
        setBookData(getBookData.slice(0,8).map(book => {
          return {
            Title: book.title,
            Length: book.pageCount
          };
        }));
      } catch (err) {
        console.error('Failed to parse as json', err);
      }
    };
    fetchData().catch((err) => console.error('Something went wrong', err));
  }, []);

  console.log('New Book array: ', bookData);
  return (
    <>
      <Text format={{ fontWeight: 'bold'}}>
        Books Chart
      </Text>
     <Text format={{ fontWeight: 'bold'}}>
        Simple Line Chart
     </Text>
      <LineChart
      data={salesOverTimeSample}
      axes={{
        x: {
          field: 'date',
          fieldType: 'category',
          label: 'Date'
        },
        y: {
          field: 'sales',
          fieldType: 'linear',
          label: 'Count of Sales'
        }
      }}
      options={{
        showDataLabels: true,
        showLegend: true,
        showTooltips: true
      }}
     />
     <Divider />
     <Text format={{ fontWeight: 'bold'}}>
      Simple Bar Chart with Fetched Data
     </Text>
     <BarChart
      data={bookData}
      axes={{
        x: {
          field: 'Title',
          fieldType: 'category',
          label: 'Book Title'
        },
        y: {
          field: 'Length',
          fieldType: 'linear',
          label: 'Page Count'
        },
        options: {
          groupFieldByColor: 'Title'
        }
      }}
      options={{
        showLegend: true,
        showTooltips: true
      }}
     />
    </>
  );
};
