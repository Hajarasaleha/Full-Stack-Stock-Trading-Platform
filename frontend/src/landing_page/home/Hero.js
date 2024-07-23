import React from 'react';

function Hero() {
   return (
      <div className='container p-0 text-center  mb-5'>
         <div className='row'>
            <img src="/media/images/landing.png" alt="Hero" style={{ width: "70%", margin: "auto", marginBottom: "30px", marginTop: "30px" }} />
            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button type="button" class="btn btn-primary" style={{ width: "20%", margin: "auto", backgroundColor: "#387ed1" }}>Signup Now</button>
         </div>
      </div>
   );
}

export default Hero;