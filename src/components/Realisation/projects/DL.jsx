import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function DL() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <LinkAnchor to="/savoir/site-internet#anchor-site">site e-commerce</LinkAnchor>, <Link to="/savoir/cartographie-vignoble">cartographie</Link>, <Link to="/savoir/print-communication">kakémono</Link>, <Link to="/savoir/print-communication">dépliant</Link>.</p>
                <p><a href="https://www.domaine-lombard.com/">Site ⇲</a></p>
            </section>
            <section>
                <p>Le domaine Lombard est béni par leurs parcelles qui sont variés, en pleine et pour les plus grandes, en côteaux. La plus méridionale des appellations de la Vallée du Rhône Septentrio, les Brézème du domaine Lombard sont frais et digestes. Leur travail de la vigne au chai est très attentionné et élégant.</p>
                <p>C’est pour cela que les choix typographiques s’inscrivent dans un contraste linéale/Garalde associé à des couleurs claires et chaudes comme les pierres de la région.</p>
                <p>La douceur de la mise en page du site vient accueillir la poésie des étiquettes fleuries et décoratives. L’ensemble est réfléchi pour être discret et charmant.</p>
            </section>
        </article>
        </>
    )
}