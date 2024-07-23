import React from 'react';

function LeftSection({ imgURL, productName, productDescription, tryDemo, learn, googlePlay, appStore }) {
    return (
        <div className='container m-0 p-0' style={{ color: "#424242" }}>
            <div className='row'>
                <div className='col-6'>
                    <img src={imgURL}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5'>
                    <h2 style={{ fontSize: "1.5rem" }}>{productName}</h2>
                    <p style={{ fontSize: "0.8rem", wordSpacing: "5px", lineHeight: "20px" }}>{productDescription}</p>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learn}>Learn more</a>
                    <div className='pt-4'>
                        <a href={googlePlay}>
                            <img src="/media/images/google-play-badge.svg" alt="appstore" style={{ width: "30%" }} />
                        </a>
                        <a href={appStore}>
                            <img src="/media/images/appstore-badge.svg" alt="appstore" style={{ width: "30%" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;