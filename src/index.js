import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
// import './index.css';
import App from './App';
import store from './redux/store';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
// adding some comments just for func 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>
);
