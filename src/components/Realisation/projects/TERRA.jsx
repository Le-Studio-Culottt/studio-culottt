import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function TERRA() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Communication dans le Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <Link to="/savoir/site-internet">Javascript</Link>, <Link to="/savoir/site-internet">HTML</Link>, <Link to="/savoir/site-internet">CSS</Link>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>.</p>
                <p><a href="https://terravineagency.com/">Site ⇲</a></p>
            </section>
            <section>
                <p>Terra Vine est une agence de marketing spécialisée dans le monde du vin. De part une expertise dans le marketing et référencement allié d’une longue expérience dans le monde du vin, Terra Vine dispose d’un logo rappelant la fondatrice, son master of wine et sa passion pour le mouvant. C’est avec une DA ‘orange & teal’, rappellant cette alliance de la terre et de l’eau, qu’apporte chaleur et vie à cette agence de marketing internationale.</p>
                <p>Les choix typographiques se veulent inspirée des font Google, contrastées par une garamond et une scripte qui vont évoquer le professionnalisme et l’humain. Lors de la création de l’identité, nous avons décidé avec Aubrey de mettre en avant des citations notamment dans des polaroïd pour apporter un côté aventureux et des photographies qui font voyager.</p>
                <p>Terra Vine possède une palette de compétence importante et nous sommes les seuls qui peuvent interagir sur le déploiement de ces cinq piliers : Public Relations, SEO, Pay Per Click, Social Marketing et Brand Management. La génèse même de ces sphères interactives.</p>
            </section>
        </article>
        </>
    )
}