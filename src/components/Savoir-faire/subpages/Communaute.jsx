import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

export default function Communaute() {
    const {windowSize} = Resize();

    const [, setSlideIndex] = useContext(AuthContext);
    const modifyIndex = index => {
        setSlideIndex(index)
    }
    const switchIndex = (e) => {
        const targetName = e.target.classList
        switch(true) {
            default: 
                console.error(`⚠️ La class '${targetName}' ne correspond pas à la 'case' conçue. ⚠️`)
                break;
            case targetName.contains('aromo'):
                modifyIndex(7)
                break;
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Communauté sur la toile</h1>
                <h2>Aller vers tes consommateurs</h2>
                <p>Les réseaux servent à créer un lien direct avec ta communauté, la différence avec un site internet étant la temporalité. Quand un site internet va garder des informations qui évoluent occasionnellement, les réseaux sont une continuelle source de propos. Ils vont servir pour tout ce qui est évènements, lives, instants à partager, afin de redonner valeur et transparence à l’utilisateur.
                <br />C’est toute une chaîne, le consommateur a aimé un flacon, il peut se renseigner sur sa composition son histoire sur ton site internet, et avoir les dates des prochains évènements pour en acheter plus.
                <br />Sur les réseaux sociaux, les visuels sont primordiaux. Que ce soit une image ou une vidéo, une communication soignée est importante, même si la durée de vie est moins longue que sur un site.</p>

                <h2 id="anchor-creation-contenu">Création de contenu</h2>           
                <p>Tout va dépendre réellement de ce que vous attendez des réseaux sociaux, vos objectifs. Selon vos objectifs, il y a un ou plusieurs réseaux à privilégier, que ce soit plutôt facebook, Instagram, Linked In… On y trouve pas le même contenu, et la stratégie va définir où communiquer.
                <br />La stratégie demande une ligne éditoriale bien réfléchie, qui demande du temps et de l’implication.</p>
            
                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation d'Aromo." to="/realisation"><li onClick={switchIndex} className="aromo">Aromo</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                </ul>
            </main>
        </>
    )
}