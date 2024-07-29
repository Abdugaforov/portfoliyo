import React from 'react';
import coffee1 from "../../../pictures/body/cofe/Rectangle 4.svg";
import coffee2 from "../../../pictures/body/cofe/Rectangle 4 (1).svg";
import coffee3 from "../../../pictures/body/cofe/Rectangle 4 (2).svg";
import "../../../style/body/contains/LandingPageCoffee.css"; // Import the CSS file

function LandingPageCoffee() {
    return (
        <div className="coffee-section">
            <div className="coffee-card mx-4">
                <div className="landing-p">
                    <p className="number">01</p>
                    <p className="mx-2">Best Coffee Flavour</p>
                </div>
                <img src={coffee1} alt="Best Coffee Flavour"/>
            </div>
            <div className="coffee-card">
                <div className="landing-p">
                    <p className="number">02</p>
                    <p className="mx-2">Place to get lost</p>
                </div>
                <img src={coffee2} alt="Place to get lost"/>
            </div>
            <div className="coffee-card mx-4">
                <div className="landing-p">
                    <p className="number">03</p>
                    <p className="mx-2">Proper roasting</p>
                </div>
                <img src={coffee3} alt="Proper roasting"/>
            </div>
        </div>
    );
}

export default LandingPageCoffee;
