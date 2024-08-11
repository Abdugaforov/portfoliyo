import React, { useState } from 'react';
import img from "../../../../pictures/body/bodyFooter/arrow-right.svg";
import img2 from "../../../../pictures/body/bodyFooter/arrow-right (1).svg";
import img3 from "../../../../pictures/body/bodyFooter/Rectangle 30 (1).svg";
import img4 from "../../../../pictures/body/bodyFooter/Rectangle 30 (2).svg";
import stars from "../../../../pictures/body/bodyFooter/Star 2.svg";
import '../../../../style/body/contains/BodyFooter/LandingReting.css'; // Import the CSS file for styling

const cards = [
    { img: img3, fullName: "John Smith", job: "Product Designer", text: "Education WP Is A Special Build For Effective Education & Learning Management System Site...", rating: 5 },
    { img: img4, fullName: "Brett Loe", job: "User Experience Designer", text: "Education WP Is A Special Build For Effective Education & Learning Management System Site...", rating: 5 },
    { img: img4, fullName: "Amir Nutfullayev", job: "User Experience Designer", text: "Education WP Is A Special Build For Effective Education & Learning Management System Site...", rating: 5 },
    { img: img3, fullName: "Abdug'afforov Ozodbek", job: "User Experience Designer", text: "Education WP Is A Special Build For Effective Education & Learning Management System Site...", rating: 5 },
    { img: img3, fullName: "Jobiy Yoburov", job: "User Experience Designer", text: "Education WP Is A Special Build For Effective Education & Learning Management System Site...", rating: 5 },
    { img: img4, fullName: "Bobir Toxirov", job: "User Experience Designer", text: "Education WP Is A Special Build For Effective Education & Learning Management System Site...", rating: 5 },
];

function LandingReting() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="ozod-landingReting">
            <div className="ozod-landingReting-title">
                <p className="ozod-landingReting-title-prefix">Testimonial</p>
                <h1 className="ozod-landingReting-title-main">Says our customers</h1>
            </div>
            <div className="ozod-landingReting-cards">
                {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
                    <div className="ozod-landingReting-card" key={index}>
                        <div className="ozod-landingReting-card-header">
                            <img src={card.img} alt={card.fullName} className="ozod-landingReting-card-img" />
                            <div>
                                <p className="ozod-landingReting-card-name">{card.fullName}</p>
                                <p className="ozod-landingReting-card-job">{card.job}</p>
                            </div>
                        </div>
                        <p className="ozod-landingReting-card-text">{card.text}</p>
                        <div className="ozod-landingReting-card-stars">
                            {[...Array(card.rating)].map((_, i) => (
                                <img key={i} src={stars} alt="Star" className="ozod-landingReting-star" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="ozod-landingReting-footer">
                <div className="ozod-landingReting-footer-buttons">
                    <button className="ozod-landingReting-footer-button" onClick={handlePrevious}><img src={img} alt="Previous" /></button>
                    <button className="ozod-landingReting-footer-button" onClick={handleNext}><img src={img2} alt="Next" /></button>
                </div>
                <div className="ozod-landingReting-card-count">{currentIndex + 1}/{cards.length} People</div>
            </div>
        </div>
    );
}

export default LandingReting;
