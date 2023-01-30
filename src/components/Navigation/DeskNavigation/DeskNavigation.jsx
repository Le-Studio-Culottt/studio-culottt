import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import Links from "../LinksNavigation/Links"
import logoDesk from "../../../assets/Logo/logo-desk-sc.svg"
import pictoMenuOpen from "../../../assets/Picto/picto-nav-menu-open.webp"
import pictoMenuClose from "../../../assets/Picto/picto-nav-menu-close.webp"
import pictosLight from "../../../assets/Picto/picto-white-mode.webp"
import pictosNoCSS from "../../../assets/Picto/picto-noCSS-mode.webp"
import pictosDark from "../../../assets/Picto/picto-night-mode.webp"

import { ThemeContext, themes } from '../../LightMode/ThemeContext'

export default function DeskNavigation() {
    const [ setMenu, isMenuOn ] = useState("");

    const handleClick = () => {
        isMenuOn(setMenu === "" ? "active" : "");
    }
    const closeMobileMenu = () => isMenuOn("");

    let location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [location]);

    const isMenuOpenBlur = () => {
        if(document.querySelector("main") && document.querySelector("footer")){document.querySelector("main").style.filter = "blur(10px)";document.querySelector("footer").style.filter = "blur(10px)";}
    }
    const isMenuCloseBlur = () => {
        if(document.querySelector("main") && document.querySelector("footer")){document.querySelector("main").style.filter = "none";document.querySelector("footer").style.filter = "none";}
    }

    const [ isNoCSS, isNoCSSOn ] = useState("")
    const deleteCSS = () => {
        isNoCSSOn(isNoCSS === "" ? "active" : "")
        document.body.classList.add("mode-nocss")
        document.querySelector("link[rel=stylesheet]").remove();
    }
    const refreshPage = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        const interval = setInterval(() => window.location.reload(false), 750);
        return () => clearInterval(interval)
    }
    const [ darkMode, setDarkMode ] = useState(true)

    return(
        <>
            <nav className="nav desk">
                <section className="nav-menu-modes">
                    {setMenu === "active" ?
                        <img onClick={handleClick} className="nav-menu active" src={pictoMenuClose} alt="Pictogramme représentant le menu burger (3 traits horizontaux)" />
                    :
                        <img onClick={handleClick} className="nav-menu" src={pictoMenuOpen} alt="Pictogramme représentant le menu burger (3 traits horizontaux)" />
                    }
                    <section className="option-desk">
                        <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                        <div className="dark" onClick={() => {setDarkMode(!darkMode); changeTheme(!darkMode ? themes.dark : null)}}>
                            <img src={pictosDark} alt="Pictogramme représentant une bulle de couleur bleu sombre signifant que le site Internet peut passer en 'dark mode'" />
                            <p>nuit</p>
                        </div>
                        )}
                        </ThemeContext.Consumer>
                        <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                        <div className="light" onClick={() => {setDarkMode(!darkMode); changeTheme(darkMode ? themes.light : null)}}>
                            <img src={pictosLight} alt="Pictogramme représentant une bulle entièrement blanche signifant que le site Internet peut passer en 'light mode'" />
                            <p>jour</p>
                        </div>
                        )}
                        </ThemeContext.Consumer>
                        <div className="noCSS" onClick={deleteCSS}>
                            <img src={pictosNoCSS} alt="Pictogramme représentant une bulle avec le mot 'CSS' barré signifant que le site Internet peut passer en 'no css mode'" />
                            <p>no CSS</p>
                        </div>
                        {isNoCSS === "active" ? 
                            <Link to="/" title="Redirection vers la page d'accueil en mode 'normal'"><p onClick={refreshPage} className="noCSS" style={{display:"block",backgroundColor:"red",width:"100%",color:"white",paddingTop:"2rem",position:"fixed",top:0,margin:"-8px",textAlign:"center",fontSize:"20px",zIndex:"999"}}>Revenir en lieu sûr</p></Link>
                        : 
                            null
                        }
                    </section>
                </section>
                <Link to="/" title="Redirection vers la page d'accueil du Studio Culotté." onClick={closeMobileMenu}><img className="nav-logo" src={logoDesk} alt="Logo du Studio Culotté en mode vertical" /></Link>
            </nav>
            {setMenu === "active" ? <Links isDesk={true} closeMobileMenu={closeMobileMenu} /> : null}
            {setMenu === "active" ? isMenuOpenBlur() : isMenuCloseBlur()}
        </>
    )
}