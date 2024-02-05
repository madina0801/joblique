import { React, useState, useEffect } from 'react';


function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (

        <header
            className={`header  ${isMobileMenuOpen ? 'nav-open' : ''}`}
            style={{
                zIndex: '999',
                position: 'sticky',
                top: '0',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
            }}
        >
            <div className="logo">  <a href="#">
                <img className="logo" alt="Be natural logo" src="./logo.svg" style={{ height: '4.5rem', width: '3rem', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />
            </a></div>
            <div className="heading-primary" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>JobTrackr</div>
            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} style={{ zIndex: '300' }}>
                <ul className="main-nav-list" style={{ fontFamily: "Rubik" }}>
                    <li><a className="main-nav-link" href="/" style={{ fontFamily: "Rubik" }}>About</a></li>
                    <li><a className="main-nav-link" target='blank' href="https://github.com/madina0801/JobTrackr" >GitHub</a></li>
                </ul>
            </nav>
            <button className="btn-mobile-nav" onClick={toggleMobileMenu} style={{ color: '#101741', fontSize: '30px' }}>
                <ion-icon className="icon-mobile-nav" name={isMobileMenuOpen ? "close-outline" : "menu-outline"} ></ion-icon>
            </button>
        </header>

    );
}

export default Navbar;
