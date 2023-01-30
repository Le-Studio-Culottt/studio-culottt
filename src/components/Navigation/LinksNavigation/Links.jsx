import '../../../css/Navigation/Links.css';
import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
import { Resize } from "../../Resize/Resize"
import bgMenuMobile from "../../../assets/Background/background-menu-mobile-nuit.svg"
import bgMenuTablet from "../../../assets/Background/background-menu-tablet-nuit.svg"
import bgMenuDesk from "../../../assets/Background/background-menu-desk-nuit.svg"
import logo from '../../..//assets/Logo/logo-mobile-sc.webp'

export default function Links (props) {
    const {windowSize} = Resize();

    return(
        <section className={windowSize.innerWidth < 1201 ? "nav-links" : "nav-links desk"}>
            {windowSize.innerWidth < 1201 ? 
                <Link to="/" title="Redirection vers la page d'accueil du Studio Culotté."><img onClick={() => props.isMobile && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="nav-links-logo" src={logo} alt="Logo du Studio Culotté" /></Link>
                :
                null
            }      
            {windowSize.innerWidth < 600 ? 
                <img className="nav-links-bg mobile" src={bgMenuMobile} alt="Arrière-plan du Studio Culotté représentant une constellation." />
            : windowSize.innerWidth >= 600 && windowSize.innerWidth < 1201 ? 
                <img className="nav-links-bg mobile" src={bgMenuTablet} alt="Arrière-plan du Studio Culotté représentant une constellation." />
            : windowSize.innerWidth >= 1201 ?
                <img className="nav-links-bg desk" src={bgMenuDesk} alt="Arrière-plan du Studio Culotté représentant une constellation." />
            :
                null
            }
            {windowSize.innerWidth < 1201 ? 
                <ul className="nav-links-ul mobile">
                    <li onClick={() => props.isMobile && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()}><Link to="/savoir" title="Redirection vers la page savoir-faire du Studio Culotté.">SAVOIR-FAIRE</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()}><Link to="/creation" title="Redirection vers la page des étapes de création du Studio Culotté.">ÉTAPES DE CRÉATION</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()}><Link to="/studio" title="Redirection vers la présentation du Studio Culotté.">LE STUDIO</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><LinkAnchor to="/#faq" title="Ancre de redirection vers la FAQ de la page d'accueil.">FAQ</LinkAnchor></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><LinkAnchor to="/#footer" title="Ancre de redirection vers les différents moyens de contact.">CONTACT</LinkAnchor></li>
                </ul>
            :
                <ul className="nav-links-ul desk">
                    <li onClick={() => props.isDesk && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()}><Link to="/realisation" title="Redirection vers la page des réalisations du Studio Culotté.">LES RÉALISATIONS</Link></li>
                    <li onClick={() => props.isDesk && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()}><Link to="/savoir" title="Redirection vers la page savoir-faire du Studio Culotté.">SAVOIR-FAIRE</Link></li>
                    <li onClick={() => props.isDesk && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()}><Link to="/creation" title="Redirection vers la page des étapes de création du Studio Culotté.">ÉTAPES DE CRÉATION</Link></li>
                    <li onClick={() => props.isDesk && props.closeMobileMenu() && window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) && window.location.reload()} className="nav-links-desk-studio"><Link to="/studio" title="Redirection vers la présentation du Studio Culotté.">LE STUDIO</Link></li>
                    <li onClick={() => props.isDesk && props.closeMobileMenu()}><LinkAnchor to="/#faq" title="Ancre de redirection vers la FAQ de la page d'accueil.">FAQ</LinkAnchor></li>
                    <li onClick={() => props.isDesk && props.closeMobileMenu()}><LinkAnchor to="/#footer" title="Ancre de redirection vers les différents moyens de contact.">CONTACT</LinkAnchor></li>
                </ul>
            }   
        </section>
    )
}