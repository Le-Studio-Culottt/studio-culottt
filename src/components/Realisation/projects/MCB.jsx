import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function MCB() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/print-communication">Edition</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">illustration</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquette</LinkAnchor>.</p>
            </section>
            <section>
                <p>Le premier ouvrage de la rédaction de Ni Bu Ni Connu : « Mieux comprendre le (vin) bio » (BBD Editions) est sorti ! C’est toujours une joie immense de voir un projet aboutir, qui plus est dans un objet physique, tangible.</p>
                <p>Ce livre s'adresse aux passionnés et aux professionnels du vin. Cavistes, agents commerciaux, distributeurs ou communiquant, rentrez dans l'intimité du vin bio. Ses origines, ses bénéfices, ses limites, les produits utilisés ou encore ses préjugés, vous en saurez un peu plus sur cette production d'avenir. Des « gros-mots » comme agro-écologie, biodynamie et méthodes de vinification plus précises seront abordés. Ce livre est accessible tout en rentrant dans des détails qui répondront à de nombreuses questions clients (ou même personnelle).</p>
                <p>Ouvrage co-écrit par l’équipe de Ni bu ni connu avec Willy Kiezer, Helene Savoye et Mademoiselle Jaja.</p>
            </section>
        </article>
        </>
    )
}