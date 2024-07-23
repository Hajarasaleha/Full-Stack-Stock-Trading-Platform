import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./components/Index.js";
import {Home}   from "./components/Index.js";



export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        
        
      </Routes>
      </div>
      
  
   
  
  );
}
