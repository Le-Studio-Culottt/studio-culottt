import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

import SiteWeb from "../../../assets/Images/img-siteweb-maquette.webp"
import SiteWeb2 from "../../../assets/Images/img-siteweb-maquette-apero.webp"

export default function SiteInternetDifferent() {
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
                <h1>Créer un site Internet différent</h1>
                <h2>À quoi sert un site internet ?</h2>
                <p>Un site internet, oui mais pourquoi ? Aujourd’hui le consommateur cherche un produit avec des valeurs, de l’éthique et de l’authenticité.
                <br />Le site internet est le meilleur moyen de communiquer toutes ces informations au consommateur final. Dans des métiers du secteur du vin, un cépage ou un procédé de fabrication peut paraître évident. Même notre caviste préféré peut nous renseigner un maximum sur tous les détails, ton histoire et tes coordonnées.
                <br />Aujourd’hui les consommateurs sont curieux, et veulent revenir sur cette appellation dont ils ont oublié le nom, ou le nom du brassin qu’un ami a ramené au dernier apéro. Le Site est là pour ça, il est là pour que vous ayez le contrôle de ce qui est dit sur vous et votre travail. Il est là pour qu’on puisse découvrir et re-découvrir votre histoire. Il est là pour noter votre adresse et vous rendre visite. Il est là aussi pour décrire vos bouteilles, et même pour partager des anecdotes.</p>
                
                <h2 id="anchor-unique">Le web est unique</h2>   
                <p>En plus de présenter tes produits et qui tu es, le web sert à créer un lien avec les consommateurs. Il sert aussi à te valoriser toi et tes produits, avec des clichés et une communication représentative, le but est d’avoir des visuels de qualité.<br />Un site internet sert à servir un ou plusieurs objectifs. C’est l’outil marketing central car il va regrouper énormément d’informations. Mais le plus simple est souvent le meilleur. Rien de trop compliqué pour ne perdre personne et hiérarchiser les informations, les adaptés, c’est notre rôle !<br />C’est aussi l’occasion de traduire tous ces contenus en anglais et même en d’autres langues pour l’export.</p>

                <h2 id="anchor-site">Site internet, site vitrine et site e-commerce</h2>
                <p>Les sites internet peuvent être catégorisés de deux manières ; les sites vitrine qui servent à divulguer de l’information à nos internautes, en allant jusqu’au blog. Puis les site e-commerce qui possèdent -en plus- un module de vente.</p>
                
                <h2 id="anchor-engagement">Notre engagement</h2>
                <p>On aime les règles de l’art, mais on ne peut pas tout faire. C’est pourquoi on s’attache à créer et réfléchir des site de manière SEO friendly d’une part et qui respecte les bonnes pratiques web d’autre part.</p>
                <p>On dit SEO friendly parce que le référencement c’est tout un métier, ce n’est pas le notre. Mais notre rôle est de faciliter l’usage des sites que nous créons. On travaille donc sur ce que l’on peut faire avec une partie technique (temps de chargement, poids des images, etc.) et aussi une partie accessibilité (avec les balise alt et meta). On travaille sur le maillage interne et des footers bien fournis. Tout ça donne une base saine si le site doit passer dans les mains d’un pro du SEO.</p>
                <p>Pour les bonnes pratiques web, nous nous référons à la bible opquast pour obtenir, du mieux que possible, un site utilisant des bonnes pratiques face aux utilisateur.</p>
                
                <img src={SiteWeb} alt="Représentation d'une maquette d'un site Internet 'Apero Melomane'." />
                <img src={SiteWeb2} alt="Représentation d'une autre maquette d'un site Internet 'Apero Melomane'." />

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation de Terra Vine Agency." to="/realisation"><li onClick={switchIndex} className="terravine">Terra Vine Agency</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine de la Mongestine." to="/realisation"><li onClick={switchIndex} className="mongestine">La Mongestine</li></Link>
                    <Link title="Redirection vers la réalisation du Château Morillon." to="/realisation"><li onClick={switchIndex} className="morillon">Château Morillon</li></Link>
                </ul>
            </main>
        </>
    )
}