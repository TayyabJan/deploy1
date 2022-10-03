import React from 'react';
import ReactDOM from 'react-dom/client';
 
 
 


 
 

import reportWebVitals from './reportWebVitals';
import Test from './Routes/Test';
 
 
 

//import App from './fcomponents/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Nofify/> */}
    <Test/>
    {/* <Ref/> */}
    {/* <App/> */}
    {/* <FormikLogin/> */}
    {/* <MaterialUI/> */}
    {/* <BootstrapUI/> */}
   {/* <SemanticUI/> */}
    {/* <App/> */}
     {/* <Todo/> */}
    {/* <Form/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
