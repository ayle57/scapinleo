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

    return <header className="Navbar">
        <a href="" className="Navbar-brand">
            <span>Scapin</span> Léo
        </a>
        <nav className="Navbar-links">
            <ul>
                <li className="Navbar-item">
                    <a href="#" className="Navbar-link">
                        <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                        Mes Services
                    </a>
                </li>
                <li className="Navbar-item">
                    <a href="#" className="Navbar-link">
                        <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                        Portfolio
                    </a>
                </li>
                <li className="Navbar-item">
                    <a href="#" className="Navbar-link">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        À Propos de moi
                    </a>
                </li>
            </ul>
            <div className="Navbar-button">
                <a href="#" className="btn btn-primary">
                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                    Me contacter
                </a>
            </div>
        </nav>
    </header>
}

export default Navbar;
