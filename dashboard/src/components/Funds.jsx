import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{fontSize:"0.75rem"}}>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;