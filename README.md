# Link To Project Portfolio

This is a link to my [portfolio page]( https://abigaelkirwa.github.io/AbigaelKirwaPortfolioReact/). It was deployed using GitHub Pages

# Questions and Answers

# 1) What is NPM?

NPM stands for Node Package Manager. It allows developers to share and borrow packages. NPM is used to install and manage packages, mainly libraries and tools, for Node.js

# 2) What is SPA?

SPA stands for Single Package Application. An SPA can retrieve all of the applications HTML, CSS, and JavaScript code on the inintial load or it can load the resourced dynamically in response to a user's interaction. SPA's use HTML and Ajax.

# 3) What is the event loop?

The event loop is continous loop that continously checks the call stack and callback queue. If the call stack is empty it takes the first function from the callback queue and pushes it onto the queue for execution. In this case, even though Javascript is single-threaded it appears to be multi-threaded because of how quickly functions are executed.

# 4) What is the difference between export x and export default x? How do you import them differently?

export x is used when multiple values from one page are exported, for example

```
export const greeting = "Hello";
export const number = 4;
```

they are imported in the following manner:

```
import {greeting, number} from "./Module1.js";
```

export defaulst x is used when only one value from one page is exported, for example

```
const greeting = "Hello";
export default greeting;
```

it is imported in the following manner:

```
import greeting from "./Module.js";
```


# 5) Why do you use className as a property in React and not class?

In react class is a reserved name because it is used to define classes in Javascript thus className is used to define HTML classes instead.

# 6) Why should you not write the following? What will happen?

```
<button onClick={setCounter(counter + 1)}> +1 </button>
```

In this scenerio, the button will be invoked when the component renders hence it will trigger an infinite loop of re-renders on the page.

# 7) What is object deconstruction and how is it connected to React components (example)

Object deconstruction is a feature that allows the extraction of data from arrays or objects into distinct variables. Below is an example:<br>

```
const Student = (props) =>
  return
    <div>
      <p>{props.name}</p>
      <p>{props.grade}</p>
      <p>{props.age}</p>
    </div>
  );
};
```

# 8) How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

It is possible to use HTML and Javascript in React because of JSX (JavaScript XML). It allows the two to be used together. 

# 9) What is async/await? Bring an example

The async/await function is a special function that is mostly used to handle asynchronous fetching of data. Below is an example

```
async function getData() {
  const response = await fetch('https://API.example.com');
  const data = await response.json();
  console.log(data);
}
```

# 10) What is a Promise? Bring an example

A promise is an object representing the success or failure of an asynchronous operation. <br>

```
const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { message: 'Data fetched successfully' };
    resolve(data);
  }, 1000);
});
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
