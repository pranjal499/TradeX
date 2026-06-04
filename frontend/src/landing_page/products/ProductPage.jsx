// Products page container: assembles all product detail sections.

import Hero from "./Hero";
import LeftSection from './LeftSection';
import RightSection from "./RightSection";
import Universe from "./Universe";


export default function ProductPage() {
    return (
        <div>
            {/* Hero section */}
            <Hero />

            {/* Kite section */}
            <LeftSection
                imgUrl="media/images/kite.png"
                title="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                link1="https://kite.zerodha.com/"
                link1Txt="Try Demo"
                link2="https://zerodha.com/products/kite/"
                link2Txt="Learn More"
            />

            {/* Console section */}
            <RightSection
                imgUrl="media/images/console.png"
                title="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                link="https://console.zerodha.com/"
                linkTxt="Learn more"
            />

            {/* Coin section */}
            <LeftSection
                imgUrl="media/images/coin.png"
                title="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="https://coin.zerodha.com/"
                link1Txt="Coin"
            />

            {/* Kite Connect API section */}
            <RightSection
                imgUrl="media/images/kiteconnect.png"
                title="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                link="https://kite.trade/connect/"
                linkTxt="Kite connect"
            />

            {/* Varsity mobile section */}
            <LeftSection
                imgUrl="media/images/varsity.png"
                title="Varsity mobile"
                description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            />

            <p className="text-center my-5 fs-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

            {/* Universe page */}
            <Universe />
        </div>
    )
}
