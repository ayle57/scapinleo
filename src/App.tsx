import React, {useEffect} from 'react';
import Navbar from "./components/Navbar.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBoxOpen, faBriefcase,
    faCode, faContactCard, faGlobeEurope, faHeart,
    faHouse, faMagnifyingGlass,
    faPhone, faShoppingCart,
    faTerminal, faUser
} from "@fortawesome/free-solid-svg-icons";
import chief from '/chief.png';
import brandBanner from '/brand-banner.png';
import human from '/human.png';
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Form from "./components/Form.tsx";
import shopify from '/logos/shopify.png'
import adobe from '/logos/adobe.png';
import canva from '/logos/canva.webp';
import kadenceblock from '/logos/kadenceblock.jpg';
import woocommerce from '/logos/woocommerce.png';
import wordpress from '/logos/wordpress.png';

const App: React.FC = () => {
    useEffect(() => {
        const ratio = .3;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
        }

        const handleIntersection = (entries: IntersectionObserverEntry, observer: IntersectionObserver) => {
            entries.forEach(function (entry) {
                if(entry.intersectionRatio > ratio) {
                    entry.target.classList.add('reveal-visible')
                    observer.unobserve(entry.target);
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, options);
        document.querySelectorAll('.reveal').forEach((r) => {
            observer.observe(r);
        })
    }, [])

    return <>

        <Navbar/>

        <section className="section LandingSection">
            <div className="LandingSection-inner">

                <div className="LandingSection-container">
                    <div className="LandingSection-content reveal">
                        <h1 className="reveal-1">Développeur web freelance à votre service</h1>
                        <p className="reveal-2">Passionné par le web, je mets mon expertise à votre service pour créer des sites performants et esthétiques. Mon objectif est de concevoir des expériences utilisateur intuitives, en alliant design moderne et technologie avancée, pour transformer vos idées en un site web unique qui reflète parfaitement votre identité.</p>
                        <div className="d-flex">
                            <p className="reveal-3">
                                <a href="#contact" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    Me contacter
                                </a>
                            </p>
                            <p className="reveal-4">
                                <a href="#services" className="btn btn-phantom">
                                    <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                                    Mes services
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="LandingSection-image reveal">
                        <img src={chief} alt="Photo d'identité prélevée sur unsplash" className="reveal-5"/>
                    </div>
                </div>

            </div>
        </section>

        <section className="section ServicesSection" id="services">
            <div className="ServicesSection-inner reveal">

                <h2 className="title reveal-1">Mes services</h2>

                <div className="ServicesSection-container">

                    <div className="ServicesSection-item reveal-2">
                        <div className="item-header">
                            <FontAwesomeIcon icon={faContactCard}/>
                            <h4>Site vitrine</h4>
                            <p>Créez une présence en ligne professionnelle avec un site vitrine élégant, conçu pour refléter votre identité et attirer vos clients.</p>
                        </div>
                        <div className="item-body">
                            <p>- Design moderne et attractif</p>
                            <p>- Présentation claire de vos services et produits</p>
                            <p>- Optimisation pour les moteurs de recherche (SEO)</p>
                            <p>- Responsive adapté à tous les appareils</p>
                        </div>
                        <a href="#contact" className="btn btn-phantom">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            Commander
                        </a>
                    </div>
                    <div className="ServicesSection-item reveal-3">
                        <div className="item-header">
                            <FontAwesomeIcon icon={faTerminal}/>
                            <h4>Site E-commerce</h4>
                            <p>Lancez votre boutique en ligne avec un site e-commerce optimisé, offrant une expérience d'achat fluide et sécurisée pour vos clients.</p>
                        </div>
                        <div className="item-body">
                            <p>- Interface utilisateur intuitive et facile à naviguer</p>
                            <p>- Gestion complète des produits et des stocks</p>
                            <p>- Solutions de paiement sécurisées et diversifiées</p>
                            <p>- Suivi des commandes et options de livraison flexibles</p>
                        </div>
                        <a href="#contact" className="btn btn-primary">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            Commander
                        </a>
                    </div>
                    <div className="ServicesSection-item reveal-4">
                        <div className="item-header">
                            <FontAwesomeIcon icon={faBook}/>
                            <h4>Tunnel de Vente</h4>
                            <p>Augmentez vos conversions grâce à un tunnel de vente stratégique, conçu pour guider vos prospects du clic à l'achat final.</p>
                        </div>
                        <div className="item-body">
                            <p>- Parcours client optimisé pour maximiser les conversions</p>
                            <p>- Pages de capture et d’offres attrayantes</p>
                            <p>- Intégration avec vos outils de marketing et CRM</p>
                            <p>- Analyse des performances et ajustements continus</p>
                        </div>
                        <a href="#contact" className="btn btn-phantom">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            Commander
                        </a>
                    </div>

                </div>

            </div>
        </section>

        <section className="section WorkSection" id="portfolio">
            <div className="WorkSection-inner reveal">

                <h2 className="title reveal-1">Mes Travaux Précédents</h2>

                <div className="WorkSection-container">

                    <div className="WorkSection-brands reveal-2">
                        <a href="https://mon-sabre-laser.com" target="blank">
                            <img src={brandBanner} alt="Bannière de MSLaser"/>
                        </a>
                    </div>
                    <a href="#contact" className="btn btn-primary reveal-3" style={{marginTop: '20px'}}>Me contacter</a>
                    <div className="WorkSection-cards">
                        <div className="card reveal-4">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <h6>Analyse Personnalisée des Besoins</h6>
                            <p>J'analyse vos besoins spécifiques pour élaborer une stratégie digitale sur mesure, parfaitement adaptée à votre entreprise.</p>
                        </div>
                        <div className="card reveal-5">
                            <FontAwesomeIcon icon={faCode}/>
                            <h6>Création du Site Web</h6>
                            <p>Je développe des sites web sur mesure en utilisant WordPress, WooCommerce, et Shopify, garantissant une performance technique optimale et une expérience utilisateur fluide.</p>
                        </div>
                        <div className="card reveal-6">
                            <FontAwesomeIcon icon={faGlobeEurope}/>
                            <h6>Mise en Ligne Professionnelle</h6>
                            <p>Je publie votre site web avec des configurations SEO avancées pour garantir une visibilité maximale en ligne.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section className="section AboutSection" id="about">
            <div className="AboutSection-inner reveal">

                <div className="AboutSection-container">
                    <div className="AboutSection-content">
                        <h2 className="reveal-1">Lancez Votre Projet Web Aujourd'hui !</h2>
                        <p className="reveal-2">Vous êtes prêt à donner vie à votre projet web ou à améliorer votre présence en ligne ? N’attendez plus pour me contacter ! Avec mon expertise en développement web, je suis ici pour transformer vos idées en une solution digitale efficace et sur mesure.</p>
                        <p className="reveal-3">Que vous ayez besoin de lancer un site vitrine, une boutique en ligne sous WooCommerce ou Shopify, ou encore d’optimiser un tunnel de vente, je suis prêt à mettre mes compétences techniques à votre service. Chaque projet est unique et mérite une attention particulière.</p>
                        <p className="reveal-4">Je vous invite à me contacter dès maintenant pour discuter de vos besoins, obtenir un devis personnalisé, ou simplement poser vos questions. Envoyez-moi un message via le formulaire de contact. Je suis impatient de collaborer avec vous et de concrétiser vos ambitions digitales !</p>
                        <a href="#contact" className="btn btn-primary reveal-5"><FontAwesomeIcon icon={faPhone}
                                                                                        className="icon"/>Me
                            contacter</a>
                    </div>
                    <div className="AboutSection-image reveal-6">
                        <img src={human} alt="Humain debout de la librarie humaaaans"/>
                    </div>
                </div>

            </div>
        </section>

        <section className="section ExplainSection">
            <div className="ExplainSection-inner reveal">

                <h2 className="title reveal-1">Mes outils</h2>

                <div className="ExplainSection-container">

                    <div className="ExplainSection-team reveal-2">
                        <p>Pour garantir la meilleure qualité de service, j’utilise des outils parmi les plus performants. Découvrez ci-dessous les technologies et plateformes que j’emploie pour créer des sites web efficaces, fiables et parfaitement adaptés à vos besoins.</p>
                    </div>

                    <div className="ExplainSection-circle">
                        <a href="https://www.shopify.com/fr" target="blank" className="reveal-3">
                            <img src={shopify} alt="Logo de shopify"/>
                        </a>
                        <a href="https://woocommerce.com/fr/" target="blank" className="reveal-4">
                            <img src={woocommerce} alt="Logo de woocommerce"/>
                        </a>
                        <a href="https://wordpress.com/fr/" target="blank" className="reveal-5">
                            <img src={wordpress} alt="Logo de wordpress"/>
                        </a>
                        <a href="https://www.kadencewp.com/kadence-blocks/" target="blank" className="reveal-6">
                            <img src={kadenceblock} alt="Logo de kadence block"/>
                        </a>
                        <a href="https://www.canva.com/" target="blank" className="reveal-7">
                            <img src={canva} alt="Logo de canva"/>
                        </a>
                        <a href="https://www.adobe.com/fr/" target="blank" className="reveal-8">
                            <img src={adobe} alt="Logo d'adobe"/>
                        </a>
                    </div>

                </div>

            </div>
        </section>

        <section className="section ContactSection" id="contact">
            <div className="ContactSection-inner reveal">

                <h2 className="title reveal-1">Me contacter</h2>

                <div className="ContactSection-container">

                    <Form />

                </div>

            </div>
        </section>

        <footer className="section FooterSection reveal">
            <ul className="FooterSection-nav reveal-1">
                <li>
                    <a href="/"><FontAwesomeIcon icon={faHouse} className="icon"/>Accueil</a>
                </li>
                <li>
                    <a href="#services"><FontAwesomeIcon icon={faBoxOpen} className="icon"/>Mes services</a>
                </li>
                <li>
                    <a href="#portfolio"><FontAwesomeIcon icon={faBriefcase} className="icon"/>Portfolio</a>
                </li>
                <li>
                    <a href="#about"><FontAwesomeIcon icon={faUser} className="icon"/>À Propos</a>
                </li>
                <li>
                    <a href="#contact"><FontAwesomeIcon icon={faPhone} className="icon"/>Me contacter</a>
                </li>
            </ul>
            <ul className="FooterSection-credentials reveal-2">
                <li>
                    <h6><span>Scapin</span> Léo</h6>
                </li>
                <li>
                    Made with love <FontAwesomeIcon icon={faHeart}/>
                </li>
            </ul>
            <ul className="FooterSection-legals reveal-3">
                <li>
                    <a href="/legals">Mentions légales</a>
                </li>
            </ul>
            <ul className="FooterSection-socials reveal-4">
                <li>
                    <a href="https://www.instagram.com/ls.webdesign/" target="blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
            </ul>
        </footer>

    </>
}

export default App;
