import './Hero.css';

export default function Hero() {
    return(
        <section className="container-fluid px-5" id="supportHero">
            <div className="pt-5 mx-5" id='supportWrapper'>
                <h4 className='fs-5'>Support portal</h4>
                <a href="">Track tickets</a>
            </div>
            <div className="row p-3">
                <div className="col p-3 mx-3">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg. how do I activate F&0" className='my-3'/>
                    <br />
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation </a>
                    <a href="">Intraday margins</a> 
                    <a href="">Kite user manual</a>
                </div>
                <div className="col p-3 mx-3">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>

    )
}