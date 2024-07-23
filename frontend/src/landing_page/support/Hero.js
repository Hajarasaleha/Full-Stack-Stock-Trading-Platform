import React from 'react';

function Hero() {
  return (
    <div className='container-fluid p-0 m-0 text-white' style={{ backgroundColor: "#387ed1" }}>
      <div className='row p-0 m-0'>
        <div className='col-7' style={{ paddingLeft: "80px" }}>
          <h6 style={{ paddingBottom: "40px" }}>Support portal</h6>
          <p className='fs-5'>Search for an answer or browse help topics to create a ticket</p>
          <input placeholder='  Eg:how do i activate F&O,why my order getting rejected..' style={{ width: "100%", height: "50px", fontSize: "0.8rem" }}></input>
          <div className='p-0 mt-2 mb-5'>
            <a className='text-white' href="/support">Track account opening</a>
            <a className='text-white' href="/support">Track segment activation</a>
            <a className='text-white' href="/support">Intraday margins</a> <br />
            <a className='text-white' href="/support">Kite user manual</a>
          </div>
        </div>
        <div className='col-5'>
          <p className='text-end pt-4 pb-5'><a className='text-white mb-5 mt-5' href="/support">Track tickets</a></p>
          <h6 className='mt-5'>Featured</h6>
          <a className='text-white pb-3' href="/support">1.Current takeovers and Delisting - June 2024</a><br />
          <a className='text-white' href="/support">2.Latest intraday leverages and square-off timings</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;