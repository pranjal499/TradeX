// Reusable CTA section encouraging users to open an account.

import { Link } from 'react-router-dom';

export default function OpenAccount() {
    return( 
        <div className="container mb-5">
            <div className="row text-center p-5">
                    <h1 className='mb-3 fs-2'>Open a TradeX account</h1>
                    <p className='mb-5 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&0 trades.</p>
                    <Link to="/signup" className="w-25 m-auto p-2 rounded btn fs-5">Sign up for free</Link>
            </div>
        </div>
    )
}
