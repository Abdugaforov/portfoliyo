import React from 'react';
import "../../../../style/body/contains/BodyFooter/LandingLocation.css";

function LandingLocation() {
    return (
        <div className="ozod-location-container">

            <div className="ozod-location-content">
                <div className="ozod-map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4230264567083!2d64.41479537583414!3d39.77682187117881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4e1d56b9057ab9%3A0x3b2f770f85096f5e!2sKalyan%20Minaret!5e0!3m2!1sen!2s!4v1691785072365!5m2!1sen!2s"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="ozod-form-container">
                    <form className="ozod-booking-form">
                        <div className="ozod-location-header">Reservation</div>
                        <p className="ozod-form-title">Booking a table</p>
                        <div className="ozod-form-group">
                            <input type="text " className="ozod-input " placeholder="4 Person"/>
                        </div>
                        <div className="ozod-form-group">
                            <input type="date" className="ozod-input"/>
                        </div>
                        <div className="ozod-form-group">
                            <input type="time" className="ozod-input"/>
                        </div>
                        <div className="ozod-form-group">
                            <button className="ozod-submit-button">BOOK A TABLE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LandingLocation;
