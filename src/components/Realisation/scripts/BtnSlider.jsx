import leftArrow from '../../../assets/Images/img-arrow-left.png'
import rightArrow from '../../../assets/Images/img-arrow-right.png'

export default function BtnSlider({direction, moveSlide}) {
    return (

        <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt={direction === "next" ? "Flèche en direction de la droite" : "Flèche en direction de la gauche"} />
        </button>

    )
}