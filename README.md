# Overview
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
It is for demonstration purposes only and therefore state is only persisted to memory. <br>

## Code Test Notes
I have aimed to show good coding practices throughout the app, but due to time constraints there are many imperfections. A few to point out: <br>
* Table is not responsive on mobile, I would consider progressive disclosure or changing from a table to a flex/grid layout that can stack on mobile as well as shrinking font sizes/padding
* I opted to include the Material UI library to save time, but if I were to use Styled components more properly I would have liked to of had a folder with a bunch of exported generic components e.g. for the table elements, form and it's fields.. and these would have had custom styles
* If I had time I would move logic to retreive the existing customer from the store of customers (in customer-add-or-update.tsx) into a selector

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.