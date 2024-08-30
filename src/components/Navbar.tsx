import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen, faBriefcase, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";

const Navbar = () => {
    useEffect(() => {
        const navbarButton = document.querySelector(".Navbar-button a.btn.btn-primary");

        const handleScroll = () => {
            if (navbarButton) {
                const scrollPosition = window.scrollY;
                const triggerPoint = 1000;

                if (scrollPosition > triggerPoint) {
                    navbarButton.classList.add('scrolled')
                } else {
                    navbarButton.classList.remove('scrolled')
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return <header className="Navbar reveal">
        <a href="/" className="Navbar-brand">
            <p className="reveal-1">
                <span>Scapin</span> Léo
            </p>
        </a>
        <nav className="Navbar-links">
            <ul>
                <li className="Navbar-item reveal-2">
                    <a href="#services" className="Navbar-link">
                        <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                        Mes Services
                    </a>
                </li>
                <li className="Navbar-item reveal-3">
                    <a href="#portfolio" className="Navbar-link">
                        <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                        Portfolio
                    </a>
                </li>
                <li className="Navbar-item reveal-4">
                    <a href="#about" className="Navbar-link">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        À Propos de moi
                    </a>
                </li>
            </ul>
            <div className="Navbar-button reveal-5">
                <a href="#contact" className="btn btn-primary">
                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                    Me contacter
                </a>
            </div>
        </nav>
    </header>
}

export default Navbar;
