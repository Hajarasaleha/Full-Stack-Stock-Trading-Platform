import React from 'react';

function Ticket() {
    return (

        <div className='container '>
            <div className='row'>
                <p className='fs-5 text-muted'>To create a ticket, select a relevant topic</p>
                <div className='col-4'>
                    <p className='fs-6 p-1'><i class="fa-solid fa-circle-plus"></i> Account Opening</p>
                    <a id="ticket" href="/support">Getting started</a><br />
                    <a id="ticket" href="/support">Online</a><br />
                    <a id="ticket" href="/support">Offline</a><br />
                    <a id="ticket" href="/support">Charges</a><br />
                    <a id="ticket" href="/support">Company,Partnership and HUF</a><br />
                    <a id="ticket" href="/support">Non-Resident Indian (NRI)</a>
                    <p className='fs-6 pt-3 pb-1'><i class="fa-solid fa-chalkboard"></i> Funds</p>
                    <a id="ticket" href="/support">Fund withdrawal</a><br />
                    <a id="ticket" href="/support">Adding funds</a><br />
                    <a id="ticket" href="/support">Adding bank accounts</a><br />
                    <a id="ticket" href="/support">eMandates</a>
                </div>
                <div className='col-4'>
                    <p className='fs-6 p-1'><i class="fa-regular fa-user"></i>  Your Zerodha Account</p>
                    <a id="ticket" href="/support">Login credentials</a><br />
                    <a id="ticket" href="/support">Your profile</a><br />
                    <a id="ticket" href="/support">Account modification and segment addition</a><br />
                    <a id="ticket" href="/support">CMR & DP ID</a><br />
                    <a id="ticket" href="/support">Nomination</a><br />
                    <a id="ticket" href="/support">Transfer and conversion of shares</a>
                    <p className='fs-6 pt-3 pb-1'><i class="fa-regular fa-circle-check"></i> Console</p>
                    <a id="ticket" href="/support">IPO</a><br />
                    <a id="ticket" href="/support">Portfolio</a><br />
                    <a id="ticket" href="/support">Funds statement</a><br />
                    <a id="ticket" href="/support">Profile</a><br />
                    <a id="ticket" href="/support">Reports</a><br />
                    <a id="ticket" href="/support">Referral program</a>
                </div>
                <div className='col-4'>
                    <p className='fs-6 p-1'><i class="fa-solid fa-signal"></i>  Trading and Markets</p>
                    <a id="ticket" href="/support">Trading FAQ's</a><br />
                    <a id="ticket" href="/support">Kite</a><br />
                    <a id="ticket" href="/support">Margins</a><br />
                    <a id="ticket" href="/support">Products and order types</a><br />
                    <a id="ticket" href="/support">Corporate actions</a><br />
                    <a id="ticket" href="/support">Kite features</a>
                    <p className='fs-6 pt-3 pb-1'><i class="fa-solid fa-circle-notch"></i> Coin</p>
                    <a id="ticket" href="/support">Understanding mutual funds and coin</a><br />
                    <a id="ticket" href="/support">Coin app</a><br />
                    <a id="ticket" href="/support">Coin web</a><br />
                    <a id="ticket" href="/support">Transactions and reports</a><br />
                    <a id="ticket" href="/support">National Pension Scheme (NPS)</a>

                </div>
            </div>
        </div>
    );
}

export default Ticket;