import { useContext, useState } from 'react'
import BtnSlider from './BtnSlider'

import dataSlider from './DataSlider'
import croixToggle from "../../../assets/Picto/picto-nav-menu-close.webp"

import BRASSERIEDANAIDES from '../projects/BLD'
import DOMAINELOMBARD from "../projects/DL"
import LAMONGESTINE from '../projects/DDLM'
import DISTILLERIERHONE from '../projects/DDR'
import LIONELBRENIER from "../projects/LB"
import CHATEAUMORILLON from '../projects/CM'
import AROMO from "../projects/AROMO"
import TERRA from "../projects/TERRA"
import NAVI from "../projects/NAVI"
import SYRAH from "../projects/SYRAH"
import DECANTE from "../projects/DECANTE"
import MCB from "../projects/MCB"
import NBNC from "../projects/NBNC"
import VIF from "../projects/VIF"
import CARTEDESVINS from "../projects/CDV"
import VERRELEMONDE from "../projects/VLM"

import { AuthContext } from '../../../Context/AuthContext'

export default function Slider(  ) {
    const [slideIndex, setSlideIndex] = useContext(AuthContext);
    
    const nextSlide = () => {
        slideIndex !== dataSlider.length ? setSlideIndex(slideIndex + 1) : setSlideIndex(1)
    }
    const prevSlide = () => {
        slideIndex !== 1 ? setSlideIndex(slideIndex - 1) : setSlideIndex(dataSlider.length)
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const [ isNameOpen, setIsNameOpen ] = useState("");
    const openDescription = () => {
        setIsNameOpen(isNameOpen === "" ? "active" : "");
    }

    return(
        <>
            {dataSlider.map((obj, index) => {
                return (
                    <article key={obj.id} className={slideIndex === index + 1 ? "slide active" : "slide"} id={obj?.idTag}>
                        <section className="slider-imgs">
                            {obj?.pictures?.map((each, index) => {
                                return(
                                    <article key={index}>
                                        {each.split('.').pop() === "webp" ? 
                                            <img className={`slider-img ${index}`} src={process.env.PUBLIC_URL + each} alt={`Images représentant notre réalisation pour ${obj?.title}`} />
                                        :
                                            <video className={`slider-vdo ${index}`} controls autoPlay muted loop webkit-playsinline="true" playsInline><source src={process.env.PUBLIC_URL + each} type="video/mp4"></source></video>
                                        }       
                                    </article>
                                )
                            })}
                        </section>

                        <section className={`realisation-presentation ${isNameOpen}`} onClick={openDescription}>
                            <h2>{obj.title}<span><img className="realisation-toggle" src={croixToggle} alt="Représentation d'un picto afin de savoir si la section est ouverte ou fermée." /></span></h2>
                            {slideIndex === 1 ? <BRASSERIEDANAIDES /> : null}
                            {slideIndex === 2 ? <DOMAINELOMBARD /> : null}
                            {slideIndex === 3 ? <LAMONGESTINE /> : null}
                            {slideIndex === 4 ? <DISTILLERIERHONE /> : null}
                            {slideIndex === 5 ? <LIONELBRENIER /> : null}
                            {slideIndex === 6 ? <CHATEAUMORILLON /> : null}
                            {slideIndex === 7 ? <AROMO /> : null}
                            {slideIndex === 8 ? <TERRA /> : null}
                            {slideIndex === 9 ? <NAVI /> : null}
                            {slideIndex === 10 ? <SYRAH /> : null}
                            {slideIndex === 11 ? <DECANTE /> : null}
                            {slideIndex === 12 ? <MCB /> : null}
                            {slideIndex === 13 ? <NBNC /> : null}
                            {slideIndex === 14 ? <VIF /> : null}
                            {slideIndex === 15 ? <CARTEDESVINS /> : null}
                            {slideIndex === 16 ? <VERRELEMONDE /> : null}
                        </section>
                    </article>
                )
            })}
            <section className="arianne">
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <section className="container-dots">
                    {Array.from({length: 16}).map((item, index) => (
                        <div key={index} onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                    ))}
                </section>
            </section>
        </>
    )
}