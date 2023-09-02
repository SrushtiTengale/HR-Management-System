import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { store } from './configure-store';
// import { Provider } from 'react-redux';
// import Common from './RoutingDemo/CommonComponent';
// import Design from './BootstrapDemo/DesignComponent';
// import { Employee } from './ApiCalling/EmployeeComponent';
// import { State } from './ApiCalling/StateComponent';
import { Common } from './HRMSApp/CommonComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Employee/> */}
  {/* <Common/> */}
  <Common/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
