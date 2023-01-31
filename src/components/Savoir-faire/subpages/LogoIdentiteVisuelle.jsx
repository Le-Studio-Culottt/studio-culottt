import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthContext"
import { Link } from "react-router-dom"
import TerravineLogo from "../../../assets/Images/img-terravine-logo.webp"
import StJosephLogo from "../../../assets/Images/img-st-joseph-logo.webp"
import StJosephLogo2 from "../../../assets/Images/img-st-joseph-logo-bordeaux.webp"
import LionelBrenierLogo from "../../../assets/Images/img-lionel-brenier-logo.svg"

export default function LogoIdentiteVisuelle() {
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
            case targetName.contains('navigli'):
                modifyIndex(9)
                break;
            case targetName.contains('vif'):
                modifyIndex(14)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth <= 1201 ? "subs" : "subs desk"}>
                <h1>Logo et identité visuelle</h1>
                <h2>Reconnaître instinctivement</h2>
                <p>Ton logo, c’est la pierre angulaire de ta communication. Il peut avoir toutes les formes du monde, et c’est pour ça, qu’il en dit beaucoup sur toi. Tu peux choisir un logo très détaillé pour une personnalité exubérante. Un logo minimaliste pour un produit qui sera concis, pur. Un logo vintage pour faire appel à une pratique d’antan. Un logo moderniste pour une entreprise de logistique.
                <br />En résumé, ton identité est unique car elle te représente toi et ton business. Il confirme visuellement tes valeurs. C’est le travail du directeur artistique, qui avec ses connaissances et son expertise, va faire appel à un certain choix de l’image, à l’utilisation de certaines couleurs. Qui aux yeux de tous, parlent pour dire la même chose.</p>
                
                <img src={TerravineLogo} alt="Logo de Terra Vine Agency" />

                <h2>Conseil en image</h2>           
                <p>Chez les vignerons dont on a pu goûter plusieurs cuvées, on parle souvent de sa patte. Cette signature gustative que l’on arrive à reconnaître et qui le différencie même du travail de ses filles & fils.
                <br />Cette signature, c’est un peu comme ton logo. C’est la chose qui te permet de te différencier à l’aveugle. Elle fait partie de ton identité (personnelle, gustative, visuelle…), mais aussi de ton histoire. Elle est l’origine de tout et c’est autour de ça que tout né, que tout se développe.</p>
            
                <img src={StJosephLogo} alt="Composition du logo de St-Joseph" />
                <img src={StJosephLogo2} alt="Logo du Bouchon St-Joseph" />

                <h3 id="anchor-perception">Une histoire de perception</h3>
                <p>Une identité (ou branding pour les anglophones) est la perception globale des éléments qui la compose. Ce travail mise en place des éléments de couleurs, des choix typographique, de l’esprit du logo et de la création de pictogramme pour certains créer un ensemble. C’est la succession de ces ensemble et de ces choix qui créé une histoire fictive que l’on appelle identité. Pour garder cohérence et stabilité de cette identité (propre à l’homme même) les créa vont avoir besoin d’un outil appelé ‘charte graphique’. Il réunit des indications et ou des règles qui vont diriger la création et ainsi conserver la consistance de l’identité.</p>

                <img src={LionelBrenierLogo} alt="Logo de Lionel Brenier" className="logo-identite-lb"/>

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation de Terra Vine Agency." to="/realisation"><li onClick={switchIndex} className="terravine">Terra Vine Agency</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation de Navigli." to="/realisation"><li onClick={switchIndex} className="navigli">Navigli</li></Link>
                    <Link title="Redirection vers la réalisation de Vif l'agence de vins." to="/realisation"><li onClick={switchIndex} className="vif">Vif Agence de vins</li></Link>
                </ul>
            </main>
        </>
    )
}