import React from 'react';

function Team() {
    return (
        <h1>
            <div className='container'>
                <div className='row  text-center p-5' style={{ color: "#424242" }}>

                    <div className='col-6 mt-5'>
                        <img src="/media/images/nithin-kamath.jpg" alt="nithin-kamath"
                            style={{ borderRadius: "100%", width: "60%" }}></img>
                        <h6>Nithin Kamath</h6>
                        <p style={{ fontSize: "0.7rem", fontWeight: "300" }}>Founder, CEO</p>
                    </div>
                    <div className='col-6  text-start' style={{ fontSize: "1rem", fontWeight: "400", lineHeight: "1.5rem" }}>
                        <h2 className='mb-5' style={{ fontSize: "1.8rem" }}>People</h2>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p> Playing basketball is his zen.</p>

                        <p> Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>
            </div>
        </h1>
    );
}

export default Team;