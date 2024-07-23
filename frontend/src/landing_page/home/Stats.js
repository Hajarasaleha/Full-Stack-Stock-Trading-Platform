import React from 'react';
import "./Stats.css";

function Stats() {
    return (
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col-6' style={{ color: "#424242", padding: "20px" }}>
                    <h2 >Trust with confidence</h2>
                    <h6 >Customer-first always</h6>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h6 >No spam or gimmicks</h6>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h6 >The Zerodha universe</h6>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h6 >Do better with money</h6>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src="/media/images/ecosystem.png" alt="ecosystem" />
                    <div>
                        <a href="action">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="action">Try kite Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;