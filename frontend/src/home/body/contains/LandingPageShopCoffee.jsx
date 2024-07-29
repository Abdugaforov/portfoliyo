import React from 'react';
import img1 from "../../../pictures/body/contentImg/Rectangle 14.svg";
import img2 from "../../../pictures/body/contentImg/Rectangle 7.svg";
import img3 from "../../../pictures/body/contentImg/Rectangle 13.svg";
import "../../../style/body/contains/LandingPageShopCoffee.css"; // Import the CSS file

function LandingPageShopCoffee() {
    return (
        <div className="landing-page-shop-coffee">
            <div className="images-and-text">
                <div className="image-column">
                    <img src={img3} alt="Coffee 1" className="image"/>
                    <img src={img2} alt="Coffee 2" className="image"/>
                </div>
                <div className="image-column">
                    <img src={img1} alt="Coffee 3" className="image2"/>
                </div>
                <div className="text-section">
                    <h2 className="title">Our history</h2>
                    <h3 className="subtitle">Create a new story with us</h3>
                    <p className="description">
                        Mauris Rhoncus In Imperdiet Placerat. Vestibulum Erat Nisl Suscipit Ligula Volutpat A, feugiat Ut Maximus. Class Mass Nibh Endumitiu. Donec E Nibh Maximus. Eu, mattis Nuce, Present Qui Quis Quam Venen Atis Fringilla. Mauris Vestibulum Et Tellus Ameda Mattis. Aliquam Erat Volutpat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LandingPageShopCoffee;
