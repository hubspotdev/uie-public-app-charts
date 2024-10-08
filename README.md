# Public App Card with Charts Component Sample
Build seamless customized experiences for all customers with [app cards powered by UI Extensions](https://hubs.la/Q02Rzqx10). Discover how to fetch data from a third-party system to create customized charts.

## Overview
You can now build UI extensions for public apps. Utilize HubSpot's [library of UI components](https://hubs.la/Q02RR5bV0) to create app cards that blend seamlessly with HubSpot. By leveraging [React](https://react.dev/), get started coding in a modern, flexible framework. 

Within this repo, you'll find an `index.js` file with a [sample OAuth flow](https://github.com/HubSpot/oauth-quickstart-nodejs) to connect this public app to an account of your choosing. We recommend creating a [developer test account](https://developers.hubspot.com/docs/api/account-types#developer-test-accounts) inside of your app developer account for testing purposes. 

This app card features:
- `hubspot.fetch` - an API that allows you to fetch data from third-party systems*.
- [Charts UI component](https://hubs.la/Q02SlJWR0) - build custom line and bar charts that look native to HubSpot. 

Want a video tutorial? [Check out our video on the HubSpot Developers YouTube channel](https://youtu.be/5P6WuKyOiDE)!

## Installing the App Cards
This directory contains a [single public app](https://hubs.la/Q02Rzt0g0) with a single app card written in React. 

### Requirements
A few things must be set up before using this public app sample.
- You must have a HubSpot developer account ([sign up](https://hubs.la/Q02Rzsjc0)).
- You must have the [HubSpot CLI](https://github.com/HubSpot/hubspot-cli/blob/main/packages/cli/README.md) installed and set up. 
- You must install [Node.js](https://nodejs.org/en/download/package-manager) and [yarn](https://yarnpkg.com/getting-started). 
- You should create a developer test account inside of your HubSpot developer account.

_**Note:** You must be a super-admin for the account that you want to install the app in._

### Usage
The HubSpot CLI enables you to run this project locally so that you may test and iterate quickly. Getting started is simple. Start in the root directory and follow these steps:

1. Initialize the project to generate the `hubspot.config.yml` which contains the account information needed to run the project. Follow the prompts, select your developer account, and generate a personal access key.
    ``` 
    hs init 
    ```

2. Upload the project to your developer account. This will generate your credentials needed to start the OAuth flow. 
    ```
    hs project upload
    ```

3. Create a **`.env`** file in the root of the repository with the ID and secret for your app (found on the app settings page), eg:
   ```
   CLIENT_ID='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
   CLIENT_SECRET='yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy'
   SCOPE='crm.objects.contacts.read,crm.objects.contacts.write'
   ```
   The `SCOPE` environment variable is optional in this example. 
   If not set, this application will use the scope `crm.objects.contacts.read`.
   The scopes can be separated by a comma, space, or URL-encoded space (`%20`)

4. From the root of the repository, run:
   ```bash
   $ npm install
   $ yarn install
   $ yarn start
   ```

5. Change directories into the app card extensions folder and then install the node dependencies. 
   ```bash
   $ cd src/app/extensions
   $ npm install
   ```

6. Open your browser to `http://localhost:3000/install` to kick off the OAuth 2.0 flow. This is where it's recommended to use a developer test account. When you connect the developer test account through this OAuth flow, it will also add the app card into the account. 

7. Start the server for local development. 
    ```
    hs project dev
    ```

### Note
When making changes to configuration files ({CARD_NAME}-card.json and app.json), be sure to stop the development server and use `hs project upload` to update the project before restarting the development server.

Since this is a public app, always make sure to upload the project into your app developer account, not a singular account. 

### View the App Card
This card is configured to be viewed on Contact records. To view the card for development, navigate to any contact record and select `Customize record`. Select the view you'd like to update from the table and choose `Add cards`.
![Add App Card Screenshot](https://github.com/user-attachments/assets/deb4a103-f399-472b-88bb-86939a886760)

Then, navigate to any contact record page to view the card in the middle column.
![UIE Public App Card - Charts](https://github.com/user-attachments/assets/15f5289e-6cd2-4e82-886d-f1c2ab472598)


## Learn more about App Cards Powered by UI Extensions
To learn more about building public app cards, visit the [HubSpot app cards landing page](https://hubs.la/Q02Rzqx10) and check out the [HubSpot public app cards developer documentation](https://hubs.la/Q02Rzv5y0). 
