import { Link } from "react-router-dom";
export default function VLM() {
    return(
        <>  
        <article className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">illustration</Link>, <Link to="/savoir/lettres">lettrage</Link>.</p>
            </section>
            <section>
                <p>À l'occasion de leur salon annuel, Aromo (bar et caviste sur Lyon) a fait appel à moi pour la conception de leur affiche évènementielle ainsi que la déclinaison pour les réseaux sociaux.</p>
                <p>Ce lettering a été créé selon leur charte graphique, en utilisant leurs couleurs et avec un esprit luxe et riche. Le salon invitant des vignerons ou représentants hors France, l'esprit du voyage est assez présent.</p>
                <p>Chaque année on garde ce lettrage et on change le décor, toujours art déco !</p>
                <p>Ce salon se déroule sur Lyon et est une opportunité pour découvrir et rencontrer des acteurs du vin du monde entier.</p>
            </section>
        </article>
        </>
    )
}