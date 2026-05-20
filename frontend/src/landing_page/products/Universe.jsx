// Universe section: showcases the broader partner/instrument ecosystem.

import './Universe.css';

export default function Universe() {
    return (
        <div className="container">
            <div className="row text-center my-5">
                <h1>The TradeX Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5 universe-block">
                    <img src="media/images/tradexFundhouse.png" alt="TradeX fund house" className="w-75" />
                    <p className="text-muted mt-3">Our asset management venture <br /> that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5 universe-block">
                    <img src="media/images/sensibullLogo.svg" alt="TradeX fund house" className="w-75" />
                    <p className="text-muted mt-5">Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5 universe-block">
                    <img src="media/images/tijori.svg" alt="TradeX fund house" className="w-75" />
                    <p className="text-muted">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.
                    </p>
                </div>

                <div className="col-4 p-3 mt-5 universe-block">
                    <img src="media/images/streakLogo.png" alt="TradeX fund house" className="w-75" />
                    <p className="text-muted mt-3">Systematic trading platform <br /> that allows you to create and backtest <br /> "strategies without coding. </p>
                </div>
                <div className="col-4 p-3 mt-5 universe-block">
                    <img src="media/images/smallcaseLogo.png" alt="TradeX fund house" className="w-75" />
                    <p className="text-muted mt-3">Thematic investing platform <br/> "that helps you invest in diversified<br/> "baskets of stocks on ETFs."</p>
                </div>
                <div className="col-4 p-3 mt-5 universe-block">
                    <img src="media/images/dittoLogo.png" alt="TradeX fund house" className="w-50" />
                    <p className="text-muted mt-3">Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
                </div>

                <button className="w-25 m-auto p-2 rounded btn fs-5 my-5">Sign up for free</button>
            </div>
        </div>
    )
}