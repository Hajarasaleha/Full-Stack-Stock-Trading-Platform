import React from 'react';

function hero() {
  return (
    <div className='container text-center p-0 border-bottom mb-5' style={{ color: "#424242" }}>
      <div className='row'>
        <h1 className='pb-2'>Technology</h1>
        <h6 className='pb-3' style={{ fontSize: "1.1rem", fontWeight: "400" }}>Sleek, modern, and intuitive trading platforms</h6>
        <p className='pb-5'>Check out our <a href="/NotFound">investment offerings →</a></p>
      </div>
    </div>
  );
}

export default hero;