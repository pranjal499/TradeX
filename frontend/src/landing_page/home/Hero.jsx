import './Hero.css';

export default function Hero() {
    return( 
        <div className="container mb-5">
            <div className="row text-center p-5">
                    <img src="media/images/homeHero.png" alt="Home Hero" className="w-75 img"/>
                    <h1 className='mb-3 fs-2'>Invest in everything</h1>
                    <p className='mb-5 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="w-25 m-auto p-2 rounded btn fs-5">Sign up for free</button>
            </div>
        </div>
    )
}