

## To Run the Application

When developing locally, you can start the app by running:

```
npm run dev
```

## How to debug front end
- Add a JS Debug from run/Debug config in Webstrom
- run the app `npm run dev` etc
- click debug button or Run-> Debug or ^D
- It will launch a browser

## How to ensure the data passed to the server is correct
- Look at the network sector of the dev tool, and check the payload of `api fetch`
- Please make sure it is the same as what you tested on the Playground `http://localhost:4000/api`
- Must be careful, even `!` matters
- Most important thing is to ensure the data structur and mandatory fields are there

## What is passed in a form component?
- Check `variables` of prop.action
