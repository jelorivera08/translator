# goFluent Translator App Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project was intended for the demo of goFluent in-line with Jerald Rivera's requirements.

## How to start the project in the browser
1. go to the project's rood directory via command line.
2. type npm install then press enter.
3. type npm start.
4. go to the Local host shown on the console.

### How did I create this project
I. App Scaffolding
  - Webpack, babel loader, css loader and hot-reloading was covered by the create-react-app APi. 
  - The Create-react-app has made a great react app bootstrap with their zero configuration API, that 
    is why I decided to use this.
II. WebApp State Management
  - I have decided to use redux for this app's management.
  - redux and react-redux go hand-in-hand very smoothly and is very easy to use. 
  - Even though the app does not need redux, I have decided to use it for demo purposes.
III. WebApp Async Management
  - For this app's asynchronous handling I have decided to use the sagas concept.
  - redux-saga constitutes this concept in a very concise way. It gives the dev a great ease of control
    over the side-effects of asynchronous calls.
IV. UI/UX 
  - I used material-ui for this app since it gives off a very simple feel for the visitor.
  - Plus, material-ui is very mobile-view friendly.
V. Limitations
  - The App is designed for desktop viewing only and the UI might be not ready for mobile devices.
  - The API that the app uses is out of the app's control and it will not be able to translate 
    words when the API is down.
    