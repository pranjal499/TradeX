// Ticket form section: collects issue details from users.

import './CreateTicket.css'

export default function CreateTicket() {
    return(
        <div className="container">
            <div className="row my-5 pt-5 support-links">
                <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

                <div className="col-4 my-5">
                    <h4><i className="fa-solid fa-circle-plus"></i> Account opening</h4>

                    <a href="">Resident individual</a>
                    <br />
                    <a href="">Minor</a>
                    <br />
                    <a href="">Non Resident Indian (NRI)</a>
                    <br />
                    <a href="">Company, Partnership, HUF and LLP</a>
                    <br />
                    <a href="">Glossary</a>
                </div>
                <div className="col-4 my-5">
                    <h4><i class="fa-regular fa-circle-user"></i> Your TradeX Account</h4>

                    <a href="">Your Profile</a>
                    <br />
                    <a href="">Account modification</a>
                    <br />
                    <a href="">Client Master Report (CMR) and Depository Participant (DP)</a>
                    <br />
                    <a href="">Nomination</a>
                    <br />
                    <a href="">Transfer and conversion of securities</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i className="fa-solid fa-circle-plus"></i> Kite</h4>

                    <a href="">IPO</a>
                    <br />
                    <a href="">Trading FAQs</a>
                    <br />
                    <a href="">Margin Trading Facility (MTF) and Margins</a>
                    <br />
                    <a href="">Charts and orders</a>
                    <br />
                    <a href="">Alerts and Nudges</a>
                    <br />
                    <a href="">General</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i> Funds</h4>

                    <a href="">Add money</a>
                    <br />
                    <a href="">Withdraw money</a>
                    <br />
                    <a href="">Add bank accounts</a>
                    <br />
                    <a href="">eMandates</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i class="fa-regular fa-circle-dot"></i> Console</h4>

                    <a href="">Portfolio</a>
                    <br />
                    <a href="">Corporate actions</a>
                    <br />
                    <a href="">Funds statement</a>
                    <br />
                    <a href="">Reports</a>
                    <br />
                    <a href="">Profile</a>
                    <br />
                    <a href="">Segments</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i class="fa-solid fa-circle-notch"></i> Coin</h4>

                    <a href="">Mutual funds</a>
                    <br />
                    <a href="">National Pension Scheme (NPS)</a>
                    <br />
                    <a href="">Fixed Deposit (FD)</a>
                    <br />
                    <a href="">Features on Coin</a>
                    <br />
                    <a href="">Payments and Orders</a>
                    <br />
                    <a href="">General</a>
                    <br />
                </div>
            </div>
        </div>
    )
}