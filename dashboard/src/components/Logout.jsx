import React from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
        };
    return ( 
        <div>
            <h3 style={{textAlign:"center"}}>Are you sure you want to logout?</h3>
      <button style={{height:"3rem",width:"15rem",backgroundColor:"#3271a8",color:"white",borderRadius:"15px",marginTop:"30px",marginLeft:"18rem"}} 
      onClick={Logout}>LOGOUT
      </button>
      </div>
     );
}

export default Logout;