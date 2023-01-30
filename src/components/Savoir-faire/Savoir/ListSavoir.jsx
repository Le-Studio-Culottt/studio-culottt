import { useEffect, useRef } from "react";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
import datas from "../datas/ListSavoir.json"
import bgSavoirMobile from "../../../assets/Background/background-constellation-mobile-nuit.svg"
import bgSavoirTablet from "../../../assets/Background/background-constellation-tablet-nuit.svg"
import bgSavoirDesk from "../../../assets/Background/background-constellation-desktop-nuit.svg"

export default function ListSavoir(props) {

    const filteredData = datas.filter((e) => {
        return(
            props.input === '' ? e : e.mot?.toLowerCase().includes(props.input)
        );
    })
    useEffect(() => {  
        let lis = document.querySelectorAll('.savoir-listing-random');
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        if(window.innerWidth <= 375) {
            winWidth = window.innerWidth - 250;
            winHeight = window.innerHeight - 75;
        } else if(window.innerWidth >= 376 && window.innerWidth <= 425) {
            winWidth = window.innerWidth - 250;
            winHeight = window.innerHeight;
        } else if(window.innerWidth >= 426 && window.innerWidth <= 768){
            winWidth = window.innerWidth - 250;
            winHeight = window.innerHeight;
        } else if(window.innerWidth >= 769 && window.innerWidth <= 1024){
            winWidth = window.innerWidth - 175;
            winHeight = window.innerHeight + 25;
        } else if(window.innerWidth >= 1025 && window.innerWidth <= 1201){
            winWidth = window.innerWidth - 300;
            winHeight = window.innerHeight - 150;
        } else if(window.innerWidth >= 1202 && window.innerWidth < 1500){
            winWidth = window.innerWidth - 350;
            winHeight = window.innerHeight - 50;
        } else if(window.innerWidth > 1500) {
            winWidth = window.innerWidth - 550;
            winHeight = window.innerHeight - 50;
        }
        for ( let i = 0; i < lis.length; i++ ) {
            let thisDiv = lis[i];
            let randomTop = getRandomNumber(0, winHeight);
            let randomLeft = getRandomNumber(0, winWidth);
            thisDiv.style.top = randomTop + "px";
            thisDiv.style.left = randomLeft + "px";
        }
        function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
    })
    const ref = useRef(null)
    const handleImageLoad = () => {
        if (ref.current) {
          ref.current.style.height = `${ref.current.naturalHeight}px`;
        }
      };


    return(
        <>
            <section className="savoir-listing">
                {window.innerWidth < 600 ?
                    <img className="savoir-img-bg mobile" src={bgSavoirMobile} alt="Représentation d'une constellation"  ref={ref} onLoad={handleImageLoad} />
                : window.innerWidth >= 600 && window.innerWidth < 1201 ? 
                    <img className="savoir-img-bg tablet" src={bgSavoirTablet} alt="Représentation d'une constellation" ref={ref} onLoad={handleImageLoad} />
                : window.innerWidth >= 1201 ?
                    <img className="savoir-img-bg desk" src={bgSavoirDesk} alt="Représentation d'une constellation" />
                :
                    null
                }
                <ul>
                    {filteredData.sort((a,b) => 0.5 - Math.random()).map((item, i) => (
                        <li className="savoir-listing-random" key={i}><LinkAnchor title={`Redirection vers ${item.url}`} key={i} to={item.url}>{item.mot}</LinkAnchor></li>
                    ))}
                </ul>
            </section>
        </>
    )
}