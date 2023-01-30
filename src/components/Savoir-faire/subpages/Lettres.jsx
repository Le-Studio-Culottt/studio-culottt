import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

import LettresImg from "../../../assets/Images/img-lettres.webp"

export default function Lettres() {
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
            case targetName.contains('vlm'):
                modifyIndex(16)
                break;
            case targetName.contains('danaides'): 
                modifyIndex(1)
                break;
            case targetName.contains('lombard'):
                modifyIndex(2)
                break;
            case targetName.contains('mongestine'):
                modifyIndex(3)
                break;
            case targetName.contains('ddr'):
                modifyIndex(4)
                break;
            case targetName.contains('lb'):
                modifyIndex(5)
                break;
            case targetName.contains('navigli'):
                modifyIndex(9)
                break;
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
            case targetName.contains('edition'):
                modifyIndex(12)
                break;
            case targetName.contains('vif'):
                modifyIndex(14)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Des lettres, rien que des lettres</h1>
                <h2>Typo, police de caractère & composition</h2>
                <p>Les typo (ou police de caractères — même parfois appelée police d'écriture) font partie de l’image globale. Chacun des squelettes des lettres ont un certains habillage. Ils vont aider la communication à passer des messages souvent inconscient.</p>
                <p>C’est une des matières premières de composition pour un support imprimé.
                <br />Un empattement abrupte peu évoquer le tranchant dans un vin, ou même, une lettre voluptueuse, la rondeur du breuvage. Elle peut aussi bien suggérer une époque, ou même une région d’un pays. Tout ces éléments sont a prendre en compte pour constituer une identité forte et unique. C’est le rôle du directeur artistique de définir ces choix en échangeant avec toi.
                <br />Au studio on aura toujours cœur à valoriser des caractères de créateur si le projet le permet. Les fonderies indépendantes conçoivent des polices aussi dingues que lisibles. Ce sont d’autant d’outils qui font sens, quand on veut valoriser un produit artisanal.</p>
                
                <img src={LettresImg} alt="Représentation d'une composition." />

                <h2 id="anchor-maquettage">Maquettage</h2>           
                <p>La notion de maquettage ne pourrait exister sans la typographie. On appelle ça ‘composer’ avec la typographie parce que l’on va déterminer un rapport esthétique entre une police et une surface donnée.</p>
                <p>Que ce soit sur une présentation PDF, un fichier à imprimer, un flyer, un site en mobile ou un site en desktop le travail se fait toujours en rapport avec la police de caractère.</p>
                <p>Si nous étions architecte et que le support à créer était une maison, la police de caractère serait des briques.</p>
            
                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation de Verre le Monde." to="/realisation"><li onClick={switchIndex} className="vlm">Verre le Monde</li></Link>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lombard." to="/realisation"><li onClick={switchIndex} className="lombard">Domaine Lombard</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine de la Mongestine." to="/realisation"><li onClick={switchIndex} className="mongestine">La Mongestine</li></Link>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation de Navigli." to="/realisation"><li onClick={switchIndex} className="navigli">Navigli</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation de Mieux Comprendre le (vin) Bio." to="/realisation"><li onClick={switchIndex} className="edition">Mieux Comprendre le (vin) bio</li></Link>
                    <Link title="Redirection vers la réalisation de Vif l'agence de vins." to="/realisation"><li onClick={switchIndex} className="vif">Vif Agence de vins</li></Link>
                </ul>
            </main>
        </>
    )
}