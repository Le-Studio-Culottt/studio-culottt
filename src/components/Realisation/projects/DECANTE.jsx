import { Link } from "react-router-dom";
import { HashLink as LinkAnchor } from 'react-router-hash-link';
export default function DECANTE() {
    return(
        <>  
        <div className="content-realisation">
            <section>
                <p>Secteur : Vin</p>
                <p>Savoir-faire : <Link to="/savoir/direction-artistique">Direction artistique</Link>, <Link to="/savoir/print-communication">Edition</Link>, <Link to="/savoir/logo-identite-visuelle">logo</Link>, <Link to="/savoir/logo-identite-visuelle">branding</Link>, <Link to="/savoir/lettres">typographie</Link>, <Link to="/savoir/illustration">illustration</Link>, <LinkAnchor to="/savoir/site-internet#anchor-site">site vitrine</LinkAnchor>, <LinkAnchor to="/savoir/lettres#anchor-maquettage">maquette</LinkAnchor>.</p>
                <p><a href="https://www.ledecante.fr/">Site ⇲</a></p>
            </section>
            <section>
                <p>Le Guide papier :</p>
                <p>Guide du Vin sur Lyon, le Décanté est à l'initiative de Vitis Vinifera, association d'œnologie. Avec comme moto : Le vin n'est pas réservé à un club élitiste et est à la portée de tous et à toutes !</p>
                <p>Ce guide présente à tous un produit important dans notre patrimoine & à notre héritage : le vin.</p>
                <p>Il référencie Bars et Cavistes sur Lyon. Un chapître sur la pédagœnologie, les cartes des vignobles français, des accords mets & vins, un lexique ainsi qu'un espace note.</p>
                <p>Le Décanté est le premier guide du vin sur Lyon, il devait se démarquer pour atteindre la cible et se faire une place. La solution : le travail de la bichromie avec une couleur flash, des illustrations minimalistes & variées, des schémas clairs, des cartographies précises, des sélections de vins à des prix abordables.</p>
                <p>Le Site Internet :</p>
                <p>Le site quant à lui présente en premier lieu le guide papier avec une partie de l'équipe et des chiffres clefs.</p>
                <p>Dans un second temps, il a une partie blog alimentée par des rédacteurs étudiants et professionnels. Il offre des bases et partage des découvertes et des voyages.</p>
            </section>
        </div>
        </>
    )
}