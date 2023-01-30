import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";
import Cartographie from "../../../assets/Images/img-cartographie.gif"


export default function CartographieVignoble() {
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
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
            case targetName.contains('cdv'):
                modifyIndex(15)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Cartographie de vignoble</h1>
                <h2>Prendre du recul</h2>
                <p>Les vignobles sont passionnants, et dessiner une représentation de ceux-ci, c’est essayer de délimiter un terroir (pour autant qu’on puisse le faire). On est toujours fasciné par une carte, fasciné de situer que c’est là où pousse un vin que l’on affectionne. Parfois là où on a grandi, ou dans une région que l’on a visité. Il y a un lien fort qui s’exprime entre ce que l’on boit et ce que l’on a vécu. Les cartes nous rappellent tout cela, ce sont des mines de souvenir.
                <br />Les cartes sont aussi des sources d’apprentissage, qui nous permettent de prendre le recul nécessaire à l’étude, et la compréhension du vin. Situer géographiquement un vin, c’est faire attention à son sol, à ses voisins, et à sa place même sur le globe. C’est autant d’indices qui nous permettent de s’apercevoir que le sol à son importance, dans la terre et les minéraux. Mais aussi dans la végétation : les fleurs, les arbres et les aromates sont différents, rien qu’en France !</p>

                <img src={Cartographie} alt="Représentation de comment faire une cartographie." />

                <h2>L'ambition des belles cartes</h2>           
                <p>C’est à l’occasion de la création du Décanté que nous avons pu recréer les cartes des vignobles français. Nous savons que c’est un excellent outil d’apprentissage.
                <br />C’est un outil que nous avons voulu voir en grand, et c’est pour cela que nous les avons adapté en poster. Aujourd’hui, nous avons fait tirer le Beaujolais et la Bourgogne en sérigraphie. et ce, pour avoir un lien fort avec l’artisanat, un travail unique et vivant : à la main.</p>
            
                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation de la Carte des Vins." to="/realisation"><li onClick={switchIndex} className="cdv">Carte des vins</li></Link>
                </ul>
            </main>
        </>
    )
}