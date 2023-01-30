import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function LB() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <Link to="/savoir/illustration">Illustration</Link>, <Link to="/savoir/photo">Photographie</Link>.</p>
                <p><a href="https://domainelionelbrenier.fr/">Site ⇲</a></p>
            </section>
            <section>
                <p>Le Domaine Lionel Brenier cultive des cépages oubliés et fait des vins droits et ciselés.</p>
                <p>En partant de cépages méconnus jusqu’aux plus usités de la Drôme, Lionel réinvesti ce territoire car ces cépages ont beaucoup de propriétés intéressantes aujourd’hui — au-delà d’obtenir des goûts différents. La DA se compose alors comme les carnets de recherche d’antan, avec linéature de cahier et croquis d’étude. Le logo a été travaillé comme une gravure des anciens dictionnaire et associée à une typo aux empattements très vif, tout comme ses vins. L’animation mise en place sur le site met en avant les valeurs du domaine. Notre but, évoquer l’héritage, la mémoire et le souvenir en utilisant des flous sur les textes. Le domaine cultive la mémoire paysanne de la Drôme, en mettant en avant les cépages anciens et locaux.</p>
            </section>
        </article>
        </>
    )
}