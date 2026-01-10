import './Stats.css';

export default function Stats() {
    return( 
        <div className="container p-3">
            <div className="row">
                <div className="col-6 p-3">
                    <h2 className="fs-3 mb-5">Trust with confidence</h2>

                    <h3 className="fs-5">Customer first always</h3>
                    <p className="text-muted">That's why 1.3+ crore customer trust TradeX with &#8377;3.5+ lakh crore of equity investment</p>

                    <h3 className="fs-5">No spam or gimmicks</h3>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality app that you use at your pace, the way you like.</p>

                    <h3 className="fs-5">The TradeX universe</h3>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ intech startups offer you tailored services specific to your need.</p>

                    <h3 className="fs-5">Do better with money</h3>
                    <p className="text-muted para">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" alt="Ecosystem image" className="w-100 img"/>
                    <div>
                        <a href="" className="mx-5">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}