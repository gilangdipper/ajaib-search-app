# Ajaib Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test:watch`

Launches the test runner in the interactive watch mode.

## Deployment

Simply push the changes to main branch or create PR to main, after push or merge PR the code will automaticaly deploy to production

the link to production, https://gilangdipper.github.io/ajaib-search-app/


## Optimizing Performance

I used code-splitting trick to improve web performance, split by main components, can check on `App.tsx`.

- use `Dynamic imports`, This enables us to import our modules and files on demand
- use `React.lazy`, ensuring that component chunk is only loaded when its rendered
- use `React.Suspense`, suspends the rendering of a component until all its dependencies are lazy-loaded

## Async state manager

user `React Query` to handle async state manage when fetch date from API, so I didn't use other state manager, cause I think it's overkill to use local state manager.ss