import { Link } from "react-router-dom";
export default function CDV() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">illustration</Link>, <Link to="/savoir/cartographie-vignoble">cartographie</Link>.</p>
            </section>
            <section>
                <p>Avoir une carte de vignobles, c'est une manière de rendre honneur à ces terres. C'est aussi un très bon outil d'apprentissage.</p>
                <p>Aujourd'hui sorties en deux éditions, avec Le Beaujolais et La Bourgogne, ces cartes ont été sérigraphiées pour un rendu des couleurs et des aplats parfaits. Ce sont des œuvres à part entière, réalisées en trois couleurs, dans un format 50x70cm et dans une quantité limitée.</p>
                <p>Ces cartes ont été sérigraphiés en 50x70cm, tu peux en <a href="https://boutique.le-studio-culotte.com/">acheter une ici !</a></p>
            </section>
        </article>
        </>
    )
}