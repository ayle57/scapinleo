import React from 'react';
import Navbar from "./components/Navbar.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBoxOpen, faBriefcase,
    faCode, faGlobeEurope, faHeart,
    faHouse,
    faPhone,
    faShapes, faShoppingCart,
    faTerminal, faUser
} from "@fortawesome/free-solid-svg-icons";
import chief from '../public/chief.png';
import brandBanner from '../public/brand-banner.avif';
import human from '../public/human.png';
import circle from '../public/circle.png';
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const App: React.FC = () => {
    return <>

        <Navbar/>

        <section className="section LandingSection">
            <div className="LandingSection-inner">

                <div className="LandingSection-container">
                    <div className="LandingSection-content">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa cupiditate
                            dolorum, inventore maiores nemo, nihil obcaecati placeat porro, quasi quis recusandae sint
                            ut voluptatibus.</p>
                        <div className="d-flex">
                            <p>
                                <a href="#" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    Me contacter
                                </a>
                            </p>
                            <p>
                                <a href="#" className="btn btn-phantom">
                                    <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                                    Mes services
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="LandingSection-image">
                        <img src={chief} alt="Photo d'identité prélevée sur unsplash"/>
                    </div>
                </div>

            </div>
        </section>

        <section className="section ServicesSection">
            <div className="ServicesSection-inner">

                <h2 className="title">Mes services</h2>

                <div className="ServicesSection-container">

                    <div className="ServicesSection-item">
                        <div className="item-header">
                            <FontAwesomeIcon icon={faShapes}/>
                            <h4>Designer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem odit sit!</p>
                        </div>
                        <div className="item-body">
                            <h6>Lorem i sit amet:</h6>
                            <p>LO, OL, Rem, Lorem, Ipsum</p>
                        </div>
                        <div className="item-body">
                            <h6>Lorem i sit amet:</h6>
                            <p>Lorem ipsum</p>
                            <p>Lorem</p>
                            <p>Lorem ipsum sit</p>
                            <p>Lorem sit</p>
                        </div>
                        <a href="#" className="btn btn-phantom">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            Commander
                        </a>
                    </div>
                    <div className="ServicesSection-item">
                        <div className="item-header">
                            <FontAwesomeIcon icon={faTerminal}/>
                            <h4>Frontend Developer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem odit sit!</p>
                        </div>
                        <div className="item-body">
                            <h6>Lorem i sit amet:</h6>
                            <p>LO, OL, Rem, Lorem, Ipsum</p>
                        </div>
                        <div className="item-body">
                            <h6>Lorem i sit amet:</h6>
                            <p>Lorem ipsum</p>
                            <p>Lorem</p>
                            <p>Lorem ipsum sit</p>
                            <p>Lorem sit</p>
                        </div>
                        <a href="#" className="btn btn-primary">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            Commander
                        </a>
                    </div>
                    <div className="ServicesSection-item">
                        <div className="item-header">
                            <FontAwesomeIcon icon={faBook}/>
                            <h4>Mentor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem odit sit!</p>
                        </div>
                        <div className="item-body">
                            <h6>Lorem i sit amet:</h6>
                            <p>LO, OL, Rem, Lorem, Ipsum</p>
                        </div>
                        <div className="item-body">
                            <h6>Lorem i sit amet:</h6>
                            <p>Lorem ipsum</p>
                            <p>Lorem</p>
                            <p>Lorem ipsum sit</p>
                            <p>Lorem sit</p>
                        </div>
                        <a href="#" className="btn btn-phantom">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            Commander
                        </a>
                    </div>

                </div>

            </div>
        </section>

        <section className="section WorkSection">
            <div className="WorkSection-inner">

                <h2 className="title">Mes Travaux Précédents</h2>

                <div className="WorkSection-container">

                    <div className="WorkSection-brands">
                        <a href="#">
                            <img src={brandBanner} alt="Bannière de marque"/>
                        </a>
                        <a href="#">
                            <img src={brandBanner} alt="Bannière de marque"/>
                        </a>
                        <a href="#">
                            <img src={brandBanner} alt="Bannière de marque"/>
                        </a>
                        <a href="#">
                            <img src={brandBanner} alt="Bannière de marque"/>
                        </a>
                        <a href="#">
                            <img src={brandBanner} alt="Bannière de marque"/>
                        </a>
                        <a href="#">
                            <img src={brandBanner} alt="Bannière de marque"/>
                        </a>
                    </div>
                    <a href="#" className="btn btn-primary" style={{marginTop: '20px'}}>En voir plus</a>
                    <div className="WorkSection-cards">
                        <div className="card">
                            <FontAwesomeIcon icon={faHouse}/>
                            <h6>Lorem ispum dolor sit amet</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur beatae dolorum
                                eaque eius eos excepturi ipsa laboriosam natus, nostrum perferendis similique sint!</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faCode}/>
                            <h6>Lorem ispum dolor sit amet</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur beatae dolorum
                                eaque eius eos excepturi ipsa laboriosam natus, nostrum perferendis similique sint!</p>
                        </div>
                        <div className="card">
                            <FontAwesomeIcon icon={faGlobeEurope}/>
                            <h6>Lorem ispum dolor sit amet</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur beatae dolorum
                                eaque eius eos excepturi ipsa laboriosam natus, nostrum perferendis similique sint!</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section className="section AboutSection">
            <div className="AboutSection-inner">

                <div className="AboutSection-container">
                    <div className="AboutSection-content">
                        <h2>Lorem ips dolores,</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, aut fugit
                            laudantium provident, quas quasi qui quia quo repellat rerum similique suscipit voluptatem.
                            Consequuntur repellendus rerum sapiente sequi velit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, officiis, tempora. Aperiam
                            dolor, dolorem earum fugit harum maiores quas quasi sunt ut veritatis? Aut cumque eos et,
                            illo quam similique.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci autem beatae dolorem
                            dolores, eligendi excepturi explicabo laudantium, magnam nam non optio perferendis quo quod
                            quos, saepe sapiente sint tempore?</p>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faPhone} className="icon"/>Me
                            contacter</a>
                    </div>
                    <div className="AboutSection-image">
                        <img src={human} alt="Humain debout de la librarie humaaaans"/>
                    </div>
                </div>

            </div>
        </section>

        <section className="section ExplainSection">
            <div className="ExplainSection-inner">

                <h2 className="title">Mes outils</h2>

                <div className="ExplainSection-container">

                    <div className="ExplainSection-team">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque eaque error
                            esse, laboriosam mollitia odit officiis placeat quasi. At culpa distinctio expedita
                            necessitatibus neque similique sunt veritatis vero?</p>
                    </div>

                    <div className="ExplainSection-circle">
                        <a href="#">
                            <img src={circle} alt=""/>
                        </a>
                        <a href="#">
                            <img src={circle} alt=""/>
                        </a>
                        <a href="#">
                            <img src={circle} alt=""/>
                        </a>
                        <a href="#">
                            <img src={circle} alt=""/>
                        </a>
                        <a href="#">
                            <img src={circle} alt=""/>
                        </a>
                        <a href="#">
                            <img src={circle} alt=""/>
                        </a>
                    </div>

                </div>

            </div>
        </section>

        <section className="section ContactSection">
            <div className="ContactSection-inner">

                <h2 className="title">Me contacter</h2>

                <div className="ContactSection-container">

                    <form action="" method="GET">
                        <div className="col">
                        <div className="form-group">
                                <input type="text" name="firstname" id="firstname" className="form-control"
                                       placeholder="Prénom"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="lastname" id="lastname" className="form-control"
                                       placeholder="Nom"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" className="form-control"
                                   placeholder="Adresse Email"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="message" placeholder="Message" className="form-area"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Envoyer</button>
                    </form>

                </div>

            </div>
        </section>

        <footer className="section FooterSection">
            <ul className="FooterSection-nav">
                <li>
                    <a href="#"><FontAwesomeIcon icon={faHouse} className="icon" />Accueil</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faBoxOpen} className="icon"/>Mes services</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faBriefcase} className="icon"/>Portfolio</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faUser} className="icon"/>À Propos</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faPhone} className="icon"/>Me contacter</a>
                </li>
            </ul>
            <ul className="FooterSection-credentials">
                <li>
                    <h6><span>Scapin</span> Léo</h6>
                </li>
                <li>
                    Made with love <FontAwesomeIcon icon={faHeart}/>
                </li>
            </ul>
            <ul className="FooterSection-legals">
                <li>
                    <a href="#">Mentions légales</a>
                </li>
                <li>
                    <a href="#">CGU</a>
                </li>
            </ul>
            <ul className="FooterSection-socials">
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
            </ul>
        </footer>

    </>
}

export default App;
