import React from 'react';

function Universe() {
    return (
        <div className='container text-center mt-5' style={{ color: "#424242" }}>
            <div className='row'>
                <p style={{ fontSize: "1.1rem" }}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
                <h1 className='mt-5' style={{ fontSize: "1.7rem" }}>The Zerodha Universe</h1>
                <p className='mt-2'>Extend your trading and investment experience even further with our partner platforms</p>


                <div className='col-4 p-3 mt-3'>
                    <img src='/media/images/smallcase-logo.png' alt="smallcase" style={{ width: "60%" }} ></img>

                    <p className='text-muted' style={{ fontSize: "0.7rem", padding: "0.8rem" }}>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='/media/images/streak-logo.png' alt="streak" style={{ width: "50%" }}></img>
                    <p className='text-muted' style={{ fontSize: "0.7rem", padding: "0.8rem" }}>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='/media/images/sensibull-logo.svg' alt="sensibull" style={{ width: "60%" }}></img>
                    <p className='text-muted' style={{ fontSize: "0.7rem", padding: "0.9rem" }}>Options trading platforms</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='/media/images/zerodhafundhouse.png' alt="zerodha fund house" style={{ width: "60%" }}></img>
                    <p className='text-muted' style={{ fontSize: "0.7rem", padding: "0.8rem" }}>Assets management</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='/media/images/tijori.svg' alt="tijori" style={{ width: "50%" }}></img>
                    <p className='text-muted' style={{ fontSize: "0.7rem", padding: "0.8rem" }}>Fundamental research platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src='/media/images/ditto-logo.png' alt="ditto" style={{ width: "50%" }}></img>
                    <p className='text-muted' style={{ fontSize: "0.7rem", padding: "0.8rem" }}>Insurance</p>
                </div>
            </div>
        </div>

    );
}

export default Universe;