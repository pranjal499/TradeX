import './Hero.css'

export default function Hero() {
    return (
        <div className="container">
            <div className="row text-center my-5 pricing-hero">
                <h1 className="fs-3 mt-5">Charges</h1>
                <p className="fs-5 mt-2">List of all charges and taxes</p>

                <div className="d-flex justify-content-between mt-5 pt-5">

                    <div className="col pricing px-3">
                        <img src="media/images/pricing0.svg" alt="Pricing 0" />
                        <h1 className='fs-3'>Free equity delivery</h1>
                        <p className='mt-3 fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col pricing px-3">
                        <img src="media/images/pricingEquity.svg" alt="Pricing Equity" />
                        <h1 className='fs-3'>Intraday and F&O trades</h1>
                        <p className='mt-3 fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col pricing px-3">
                        <img src="media/images/pricingMF.svg" alt="Pricing MF" />
                        <h1 className='fs-3'>Free direct MF</h1>
                        <p className='mt-3 fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}