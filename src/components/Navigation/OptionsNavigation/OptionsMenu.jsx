import '../../../css/Navigation/OptionsMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Resize } from "../../Resize/Resize"
import { ThemeContext, themes } from '../../LightMode/ThemeContext'
import pictosLight from "../../../assets/Picto/picto-white-mode.webp"
import pictosNoCSS from "../../../assets/Picto/picto-noCSS-mode.webp"
import pictosDark from "../../../assets/Picto/picto-night-mode.webp"

export default function OptionsMenu(props) {
    const {windowSize} = Resize();
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
    
    const [ optionsBg, setOptionsBg ] = useState("active")
    const handleOptionsBg = () => {
        setOptionsBg(optionsBg === "active" ? "" : "active");
    }

    return(
        <>  
            {windowSize.innerWidth < 1201 ?
                <section onClick={() => {handleOptionsBg(); props.closeOptionsMenu()}} className={`options-bg ${optionsBg}`}></section>
            :
                null
            }
            <section className={windowSize.innerWidth < 1201 ? "options" : "options desk"}>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                        <div className="option dark" onClick={() => {setDarkMode(!darkMode); changeTheme(!darkMode ? themes.dark : null); props.closeOptionsMenu()}}>
                            <p>nuit</p>
                            <img src={pictosDark} alt="Pictogramme représentant une bulle de couleur bleu sombre signifant que le site Internet peut passer en 'dark mode'" />
                        </div>
                    )}
                </ThemeContext.Consumer>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                        <div className="option light" onClick={() => {setDarkMode(!darkMode); changeTheme(darkMode ? themes.light : null); props.closeOptionsMenu()}}>
                            <p>jour</p>
                            <img src={pictosLight} alt="Pictogramme représentant une bulle entièrement blanche signifant que le site Internet peut passer en 'light mode'" />
                        </div>
                    )}
                </ThemeContext.Consumer>
                <div className="option" onClick={deleteCSS}>
                    <p>no CSS</p>
                    <img src={pictosNoCSS} className={`${isNoCSS}`} alt="Pictogramme représentant une bulle avec le mot 'CSS' barré signifant que le site Internet peut passer en 'no css mode'" />
                </div>
                {isNoCSS === "active" ? 
                    <Link to="/" title="Redirection vers la page d'accueil en mode 'normal'"><p onClick={refreshPage} className="noCSS" style={{display:"block",backgroundColor:"red",width:"100%",color:"white",paddingTop:"2rem",position:"fixed",top:0,margin:"-8px",textAlign:"center",fontSize:"20px",zIndex:"999"}}>Revenir en lieu sûr</p></Link>
                : 
                    null
                }
            </section>
        </>
    )
}