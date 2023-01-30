import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function CM() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <Link to="/savoir/habillage-bouteille">Étiquette</Link>, <Link to="/savoir/illustration">Illustration</Link>, <Link to="/savoir/cartographie-vignoble">cartographie</Link>.</p>
                <p><a href="https://www.chateau-morillon.com/">Site ⇲</a></p>
            </section>
            <section>
                <p>Pour le Château Morillon deux partie ont été réalisés, d’abord le design des étiquettes de leurs nouvelles cuvées, avec un travail illustratif inspiré des estampes et assez minimalistes. Le Château Morillon est pionniers du bio dans sa région et leurs vins sont fruité et léger pour des Bordeaux. Le Morillon étant l’oiseau symbolique du domaine et celui-ci travaillant avec la nature avec bosquet et végétation, les étiquettes reprennent un oiseau de la région qui correspond au cépage de manière poétique. Le site réalisé dans les teintes du blayais et de la biodiversité préservée se veut léger et doux.</p>
            </section>
        </article>
        </>
    )
}