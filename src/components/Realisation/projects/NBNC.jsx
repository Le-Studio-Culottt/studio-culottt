import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function NBNC() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/print-communication">Edition</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">illustration</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquette</LinkAnchor>.</p>
                <p><a href="https://nibuniconnu.fr/">Site ⇲</a></p>
            </section>
            <section>
                <p>Ni Bu Ni Connu est un web magazine. Donc pour la direction, l'axe est la lisibilité ! Gestion du blog en mode magazine avec les derniers rendez-vous du mois, des reportages avec des largeurs d'articles en mode journal, présentation de l'équipe rédac, une carte de recommandations et un million de connaissances et d'autres surprises à venir, voilà ce que constitue tout ce site.</p>
                <p>Avec ces outils, j'ai créer la palette des blancs cassés et gris chaud utilisés, couplée avec des gris sombre sans aller jusqu'au noir. Pourquoi ? Pour que le contraste soit lisible mais pas agressif et qu'on lise le plus longtemps possible sans avoir mal aux yeux !</p>
                <p>Avec cet effet un peu 'papier' et naturel vient s'agrémenté le rouge bordeau du logo de Ni bu ni connu. Un petit clin d'œil au vin tout en étant discret.</p>
            </section>
        </article>
        </>
    )
}