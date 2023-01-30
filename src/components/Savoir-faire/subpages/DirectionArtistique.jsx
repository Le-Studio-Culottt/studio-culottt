import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function DirectionArtistique() {
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
            case targetName.contains('danaides'): 
                modifyIndex(1)
                break;
            case targetName.contains('lombard'):
                modifyIndex(2)
                break;
            case targetName.contains('ddr'):
                modifyIndex(4)
                break;
            case targetName.contains('lb'):
                modifyIndex(5)
                break;
            case targetName.contains('terravine'):
                modifyIndex(8)
                break;
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
            case targetName.contains('mongestine'):
                modifyIndex(3)
                break;
            case targetName.contains('morillon'):
                modifyIndex(6)
                break;
            case targetName.contains('navigli'):
                modifyIndex(9)
                break;
            case targetName.contains('vif'):
                modifyIndex(14)
                break;
            case targetName.contains('vlm'):
                modifyIndex(16)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Direction artistique pour un domaine</h1>
                <h2>Quelle direction artistique pour votre entreprise</h2>
                <p>Alors d’abord la Direction artistique, c’est quoi ? C’est la valeur première d’une communication, elle va définir ce que dégage tous ses éléments. C’est penser une communication à 360°, c’est-à-dire tous ses supports. La direction artistique justifie et détermine des valeurs visuelles pour représenter et traduire l’âme de ton vignoble, ta brasserie, ton entreprise, etc.</p>
                <p>Une fois que tout est précisé, on parle aussi de direction artistique quand la communication garde sa cohérence. Ça veut dire que peu importe le support, les éléments gardent leur équilibre, comme dans un vin. Le directeur artistique travaille à ce qu’aucun des éléments prenne le dessus sur un autre, c’est un travail d’ensemble.</p>

                <h2>Conseil en image</h2>           
                <p>Ce métier fait donc appel à une expérience et une très bonne connaissance de sa propre profession d’abord. Ensuite il fait appel à une large compréhension de son domaine d’expertise.</p>
                <p>Au Studio Culotté, on met un point d’honneur à toujours apprendre du métier de vigneron, de brasseur, de sommelier aussi. C’est très large, on ne peut pas tout savoir d’un métier qui n’est pas le nôtre. Mais c’est laisser parler son cœur, travailler sa mémoire et écouter l’autre qui constitue un bon directeur artistique spécialisé dans le secteur du vin et de la bière. Cette combinaison donne la solidité du travail de direction et donc permet de conseiller où nous pouvons aller ensemble.</p>
            
                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lombard." to="/realisation"><li onClick={switchIndex} className="lombard">Domaine Lombard</li></Link>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation de Terra Vine Agency." to="/realisation"><li onClick={switchIndex} className="terravine">Terra Vine Agency</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine de la Mongestine." to="/realisation"><li onClick={switchIndex} className="mongestine">La Mongestine</li></Link>
                    <Link title="Redirection vers la réalisation du Château Morillon." to="/realisation"><li onClick={switchIndex} className="morillon">Château Morillon</li></Link>
                    <Link title="Redirection vers la réalisation de Navigli." to="/realisation"><li onClick={switchIndex} className="navigli">Navigli</li></Link>
                    <Link title="Redirection vers la réalisation de Vif Agence de vins." to="/realisation"><li onClick={switchIndex} className="vif">Vif Agence de vins</li></Link>
                    <Link title="Redirection vers la réalisation de Verre le Monde." to="/realisation"><li onClick={switchIndex} className="vlm">Verre le Monde</li></Link>
                </ul>
            </main>
        </>
    )
}