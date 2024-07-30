import React from 'react';
import '../../../../style/body/contains/LandingPageShopOpenProduct.css';
import img1 from '../../../../pictures/body/cofe/picture/Bg.svg';
import img2 from '../../../../pictures/body/cofe/picture/Bg (1).svg';
import img3 from '../../../../pictures/body/cofe/picture/Bg (2).svg';
import img4 from '../../../../pictures/body/cofe/picture/Bg (3).svg';

function LandingPageShopOpenProduct() {
    return (
        <div className="landing_shopOpenProduct">
            <div className="landing_shopOpenProduct-header">
                <p className="landing_shopOpenProduct-title1">Menu</p>
                <p className="landing_shopOpenProduct-title">Coffee popular menu</p>
            </div>
            <div className="landing_shopOpenProduct-cards">
                <div className="landing_card">
                    <img src={img1} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img2} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img3} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img4} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img1} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img2} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img3} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
                <div className="landing_card">
                    <img src={img4} alt="Americano roasted gred" className="landing_card-img"/>
                    <div className="landing_card-content">
                        <p className="landing_card-title">Americano roasted gred</p>
                    </div>
                    <div  className="landing_card-content">
                        <p className="landing_card-price">$12.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageShopOpenProduct;
