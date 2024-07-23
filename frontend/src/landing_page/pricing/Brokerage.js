import React from 'react';

function Brokerage() {
    return (
        <div className='container mt-5' style={{ color: "#424242" }}>
            <div className='row '>
                <div className='col-6 text-center'>
                    <a href="/NotFound" className='fs-6'>Brokerage Calculator</a></div>
                <div className='col-6 text-center'> <a href="/NotFound" className='fs-6'>List of charges</a>
                </div>
                <div className='col-8'>

                    <ul className='text-muted lh-lg fw-normal'>
                        <li style={{ fontSize: "0.62rem" }}>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li style={{ fontSize: "0.62rem" }}>Digital contract notes will be sent via e-mail.</li>
                        <li style={{ fontSize: "0.62rem" }}>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li style={{ fontSize: "0.62rem" }}>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li style={{ fontSize: "0.62rem" }}>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li style={{ fontSize: "0.62rem" }}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;