import '../../css/Footer/Footer.css';
import '../../css/Footer/LightThemeFooter.css';
import { Link } from "react-router-dom"
import { HashLink as LinkAnchor } from 'react-router-hash-link';
import { Resize } from "../Resize/Resize"
import logoFooter from '../../assets/Logo/logo-desk-sc.svg'
import pictoCallOnUs from '../../assets/Picto/picto-call-on-us.svg'
import pictoSend from '../../assets/Picto/picto-send.svg'

export default function Footer () {
  const {windowSize} = Resize();

  return (
    <>
      <footer className={windowSize.innerWidth < 1201 ? null : "desk"} id="footer">
        <img className="footer-logo" src={logoFooter} alt="Logo représentant Le Studio Culotté en toute lettre." />
        <p className="footer-description footer-lw"><span className="footer-about">À propos</span> Le Studio Culotté est un bureau de communication spécialisé en œnologie et fait rayonner ce milieu par son audace. <span className="footer-citation">In Vino Creamus!</span></p>
        <p className="footer-redirection"><Link to="/savoir" title="Redirection vers les compétences métier du Studio Culotté.">Compétences métier</Link></p>
        <p className="footer-redirection"><LinkAnchor to="/studio#teamAnchor" title="Ancre de redirection vers la présentation des Culottés.">Les Culottés</LinkAnchor></p>
        <p className="footer-redirection"><LinkAnchor to="/studio#letterAnchor" title="Ancre de redirection vers la lettre ouverte.">Lettre ouverte</LinkAnchor></p>
        <div className="footer-dott">-</div>
        <p className="footer-redirection"><Link to="/creation" title="Redirection vers les étapes de création.">Jamais parlé à un designer ? Par ici les étapes de création !</Link></p>
        <p className="footer-redirection"><LinkAnchor to="/#faq" title="Ancre de redirection vers la FAQ de la page d'accueil.">FAQ</LinkAnchor></p>
        <div className="footer-dott">-</div>
        <p className="footer-call"><a href="tel:+33652183771" title="Appeler le Studio Culotté.">Call on us! <span className="footer-picto call"><img src={pictoCallOnUs} alt="Pictogramme représentant un téléphone qui sonne." /></span></a></p>
        <p className="footer-message"><a href="mailto:claire@le-studio-culotte.com" title="Envoyer un mail au Studio Culotté.">Écris-nous un petit message <span className="footer-picto send"><img src={pictoSend} alt="Pictogramme représentant un avion en papier pour simuler l'envoie d'un courriel." /></span></a><span className="footer-lw">(Pas de vocaux, merci)</span></p>
        <p className="footer-contact">Restons en contact <span className="footer-lw"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/le_studio_culottt/?hl=fr" title="Redirection vers le réseau social Instagram du Studio Culotté.">Instagram</a> | <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/le-studio-culott%C3%A9/?originalSubdomain=fr" title="Redirection vers le réseau social LinkedIn du Studio Culotté.">LinkedIn</a> | <a rel="noreferrer" target="_blank" href="https://www.behance.net/le-studio-culotte?locale=fr_FR" title="Redirection vers le réseau social Behance du Studio Culotté.">Behance</a> | <a rel="noreferrer" target="_blank" href="https://www.facebook.com/LeStudioCulotte/" title="Redirection vers le réseau social Facebook du Studio Culotté.">Facebook</a> | <a rel="noreferrer" target="_blank" href="https://www.pinterest.fr/lestudioculottt/" title="Redirection vers le réseau social Pinterest du Studio Culotté.">Pinterest</a></span></p>
        <div className="footer-dott">-</div>
        <p className="footer-redirection footer-store"><a rel="noreferrer" target="_blank" href="https://boutique.le-studio-culotte.com/" title="Redirection sur la boutique du Studio Culotté">Boutique</a></p>
        <p className="footer-credits footer-lw"><Link to="/mentions-legales" title="Redirection vers la page des Mentions Légales du Studio Culotté.">Mentions légales</Link> | <Link to="/cgv" title="Redirection vers les CGV du Studio Culotté.">CGV</Link> | <Link to="/sitemap" title="Redirection vers le plan de site du Studio Culotté.">Plan de site</Link> | Infolettre <span>©Le Studio Culotté 2015-2023 • Lyon</span></p>
      </footer>
    </>
  );
}