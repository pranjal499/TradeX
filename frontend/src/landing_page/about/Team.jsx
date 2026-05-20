// Team section: presents core team members and roles.

import './Team.css';

export default function Team() {
    return (
        <div className="container">
            <div className="row p-5">
                <h1 className="fs-2 text-center">People</h1>
            </div>
            <div className="row mb-5 ">
                <div className="col p-4 text-center">
                    <img src="/media/images/profile.png" alt="Image" className="rounded-circle pranjal-img mb-3"/>
                    <h5>Pranjal Singh</h5>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col p-4">
                    <p>Pranjal bootstrapped and founded TradeX in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeX has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    )
}