import React, { useState } from 'react';
import Header from "../headerAndFooter/Header.jsx";
import Footer from "../headerAndFooter/Footer.jsx";
import "../../style/body/LandingPage.css";
import coffeeImage from "../../pictures/body/cofe/Rectangle 12.svg"; // Ensure the correct path

import LandingPageCoffee from "./contains/LandingPageCoffee.jsx";
import LandingPageShopCoffee from "./contains/LandingPageShopCoffee.jsx";
import LandingPageOpenShop from "./contains/LandingPageOpenShop.jsx";
// import VideoModal from "../../home/body/contains/VideoMaodal.jsx"; // Import the VideoModal component

function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="landing-page">
            <Header />

            <div >
                <div className="hero-section" style={{backgroundImage: `url(${coffeeImage})`}}>
                    <div className="hero-content">
                        <h1 className="LandingTitle">Enjoy Your Morning Coffee.</h1>
                        <p className="landingTitleDesc">The Coffee is brewed by first roasting the green coffee beans
                            over hot coals in a brazier. Given to Opportunity.</p>
                        <button className="hero-button">Test Coffee</button>
                        <button className="hero-button" onClick={openModal}>Play Video</button>
                    </div>
                </div>

                <div className={"maxWithIsLandingPage"}>
                    <div>
                        <LandingPageCoffee />
                    </div>
                    <div>
                        <LandingPageShopCoffee />
                    </div>
                    <div>
                        <LandingPageOpenShop/>
                    </div>
                </div>
            </div>

            <Footer />

            {/*<VideoModal*/}
            {/*    isOpen={isModalOpen}*/}
            {/*    onRequestClose={closeModal}*/}
            {/*/>*/}
        </div>
    );
}

export default LandingPage;
