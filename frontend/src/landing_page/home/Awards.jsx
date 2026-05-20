// Awards section: highlights recognitions and trust indicators.



export default function Awards() {
    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-6 p-3">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker image" className="w-75 img" />
                </div>
                <div className="col-6 p-3 awards-info">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million TradeX clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    <img src="media/images/pressLogos.png" alt="Press Logos" />
                    </div>
                </div>
            </div>
        </div>
    )
}