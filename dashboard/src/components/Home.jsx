import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import {ToastContainer,  toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
   return status
      ? toast(`Hello ${user}`, {
        position: "top-right",
      })
    : (removeCookie("token"), navigate("/login"));
};   
verifyCookie();
}, [cookies, navigate, removeCookie]);
// const Logout = () => {
// removeCookie("token");
// navigate("/signup");
// };
  return (
    <>
      <div style={{width:"100vw"}}>
      
        <TopBar />
        <Dashboard />
       
      {/* <div>
      <button style={{margin:"auto",height:"30px",width:"60px",backgroundColor:"#424242"}} onClick={Logout}>LOGOUT</button>
      </div> */}
      </div>
    </>
  );
    }

export default Home;