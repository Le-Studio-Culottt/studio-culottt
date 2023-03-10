import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import Links from "../LinksNavigation/Links"
import OptionsMenu from "../OptionsNavigation/OptionsMenu"
import pictoMail from "../../../assets/Picto/picto-nav-mail.webp"
import pictoTel from "../../../assets/Picto/picto-nav-tel.webp"
import pictoMenuOpen from "../../../assets/Picto/picto-nav-menu-open.webp"
import pictoMenuClose from "../../../assets/Picto/picto-nav-menu-close.webp"
import pictoProjects from "../../../assets/Picto/picto-nav-projects.webp"
import pictoMode from "../../../assets/Picto/picto-nav-mode.webp"

export default function MobileNavigation() {
    let location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [location]);

    const [ setMenu, isMenuOn ] = useState("");
    const [ setOptions, isOptionsOn ] = useState("");

    const handleClick = () => {
        isMenuOn(setMenu === "" ? "active" : "");
    }
    const closeMobileMenu = () => isMenuOn("");

    const optionsClick = () => {
        isOptionsOn(setOptions === "" ? "active" : "");
    }
    const closeOptionsMenu = () => isOptionsOn("");
    
    const openOptionsCloseMenu = () => {
        optionsClick();
        closeMobileMenu();
    }

    const isMenuOpenBlur = () => {
        if(document.querySelector("main") && document.querySelector("footer")){document.querySelector("main").style.filter = "blur(10px)";document.querySelector("footer").style.filter = "blur(10px)"}
    }
    const isMenuCloseBlur = () => {
        if(document.querySelector("main") && document.querySelector("footer")){document.querySelector("main").style.filter = "none";document.querySelector("footer").style.filter = "none"}
    }
    const isMenuOpenHeader = () => {
        if(document.querySelector("header")) {document.querySelector("header").style.display = "none"}
    }
    const isMenuCloseHeader = () => {
        if(document.querySelector("header")) {document.querySelector("header").style.display = "block"}
    }

    return(
        <>
            <nav className="nav mobile">
                <a href="mailto:claire@le-studio-culotte.com" title="Envoyer un mail au Studio Culott??."><img src={pictoMail} alt="Pictogramme repr??sentant un courriel afin d'adresser un mail au Studio Culott??." /></a>
                <a href="tel:+33652183771" title="Appeler le Studio Culott??."><img src={pictoTel} alt="Pictogramme repr??sentant le t??l??phone afin d'appeler Le Studio Culott??." /></a>
                {setMenu === "active" ?
                    <img onClick={handleClick} className="nav-menu active" src={pictoMenuClose} alt="Pictogramme repr??sentant une croix indiquant le menu ouvert." />
                :
                    <img onClick={handleClick} className="nav-menu" src={pictoMenuOpen} alt="Pictogramme repr??sentant trois traits horizontaux indiquant le menu ferm??." />
                }
                <Link to="/realisation" title="Redirection vers la page des r??alisations du Studio Culott??."><img onClick={closeMobileMenu} src={pictoProjects} alt="Pictogramme repr??sentant un oeil afin d'??tre redirig?? vers les r??alisations du Studio Culott??." /></Link>
                <img className={setOptions} onClick={openOptionsCloseMenu} src={pictoMode} alt="Pictogramme repr??sentant une option de customisation du site du Studio Culott??." />
            </nav>
            {setMenu === "active" ? <Links isMobile={true} closeMobileMenu={closeMobileMenu} /> : null}
            {setMenu === "active" ? isMenuOpenHeader() : isMenuCloseHeader()}
            {setMenu === "active" ? isMenuOpenBlur() : isMenuCloseBlur()}
            {setOptions === "active" ? <OptionsMenu closeOptionsMenu={closeOptionsMenu}/> : null}
        </>
    )
}