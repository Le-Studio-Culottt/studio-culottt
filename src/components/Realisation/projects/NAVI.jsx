import { Link } from "react-router-dom";
export default function NAVI() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Restaurant</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>.</p>
            </section>
            <section>
                <p>Navigli est d’abord un quartier de Milan, mais quand le concept d’Aperitivo débarque à Paris, c’est ce nom emblématique de ce savoir vivre qui a été choisi.</p>
                <p>Incorporer un verre de vin à la célèbre cathédrale de Milan était donc de mise. Toute la DA réside dans ce combo typographique de Belles Lettres Italiennes alliées de la fougue d’une police de signature, aussi vive et sûre que l’équipe.</p>
            </section>
        </article>
        </>
    )
}