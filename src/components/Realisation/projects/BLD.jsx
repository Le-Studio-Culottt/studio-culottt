import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function BLD() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Bière craft</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>, <Link to="/savoir/habillage-bouteille">étiquette</Link>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <Link to="/savoir/photo">photographie</Link>, <Link to="/savoir/lettres">typographie</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <LinkAnchor to="/savoir/logo-identite-visuelle#anchor-perception">pictogrammes</LinkAnchor>.</p>
                <p><a title="Redirection vers le site de la Brasserie les Danaïdes." rel="noreferrer" target="_blank" href="https://brasserie-lesdanaides.fr/">Site ⇲ </a></p>
            </section>
            <section>
                <p>L'entreprise la Brasserie les Danaïdes a choisi ce nom car ils utilisent la méthode soléra, méthode de mouvement perpétuel pour obtenir des brassins qualitatifs et réguliers. Comme ils le disent : « ils sont condamnnés à remplir leur tonneau à l'infini », comme <a href="https://fr.wikipedia.org/wiki/Dana%C3%AFdes#:~:text=Les%20Dana%C3%AFdes%20(en%20grec%20ancien,fils%20de%20son%20fr%C3%A8re%20%C3%89gyptos">les Danaïdes</a> (Filles de Danaos).</p>
                <p>La particularité —et signature, de cette brasserie est l'utilisation de levures saison, dites levures asséchantes car elles transforment tous les sucres.</p>
                <p>De ce mouvement infini et de ce travail microbiotique est né le design de cette amphore pour pictogramme du logo et de ce travail typographique pour 'Les Danaides' avec une ligature N-A-I caractéristique.</p>
                <p>Le travail de la trame sous différentes échelles symbolise le vivant et ces levures qui avancent coute que coute. À tel point qu'elles pourraient même déborder sur l'étiquette.</p>
                <p>Les choix de cette brasserie sont millimétrés et fluides, il y a la transparence sur tous les qualificatifs de la bière afin d'être sûr dde ce qu'on achète et d'en apprendre aussi un peu plus chaque jour. Le choix des polices et leur mise en page se veut donc carrée, ordonnée pour apporter du contraste au vivant et au mouvement.</p>
            </section>
        </article>
        </>
    )
}