import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";
import SavoirPhoto from "../../../assets/Images/img-keeplight.webp"
import SavoirPhoto2 from "../../../assets/Images/img-madmedcan.webp"

export default function Photo() {
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
            case targetName.contains('lb'):
                modifyIndex(5)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Photo</h1>
                <h2>Capturer la lumière</h2>
                <p>La photographie est un outil hyper large qui consiste à capter la lumière d’un certain point de vue. Contrairement à l’illustration, une notion d’espace vient s’ajouter et surtout d’instant. Comment aligner les deux pour obtenir de bons résultats ? Il faut de la projection et de la vision ainsi qu’une bonne donne de sensibilité pour obtenir de bon résultats.</p>

                <img src={SavoirPhoto} alt="Représentation de comment bien capturer la lumière." />
        
                <p>Dans l’univers de la photo, le lieu, la lumière et le temps peuvent être cadrés en faisant des shooting en studio. L’avantage ? Un maîtrise de la lumière et des reflets ! Pensons aux packshot pour les produits. Ils seront parfois exploités comme tel mais peuvent aussi être upgradés en mockup afin d’avoir la même forme de la bouteilles mais différentes étiquettes. Aujourd’hui, la plupart des mockup sont réalisé à partir de photos, mais pour un résultat plus luxe, ce sont nos amis créateurs 3D que l’on ira solliciter.</p>

                <img src={SavoirPhoto2} alt="Représentation de la cannette de Mad Med" />

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation d'Aromo." to="/realisation"><li onClick={switchIndex} className="aromo">Aromo</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                </ul>
            </main>
        </>
    )
}