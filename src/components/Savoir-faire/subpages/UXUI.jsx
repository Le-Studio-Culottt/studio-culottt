import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function DirectionArtistique() {
    const {windowSize} = Resize();

    const [slideIndex, setSlideIndex] = useContext(AuthContext);
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
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth <= 1201 ? "subs" : "subs desk"}>
                <h1>UX/UI</h1>
                <h2>Comment concevoir un site internet ?</h2>
                <p>Pour concevoir un site internet, on part généralement de l’objectif. Vendre des produits ou assoir une notoriété ne donnera pas le même résultat.</p>
                <p>Ensuite, il faut construire le plan d’action, et tout comme un architecte, il nous faudra un plan de site —ou sitemap. Ce plan de site nous sert de découpage des sections du site et du lien que les pages ont entre elles.</p>
                <p>Ce plan est très important car c’est de là qu’on va se mettre d’accord sur l’ordre des sections et donc du plan de rédaction du site. Grâce à lui, le texte pourra découler de lui-même.</p>
                <p>Ensuite vient l’étape des wireframes où l’on va mettre en page le texte et les boutons. Parfois l’on peut revoir les parcours utilisateurs afin de le simplifier et rendre service aux internautes.</p>
                <p>Lorsque tout ça est validé, on va pouvoir passer en phase de création et maquettage des maquettes. C’est redondant mais celà nous assure le chemin à prendre. C’est à partir de là que la direction artistique va intervenir et apposer l’identité de marque.</p>
                <p>Grâce à des logiciel de prototypage, nous pourront ‘simuler’ un site internet avec -la plupart de- ses interactions et animations. On entend les animation web les transitions de pages, un défilement particulier ou l’animation d’un bouton.</p>
                <p>Ces prototypes enfin validés, il nous reste la phase technique : l’intégration.</p>

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                    <Link to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link to="/realisation"><li onClick={switchIndex} className="terravine">Terra Vine Agency</li></Link>
                    <Link to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link to="/realisation"><li onClick={switchIndex} className="mongestine">La Mongestine</li></Link>
                    <Link to="/realisation"><li onClick={switchIndex} className="morillon">Château Morillon</li></Link>
                </ul>
            </main>
        </>
    )
}