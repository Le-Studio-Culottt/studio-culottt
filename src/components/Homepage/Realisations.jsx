import '../../css/Homepage/Realisations.css';
import { useContext, useMemo } from 'react';
import { HashLink as LinkAnchor } from 'react-router-hash-link';
import { AuthContext } from '../../Context/AuthContext'
import CardsRealisation from "./CardsRealisation/CardsRealisation"

const cardArray=[{title:"Brasserie les Danaïdes",image:"/Imgs/img-home-danaides.webp",class:"danaides",redirect:"/realisation"},{title:"Domaine Lombard",image:"/Imgs/img-home-lombard.webp",class:"lombard",redirect:"/realisation"},{title:"Domaine de la Mongestine",image:"/Imgs/img-home-mongestine.webp",class:"mongestine",redirect:"/realisation"},{title:"Distillerie du Rh\xf4ne",image:"/Imgs/img-home-ddr.webp",class:"ddr",redirect:"/realisation"},{title:"Domaine Lionel Brenier",image:"/Imgs/img-home-lionel-brenier.webp",class:"lb",redirect:"/realisation"},{title:"Chateau Morillon",image:"/Imgs/img-home-morillon.webp",class:"morillon",redirect:"/realisation"},{title:"Aromo",image:"/Imgs/img-home-aromo.webp",class:"aromo",redirect:"/realisation"},{title:"Terra Vine Agency",image:"/Imgs/img-home-terravine.webp",class:"terravine",redirect:"/realisation"},{title:"Navigli",image:"/Imgs/img-home-navigli.webp",class:"navigli",redirect:"/realisation"},{title:"La Petite Serine",image:"/Imgs/img-home-syrah.webp",class:"syrah",redirect:"/realisation"},{title:"Le D\xe9cant\xe9",image:"/Imgs/img-home-decante.webp",class:"decante",redirect:"/realisation"},{title:"Mieux Comprendre le (Vin) Bio",image:"/Imgs/img-home-editions-bdd.webp",class:"edition",redirect:"/realisation"},{title:"Ni Bu Ni Connu",image:"/Imgs/img-home-nbnc.webp",class:"nbnc",redirect:"/realisation"},{title:"Vif Agence de vins",image:"/Imgs/img-home-vif.webp",class:"vif",redirect:"/realisation"},{title:"Cartographie de vignobles",image:"/Imgs/img-home-carte-vins.webp",class:"cdv",redirect:"/realisation"},{title:"Verre le monde",image:"/Imgs/img-home-vlm.webp",class:"vlm",redirect:"/realisation"},];

export default function Realisations () {
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
            case targetName.contains('morillon'):
                modifyIndex(6)
                break;
            case targetName.contains('aromo'):
                modifyIndex(7)
                break;
            case targetName.contains('terravine'):
                modifyIndex(8)
                break;
            case targetName.contains('navigli'):
                modifyIndex(9)
                break;
            case targetName.contains('syrah'):
                modifyIndex(10)
                break;
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
            case targetName.contains('edition'):
                modifyIndex(12)
                break;
            case targetName.contains('nbnc'):
                modifyIndex(13)
                break;
            case targetName.contains('vif'):
                modifyIndex(14)
                break;
            case targetName.contains('cdv'):
                modifyIndex(15)
                break;
            case targetName.contains('vlm'):
                modifyIndex(16)
                break;
        } 
    }

    const shuffledCards = useMemo(() => {
        const shuffledArray = cardArray.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[rand]] = [shuffledArray[rand], shuffledArray[i]];
        }
        return shuffledArray;
    }, []);

    let currentItem = 4;
    const MoreItems = () => {
        let boxes = [...document.querySelectorAll(".home-realisations-container a")];
        const btnMoreQuest = document.querySelector(".more-realisation")
        const btnBackTop = document.querySelector(".real-back-start")
        for (let i = currentItem; i < currentItem + 4; i++) {
            boxes[i].style.display = 'block';
        }
        currentItem += 4;
        if(currentItem >= boxes.length){
            btnMoreQuest.style.display = "none";
            btnBackTop.style.display = "block"
        }
    }   
    const keyPress = (e) => {
        if(e.key === "Enter"){
            MoreItems()
        }
    }

    return(
      <section className="home-realisations" id="home-realisations">
        <h2>Les Réalisations</h2>
        <p>Une sélection de projets.</p>
        
        <section className="home-realisations-container">
            {shuffledCards.map((card, index) => (
                <CardsRealisation redirect={card.redirect} className={card.class} key={index} title={card.title} image={card.image} onClick={switchIndex} slideIndex={slideIndex} /> 
            ))}
        </section>
        <a role="button" onKeyDown={keyPress} title="Permet d'appuyer sur 'Entrée' de votre clavier pour pouvoir accéder aux autres réalisations." tabIndex="0"><p onClick={MoreItems} className="more-realisation">Voir d'autres réalisations<span>↓</span></p></a>
        <LinkAnchor to="#home-realisations" title="Permet de retourner en haut des réalisations"><p className="real-back-start"><span>↓</span>Retour en haut</p></LinkAnchor>
      </section>
  )
}