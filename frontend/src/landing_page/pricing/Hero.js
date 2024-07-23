import React from 'react';

function Hero() {
    return (
        <div className='container text-center mb-5 border-bottom' style={{ color: "#424242" }}>
            <div className='row  mt-4 mb-5 pb-5 border-bottom'>
                <h1 className='fs-1'>Pricing</h1>
                <p className='pb-3' style={{ fontSize: "1.1rem" }}>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className='row text-muted'>
                <div className='col-4'>
                    <img src="/media/images/0-price.svg" alt="0-price" style={{ width: "80%" }}></img>
                    <h4>Free equity delivery</h4>
                    <p className='p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src="/media/images/20-price.svg" alt="20-price" style={{ width: "80%" }}></img>
                    <h4>Intraday and F&O trades</h4>
                    <p className='p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src="/media/images/0-price.svg" alt="0-price" style={{ width: "80%" }}></img>
                    <h4>Free direct MF</h4>
                    <p className='p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;