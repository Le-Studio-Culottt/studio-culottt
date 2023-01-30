import { Link } from "react-router-dom";
export default function SYRAH() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/habillage-bouteille">étiquette</Link>, <Link to="/savoir/illustration">illustration</Link>.</p>
            </section>
            <section>
                <p>La Syrah petite Serine, une étiquette qui définit un vin épicé, fruité, fougueux on en redemande !</p>
                <p>Ça a été un honneur de travailler pour Benjamin de BelleCave et d’embellir son projet de lui et ses amis situés dans les coteaux le Boën-sur-Lignon #forez. Cette région si surprenante ! En vin nat qui plus est.</p>
                <p>Cette cuvée ne s’arrête pas là, elle rapporte aussi à l’association Mi Dagblé, qui œuvre à aider les jeunes en difficulté au Togo.</p>
            </section>
        </article>
        </>
    )
}