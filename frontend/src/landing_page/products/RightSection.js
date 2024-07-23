import React from 'react';

function RightSection({ imgURL, productName, productDescription, link }) {
    return (
        <div className='container m-0 p-0'>
            <div className='row'>
                <div className='col-4 mt-5'>
                    <h2 className='mt-5' style={{ fontSize: "1.5rem" }}>{productName}</h2>
                    <p >{productDescription}</p>
                    <a href={link}>Learn more</a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 m-0 p-0'>
                    <img src={imgURL}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;