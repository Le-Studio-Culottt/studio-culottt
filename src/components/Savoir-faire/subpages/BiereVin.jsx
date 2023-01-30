import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"

export default function DirectionArtistique() {
    const {windowSize} = Resize();

    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Bières & vins</h1>
                <h2>Le combat éternel ?</h2>
                <p>Nous connaissons tous cette personne qui ne jure que par la team bière ou la team vin… Et vraiment, au Studio Culotté on ne comprend pas. C’est être sourd à tout un monde, réduire un univers à un procédé de fabrication ou à une matière première.
                <br />Une question de palais ? Pas de problème, mais ne sectarisons pas : Il y a énormément de ponts à faire entre ces deux milieux. Tant a discuter au niveau levure, temps de fabrication et aussi en élevage. C’est d’autant de palettes gustatives à découvrir, à aimer, à abhorrer, à défendre… enfin bref, à expérimenter et vivre.
                <br />Non, plutôt qu’une seule ramification, c’est l’amour des belles choses que l’on vise. C’est pour ça que c’est une passion, c’est parce que l’on retrouve autant de vivant dans une belle quille de vin nature que dans une bière craft.</p>

                <h2>Trinquer le canon et la pression</h2>           
                <p>Ces produits existent seulement grâce à l’Humain qui nous partage son travail. C’est son échange avec la nature, à un moment, qu’il va mettre en bouteille.
                <br />Au studio, on accorde une importance toute particulière à ces métiers, que l’on va porter aux nues. Notre mission est d’élever leur image à la hauteur de notre perception, pour qu’ils soient beaux comme des astres.</p>
            </main>
        </>
    )
}