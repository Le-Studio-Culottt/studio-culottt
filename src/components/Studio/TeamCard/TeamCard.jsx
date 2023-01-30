import '../../../css/Studio/TeamCard.css';
export default function TeamCard(props) {
    return(
        <>
            <article className={props.class}>
                <div className="cardWrapper">
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <span className="card-placement"></span>
                    <img className="team-portrait" src={props.imgSrc} alt={props.altImgSrc} />
                    <div className="textureImage"></div>
                </div>
                <h2>{props.name}</h2>
                {props.children}
            </article>  
        </>
    )
}