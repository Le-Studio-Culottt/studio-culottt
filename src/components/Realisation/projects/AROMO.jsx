import { Link } from "react-router-dom";
export default function AROMO() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/communaute">Réseaux sociaux</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">Illustration</Link>, <Link to="/savoir/cartographie-vignoble">cartographie</Link>.</p>
                <p><a href="https://www.instagram.com/aromo_barcave/">Instagram ⇲</a></p>
            </section>
            <section>
                <p>Bar à vin et cave à vin, l’Aromo est une équipe de passionné du monde du vin et de la dégustation. Ils ont marqué leur différence en proposant surtout des vins du nouveau monde. Rareté à Lyon, on peut trouver des cépages californiens, autant que des pépites chiliennes et des Pinotage sud-africain. Autant d’argument pour faire découvrir le vin à l’aide de carte pour voyager et de quizz pour animer les réseaux !</p>
            </section>
        </article>
        </>
    )
}