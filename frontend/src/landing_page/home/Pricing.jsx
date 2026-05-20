// Home pricing preview: summarizes pricing highlights with CTA.

export default function Pricing() {
    return( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <h2 className="mb-3">Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="mx-5">See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2">

                </div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1 className="mb-3">&#8377;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="mb-3">&#8377;20</h1>
                            <p>Intraday and F&0</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}