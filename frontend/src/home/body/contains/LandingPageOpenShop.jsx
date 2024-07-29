import React from 'react';
import img from '../../../pictures/body/contentImg/Rectangle 2.svg';
import "../../../style/body/contains/LandingPageOpenShop.css";
import shop from "../../../pictures/body/contentImg/shopping-bag.svg";

function LandingPageOpenShop() {
    return (
        <div className="landing-p-openshop-container">
            <div className="landing-p-openshop-header">
                <p className="landing-p-openshop-subtitle">Popular Product</p>
                <h1 className="landing-p-openshop-title">Coffee popular Product</h1>
            </div>
            <div className="landing-p-openshop-products">
                <div className="landing-p-openshop-product">
                    <img src={img} alt="Brazil Coffee Gred" className="landing-p-openshop-product-image" />
                    <h2 className="landing-p-openshop-product-name">BRAZIL COFFEE GRED</h2>
                    <button className="button_Landing">
                        <img src={shop} alt="Add to cart" />
                        <p className="p_Landing">Add to cart</p>
                    </button>
                </div>
                <div className="landing-p-openshop-product">
                    <img src={img} alt="Brazil Coffee Gred" className="landing-p-openshop-product-image" />
                    <h2 className="landing-p-openshop-product-name">BRAZIL COFFEE GRED</h2>
                    <p className="landing-p-openshop-product-price">PRICE - <span className="landing-p-openshop-product-price-details">$20.00 / $15.00</span></p>
                </div>
                <div className="landing-p-openshop-product">
                    <img src={img} alt="Brazil Coffee Gred" className="landing-p-openshop-product-image" />
                    <h2 className="landing-p-openshop-product-name">BRAZIL COFFEE GRED</h2>
                    <p className="landing-p-openshop-product-price">PRICE - <span className="landing-p-openshop-product-price-details">$20.00 / $15.00</span></p>
                </div>
            </div>
            <div className="landing-p-openshop-footer">
                <button className="landing-p-openshop-button">
                    <h1>View all product</h1>
                </button>
            </div>
        </div>
    );
}

export default LandingPageOpenShop;
