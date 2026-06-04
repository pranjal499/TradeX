// Education section: showcases learning resources for users.

export default function Education() {
    return (
        <div className="container p-3 mt-5">
            <div className="row">
                <div className="col-6 p-3">
                    <img src="media/images/education.svg" alt="Education image" className="img img-edu w-100" />
                </div>
                <div className="col-6 p-3">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading .</p>
                    <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer">Varsity <i className="fa-solid fa-arrow-right-long"></i></a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="https://tradingqna.com/" target="_blank" rel="noreferrer">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}
