import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function VIF() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">illustration</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquette</LinkAnchor>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>.</p>
            </section>
            <section>
                <p>Vif Agence de vins… On pourrait presque dire, la fougue de la jeunesse et la sagesse de l’expérience. Ils maîtrisent complètement leur sujet et sont pourtant bien ancrés dans notre monde contemporain et son ‘lifestyle’. Le logo est ‘bien assis’, carré comme leur travail et en même temps vertigineux et clair. Il est comme gravé dans la pierre comme la minéralité de leurs gammes de vin, minutieusement ciselé pour lui apporter de l’équilibre.</p>
                <p>Le Parcours Libre de Vif Agence de vin, c’est un salon pour découvrir les cuvées de vignerons français et engagés sélectionnés par une team de choc : Hélène & Thomas.</p>
                <p>C’est le rendez-vous annuel, il existe aussi d’autre évènement avec des invités surprise nommé pop-up. À raison de 5 ou 6 évènement dans l’année, cette agence de vin se démarque par la présentation de ses clients lors de ceux-ci.</p>
            </section>
        </article>
        </>
    )
}