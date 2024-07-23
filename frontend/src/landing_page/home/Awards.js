import React from 'react';

function Awards() {
  return (
    <div className='container mt-5 mb-5' style={{ color: "#424242" }}>
      <div className='row'>
        <div className='col-6'>
          <img src="/media/images/largest-broker.svg" alt="largest-broker" style={{ padding: "50px", marginRight: "15px" }} />
        </div>
        <div className='col-6'>
          <h3 style={{ fontWeight: "500", marginBottom: "20px" }}>Largest stock broker in India</h3>
          <p>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          <img src="/media/images/press-logos.png" alt="logos" style={{ width: "100%" }}></img>

        </div>
      </div>
    </div>
  );
}

export default Awards;