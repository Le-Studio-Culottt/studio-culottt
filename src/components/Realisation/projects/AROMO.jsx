import { Link } from "react-router-dom";
export default function AROMO() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/communaute">Réseaux sociaux</Link>, <Link to="/savoir/photo">photographie</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">Illustration</Link>, <Link to="/savoir/cartographie-vignoble">cartographie</Link>.</p>
                <p><a href="https://www.instagram.com/aromo_barcave/">Instagram ⇲</a></p>
            </section>
            <section>
                <p>Bar à vin et cave à vin, l’Aromo est une équipe de passionné du monde du vin et de la dégustation. </p>
                <p>Ils ont marqué leur différence en proposant des vins du nouveau monde. Rareté à Lyon, on peut trouver des cépages Californiens, autant que des pépites Chiliennes et des Pinotage Sud-Africains. Autant d’arguments pour faire voyager à l’aide de cartes et à travers de quizz !</p>
            </section>
        </article>
        </>
    )
}