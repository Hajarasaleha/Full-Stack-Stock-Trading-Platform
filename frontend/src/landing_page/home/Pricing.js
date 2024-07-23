import React from 'react';

function Pricing() {
    return (
        <div className='container' style={{ color: "#424242" }}>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h2 style={{ marginBottom: "20px" }}>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="action">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6' style={{ border: "1px solid grey", borderRadius: "4px" }}>
                            <h1 style={{ marginBottom: "20px" }}>&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6' style={{ border: "1px solid grey", borderRadius: "4px" }}>
                            <h1 style={{ marginBottom: "20px" }}>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;