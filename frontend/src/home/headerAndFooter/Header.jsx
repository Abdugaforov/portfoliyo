import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../style/headerAndFooter/Header.css";
import logo from "../../pictures/headerPictures/Logo.svg";
import search from "../../pictures/headerPictures/search.svg";
import shop from "../../pictures/headerPictures/shopping-bag.svg";
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            toast.success('Bu hali frontend web Sahifa');
            setSearchValue(''); // Input qiymatini tozalash
            setShowSearch(false); // Input maydonini yashirish
        }
    };

    return (
        <div className="header-card">
            <div className="header-section header-left">
                <ul className="nav-list">
                    <li><a href="/" style={{color:"#C99E71"}}>Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservation</a></li>
                </ul>
            </div>
            <div className="header-section header-center">
                <img src={logo} alt="logo" className="header-logo"/>
            </div>
            <div className="header-section header-right">
                <ul className="nav-list">
                    <li><a href="/">Pages</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Contact</a></li>
                    <li>
                        {showSearch && (
                            <input
                                type="text"
                                className="search-input"
                                value={searchValue}
                                onChange={handleSearchChange}
                                onKeyPress={handleKeyPress}
                                placeholder="Search..."
                            />
                        )}
                        <img src={search} alt="search" className="header-icon" onClick={handleSearchClick} />
                    </li>
                    <li><img src={shop} alt="shop" className="header-icon"/></li>
                </ul>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Header;
