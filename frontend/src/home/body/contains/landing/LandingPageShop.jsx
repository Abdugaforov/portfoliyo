import React, { Component } from 'react';
import img from "../../../../pictures/body/contentImg/cofe.svg";
import "../../../../style/body/contains/LandingPageShop.css"
class LandingPageShop extends Component {
    render() {
        return (
            <div className="LandingPageShopContainer">
                <div className="LandingPageShopImageContainer">
                    <img src={img} alt="Coffee Machine" className="LandingPageShopImage" />
                </div>
                <div className="LandingPageShopTextContainer">
                    <h1 className="LandingPageShopTitle">Coffee machine, buy for home</h1>
                    <p className="LandingPageShopText">
                        Mauris Rhoncus In Imperdiet Placerat. Vestibulum Emsimd Nisi Suscipit Ligula Volupat.
                        A Feyugiat Urna Maximus. Cars Massa Nibhhendrit Donic Et Nib Maximus. Est Eu. Mattis Nuce.
                        Presant Ut Quam Quis Quam. Aliis Fri Nibh Ligula. Morbi Vistibulum Id Tellus Mmodo Mattis.
                        Aliquam Erat Volutpat.
                    </p>
                    <button className="LandingPageShopButton">Discover now</button>
                </div>
            </div>
        );
    }
}

export default LandingPageShop;
