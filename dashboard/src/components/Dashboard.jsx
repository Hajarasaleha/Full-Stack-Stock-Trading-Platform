import React from "react";
import { Route, Routes } from "react-router-dom";

import Logout from "./Logout";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders.jsx";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route  path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;