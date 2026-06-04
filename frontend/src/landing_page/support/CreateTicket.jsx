// Ticket form section: collects issue details from users.

import './CreateTicket.css'

const supportLink = (topic) =>
    `mailto:support@tradex.com?subject=${encodeURIComponent(`Support ticket: ${topic}`)}`;

export default function CreateTicket() {
    return(
        <div className="container">
            <div className="row my-5 pt-5 support-links">
                <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

                <div className="col-4 my-5">
                    <h4><i className="fa-solid fa-circle-plus"></i> Account opening</h4>

                    <a href={supportLink('Resident individual')}>Resident individual</a>
                    <br />
                    <a href={supportLink('Minor')}>Minor</a>
                    <br />
                    <a href={supportLink('Non Resident Indian (NRI)')}>Non Resident Indian (NRI)</a>
                    <br />
                    <a href={supportLink('Company, Partnership, HUF and LLP')}>Company, Partnership, HUF and LLP</a>
                    <br />
                    <a href={supportLink('Glossary')}>Glossary</a>
                </div>
                <div className="col-4 my-5">
                    <h4><i className="fa-regular fa-circle-user"></i> Your TradeX Account</h4>

                    <a href={supportLink('Your Profile')}>Your Profile</a>
                    <br />
                    <a href={supportLink('Account modification')}>Account modification</a>
                    <br />
                    <a href={supportLink('Client Master Report (CMR) and Depository Participant (DP)')}>Client Master Report (CMR) and Depository Participant (DP)</a>
                    <br />
                    <a href={supportLink('Nomination')}>Nomination</a>
                    <br />
                    <a href={supportLink('Transfer and conversion of securities')}>Transfer and conversion of securities</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i className="fa-solid fa-circle-plus"></i> Kite</h4>

                    <a href={supportLink('IPO')}>IPO</a>
                    <br />
                    <a href={supportLink('Trading FAQs')}>Trading FAQs</a>
                    <br />
                    <a href={supportLink('Margin Trading Facility (MTF) and Margins')}>Margin Trading Facility (MTF) and Margins</a>
                    <br />
                    <a href={supportLink('Charts and orders')}>Charts and orders</a>
                    <br />
                    <a href={supportLink('Alerts and Nudges')}>Alerts and Nudges</a>
                    <br />
                    <a href={supportLink('Kite General')}>General</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> Funds</h4>

                    <a href={supportLink('Add money')}>Add money</a>
                    <br />
                    <a href={supportLink('Withdraw money')}>Withdraw money</a>
                    <br />
                    <a href={supportLink('Add bank accounts')}>Add bank accounts</a>
                    <br />
                    <a href={supportLink('eMandates')}>eMandates</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i className="fa-regular fa-circle-dot"></i> Console</h4>

                    <a href={supportLink('Portfolio')}>Portfolio</a>
                    <br />
                    <a href={supportLink('Corporate actions')}>Corporate actions</a>
                    <br />
                    <a href={supportLink('Funds statement')}>Funds statement</a>
                    <br />
                    <a href={supportLink('Reports')}>Reports</a>
                    <br />
                    <a href={supportLink('Profile')}>Profile</a>
                    <br />
                    <a href={supportLink('Segments')}>Segments</a>
                    <br />
                </div>
                <div className="col-4 my-5">
                    <h4><i className="fa-solid fa-circle-notch"></i> Coin</h4>

                    <a href={supportLink('Mutual funds')}>Mutual funds</a>
                    <br />
                    <a href={supportLink('National Pension Scheme (NPS)')}>National Pension Scheme (NPS)</a>
                    <br />
                    <a href={supportLink('Fixed Deposit (FD)')}>Fixed Deposit (FD)</a>
                    <br />
                    <a href={supportLink('Features on Coin')}>Features on Coin</a>
                    <br />
                    <a href={supportLink('Payments and Orders')}>Payments and Orders</a>
                    <br />
                    <a href={supportLink('Coin General')}>General</a>
                    <br />
                </div>
            </div>
        </div>
    )
}
