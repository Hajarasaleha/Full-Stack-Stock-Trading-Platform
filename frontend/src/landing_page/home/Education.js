import React from 'react';

function Education() {
    return (
        <div className='container' style={{ color: "#424242" }}>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="/media/images/index-education.svg" alt="education" />
                </div>
                <div className='col-6 p-4'>
                    <h4 style={{ fontWeight: "400", marginBottom: "20px" }}>Free and open market education</h4>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="action">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p style={{ marginTop: "20px" }}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="action"> TradingQ&amp;A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;