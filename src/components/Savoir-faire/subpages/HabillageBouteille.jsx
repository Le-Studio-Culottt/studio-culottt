import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

import EtiquetteBouteille from "../../../assets/Images/img-wilaaw-sans-superflus.webp"
import EtiquetteBouteille2 from "../../../assets/Images/img-wilaaw-wild-wine-world.webp"


export default function HabillageBouteille() {
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
            case targetName.contains('ddr'):
                modifyIndex(4)
                break;
            case targetName.contains('syrah'):
                modifyIndex(10)
                break;
            case targetName.contains('danaides'): 
                modifyIndex(1)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Habillage de bouteille</h1>
                <h2>Un caviste c'est comme un libraire.</h2>
                <p>Nous, simples lecteurs, quand on s’adresse à notre libraire fétiche, nous demandons conseil sur une envie en particulier ou même une nouveauté. Notre ami libraire nous propose plusieurs ouvrages, nous raconte ce qu’il s’y passe, quels thèmes sont abordés, ce qu’on va vivre, tout en tenant l’objet.
                <br />Parfois c’est l’auteur qu’on choisi, et souvent, sur une découverte ou une nouvelle entrée, on va être séduit par la couverture. Pour nous ou pour quelqu’un d’autre d’ailleurs. Qui n’a pas déjà acheté un livre en fonction de sa couverture ?
                <br />Le parallèle, c’est que l’étiquette c’est la couverture et la contre-étiquette c’est la 4eme de couverture. La première image de ce que l’on vend quand on ne connais pas le contenu. La qualité esthétique de l’étiquette amène toujours à penser au produit en lui-même, c’est son reflet. Car quand on ne connait pas forcément le monde du vin, c’est la communication qui prend le relais pour transmettre et traduire le produit en une image universelle.</p>

                <img src={EtiquetteBouteille} alt="Présentation d'une étiquette étirée sur une bouteille." />

                <h2>Soigner l'étiquette du flacon</h2>           
                <p>La bouteille, le magnum ou la canette c’est l’ultime et dernier lien qui existe entre le producteur et le consommateur. C’est le dernier objet que vous aurez touché tous les deux.
                <br />Une fois que tu l’auras confectionné et mis en vente (que ce soit en direct, chez des revendeurs, grossiste ou à l’export), c’est l’étiquette qui parlera pour toi.
                <br />On se souviendra d’un dessin marquant, d’un jeu de mots bien placé, d’une étiquette dite « classique », si un petit plus s’en dégage. Parfois même on aura envie de la garder une fois vide.
                <br />Déjà parce que l’expérience du produit était sensationnelle, mais aussi « parce que l’étiquette est vraiment belle, alors je l’ai gardée ».
                <br />Autant d’arguments qui amène à bien soigner l’habillage, pour que le consommateur choisisse ton produit plutôt qu’un autre. Qu’il ait assez d’informations pour se renseigner plus sur toi, ton produit ou même ta région. Un lien vers ton site internet ou ta communauté en ligne, le consommateur va rechercher ce genre d’information pour en savoir plus sur toi. C’est sûr, quand on aime un produit on en redemande, alors facilitons l’échange.</p>

                <img src={EtiquetteBouteille2} alt="Présentation d'une deuxième étiquette étirée sur une bouteille." />

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Syrah." to="/realisation"><li onClick={switchIndex} className="syrah">Syrah</li></Link>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                </ul>
            </main>
        </>
    )
}