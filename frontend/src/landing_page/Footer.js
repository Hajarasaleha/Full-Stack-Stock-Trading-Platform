import React from 'react';

function Footer() {
    return (
        <footer className='bg-body-tertiary'>
            <div className='container-fluid mt-5 pb-0 pt-5 pl-5 pr-5 border-top sticky-bottom'>
                <div className='row'>
                    <div className='col-3'>
                        <img src="/media/images/logo.svg" alt="logo" style={{ height: "20px", width: "120px" }} />
                        <p style={{ fontSize: "0.7rem", color: "#424242", marginTop: "15px" }}>© 2010 - 2024, Zerodha Broking Ltd.All rights reserved.</p>
                        <span>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-x-twitter"></i></a>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-square-facebook"></i></a>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-instagram"></i></a>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-linkedin-in"></i></a>
                        </span> <hr />
                        <span>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-youtube"></i></a>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-whatsapp"></i></a>
                            <a style={{ fontSize: "1rem", paddingRight: "10px" }}><i class="fa-brands fa-telegram"></i></a>
                        </span>

                    </div>
                    <div className='col-3'>

                        <ul className='listItems'>
                            <li><h6 style={{ padding: "0", marginBottom: "20px", marginTop: "0" }}>Company</h6></li>
                            <li>About</li>
                            <li>Products</li>
                            <li>Pricing</li>
                            <li>Referral Programme</li>
                            <li>Careers</li>
                            <li>Zerodha.tech</li>
                            <li>Press&Media</li>
                            <li>Zerodha Cares</li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <ul className='listItems'>
                            <li><h6 style={{ padding: "0", marginBottom: "20px", marginTop: "0" }}>Support</h6></li>
                            <li>Contact us</li>
                            <li>Support Portal</li>
                            <li>Z-Connect Blog</li>
                            <li>List of Charges</li>
                            <li>Downloads and Resources</li>
                            <li>Videos</li>
                            <li>Market Overview</li>
                            <li>How to file a complaint?</li>
                            <li>Status of your complaints?</li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <ul className='listItems'>
                            <li><h6 style={{ padding: "0", marginBottom: "20px", marginTop: "0" }}>Account</h6></li>
                            <li>Open an account</li>
                            <li>Fund transfer</li>
                        </ul>
                    </div>
                </div>
                <div className='text-muted pb-5' style={{ fontSize: "0.65rem" }}>
                    <p> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p> Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                    <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p> "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    </div>
                    <div className='text-center text-muted p-0 m-0'>
                        <a  style={{fontSize:"0.7rem"}}>NSE</a>
                        <a  style={{fontSize:"0.7rem"}}>BSE</a>
                        <a  style={{fontSize:"0.7rem"}}>MCX</a>
                        <a  style={{fontSize:"0.7rem"}}>Terms&Conditions</a>
                        <a  style={{fontSize:"0.7rem"}}>Policies&Procedures</a>
                        <a  style={{fontSize:"0.7rem"}}>Privacy policy</a>
                        <a  style={{fontSize:"0.7rem"}}>Disclosure</a>
                        <a  style={{fontSize:"0.7rem"}}>For investor's attention</a>
                        <a  style={{fontSize:"0.7rem"}}>Investor charter</a>
                        </div>


                
            </div>
        </footer>
    );
}

export default Footer;