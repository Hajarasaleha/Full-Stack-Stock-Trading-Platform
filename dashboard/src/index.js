import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from "./App";
//import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <BrowserRouter>
     <App />
      {/* <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
      {/* </Routes>  */}
    </BrowserRouter>
 // </React.StrictMode>
);


