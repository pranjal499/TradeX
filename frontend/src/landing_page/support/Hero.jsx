// Support hero section: introduces user support options.

import './Hero.css';

const supportLink = (topic) =>
    `mailto:support@tradex.com?subject=${encodeURIComponent(`Support ticket: ${topic}`)}`;

export default function Hero() {
    return (
        <section className="container-fluid px-5" id="supportHero">
            <div className="pt-5 mx-5 color-white" id='supportWrapper'>
                <h4 className='fs-5'>Support portal</h4>
                <a href={supportLink('Track tickets')}>Track tickets</a>
            </div>
            <div className="row p-3">
                <div className="col p-3 mx-3 color-white">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg. how do I activate F&0" className='my-3' />
                    <br />
                    <a href={supportLink('Track account opening')}>Track account opening</a>
                    <a href={supportLink('Track segment activation')}>Track segment activation </a>
                    <a href={supportLink('Intraday margins')}>Intraday margins</a>
                    <a href={supportLink('Kite user manual')}>Kite user manual</a>
                </div>
                <div className="col p-3 mx-3 color-white">
                    <h1 className='fs-3'>Featured</h1>
                    <ol className='color-white'>
                        <a href={supportLink('Current Takeovers and Delisting')}>1. Current Takeovers and Delisting - January 2024</a>
                        <br />
                        <a href={supportLink('Latest Intraday leverages - MIS & CO')}>2. Latest Intraday leverages - MIS & CO</a>
                    </ol>
                </div>
            </div>
        </section>

    )
}
