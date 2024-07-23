import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='container' style={{ color: "#424242" }}>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <h6 className='mt-5'>404</h6>
                    <h1>Sajida couldn’t find that page</h1>
                    <p style={{ marginTop: "10px" }}>We couldn’t find the page you were looking for.Visit<Link to="/">Zerodha's Home </Link></p>
                </div>
                <div className='col-6'>
                    <img src="/media/images/sajida.jpg" alt="Sajida" style={{ height: "60%", width: "80%", borderRadius: "10px", border: "5px solid black" }}></img>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
