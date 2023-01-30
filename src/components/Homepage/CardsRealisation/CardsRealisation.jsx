import { Link } from "react-router-dom";
export default function CardsRealisation ({ title, image, redirect, onClick, className }) {
    return(
        <Link to={redirect} onClick={onClick} title={`Redirection vers ${title}.`}>
            <article className={className}>
                <img src={process.env.PUBLIC_URL + image} alt={title}  className={className}/>
                <h2 className={className}>{title}</h2>
            </article>
        </Link>
    )
}