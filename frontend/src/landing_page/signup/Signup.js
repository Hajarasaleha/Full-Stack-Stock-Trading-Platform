import React from 'react';


function Signup() {
    return (
        <>
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col-8 ml-5'>
                        <img src="media/images/signup.png" alt="signup" style={{ width: "80%" }} />
                    </div>
                    <div className='col-4 text-muted'>
                        <h2 className='ml-2 pl-2'>Signup now</h2>
                        <p>Or track your existing application.</p>
                        <div class="form-floating">
                            <input type="tel" class="form-control" id="floatingInputGrid" value="+91" />
                            <label for="floatingInputGrid">Mobile number</label>
                        </div>
                        <p className='text-muted' style={{ fontSize: "0.8rem" }}>You will receive an OTP on your number</p>
                        <button style={{ backgroundColor: "#387ed1", color: "white", height: "40px", width: "35%", border: "1px solid #387ed1" }}>Continue</button>
                        <p className='mt-2'><a href="/NotFound">want to open an NRI account?</a></p>
                    </div>
                </div>
                <div className='row text-center text-muted ml-5 mr-5 p-5 mt-0'>
                    <p style={{ fontSize: "0.8rem" }}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
                    <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
                </div>
            </div>

        </>
    );
}

export default Signup;
