import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function DDLM() {
    return(
        <>              
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <Link to="/savoir/illustration">illustration</Link>, <Link to="/savoir/illustration">dessin</Link>.</p>
                <p><a href="https://www.lamongestine.com/">Site ⇲</a></p>
            </section>
            <section>
                <p>Au cœur de la région Provence-Verdon, le domaine s’étire sur un long coteau, entouré de forêts. Les cépages sont très variés avec des cépages typiquement méridionaux et des cépages plus septentrionaux. </p>
                <p>La Mongestine joui d’un terroir frais sur une localité chaude, ce qui participe à la création de vin digeste et sans interventions. Leur entreprise est carrée, bienfaite et tout autant authentique que conviviale. La mission a été de faire ressortir leur approche envers la nature, le côté vibrant des vins grâce à un effet visuel qui apporte du grain au fond du site.</p>
                <p>Ajoutez à cela des illustrations faites maison pour donner ce côté croqué des recherches quotidienne et le côté chaleureux apporté par le mélange des polices de caractères : la linéale pour le côté sérieux et technique, la Cooper black pour le côté humain et vivant.</p>
            </section>
        </article>
        </>
    )
}