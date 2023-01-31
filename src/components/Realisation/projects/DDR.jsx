import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function DDR() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Distillerie</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquettage</LinkAnchor>, <Link to="/savoir/site-internet">site internet</Link>, <LinkAnchor to="/savoir/site-internet#anchor-site">site e-commerce</LinkAnchor>.</p>
                <p><a href="https://www.distilleriedurhone.com/">Site ⇲</a></p>
            </section>
            <section>
                <p>La Distillerie du Rhône travaille seulement avec des produits locaux et de manière artisanale. Ancrée dans le bassin rhodanien, leur logo réuni tous ces éléments de la région, en plus des plantes, alambic et ville de Lyon irriguée par leurs breuvages. Il existe une identité générale, celle de la distillerie avec des belles lettres de noblesse contrastées par la typo du logo qui va évoquer l’époque romaine et l’authenticité.</p>
                <p>Ce logo pourrait être gravé dans la pierre, solide, impactant et à la fois raffiné. Ensuite chaque cuvée possède son univers tout en se voulant frais et reconnaissable. Leurs produits sont riches en saveurs et parfums, exprimé par les couleurs et les illustrations qui font légion.</p>
            </section>
        </article>
        </>
    )
}