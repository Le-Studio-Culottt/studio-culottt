import '../../css/Studio/Team.css';
import imgClaire from "../../assets/Images/img-claire.webp"
import imgTanguy from "../../assets/Images/img-tanguy.webp"
import imgEmma from "../../assets/Images/img-emma.webp"
import TeamCard from "./TeamCard/TeamCard"

export default function Team () {
    
    return(
        <section className="team" id="teamAnchor">
            <h2 className="team-culottes">Les culottés</h2>
            <TeamCard class={"team-claire"} imgSrc={imgClaire} altImgSrc={"Portrait de Claire"} name={"Claire"}>
                <p>Fille des années 90 et femme de rouge. Habillée en 50 nuances de noir comme un hommage à Soulages. Disciple de Silène qui mène à la passion humaine. Passionnée de la bonne chère et de la diversité, autant que mes accents sans en douter. Aime construire des ponts entre les notions qui conduisent aux émotions. Tout nourrit mon ambition.</p>
                <p>Le mieux pour me découvrir c’est de me parler de vive voix.</p>
            </TeamCard>
            <TeamCard class={"team-tanguy"} imgSrc={imgTanguy} altImgSrc={"Portrait de Tanguy"} name={"Tanguy"}>
                <p>Jeune nordiste au quart de siècle, bercé par l’informatique et la nouvelle technologie, ayant étudié la psychologie pour dériver dans le développement web. Nostalgique de la souris à boule et amoureux des jeux-vidéos, je suis un explorateur du digital et du monde numérique, toujours présent pour relever les challenges créatifs ou techniques.</p>
            </TeamCard>
            <TeamCard class={"team-emma"} imgSrc={imgEmma} altImgSrc={"Portrait d'Emma"} name={"Emma"}>
                <p>Bercée dans le beaujolais et enfant de vignerons. Je suis partie très jeune du nid familial étudiée l’art et le design. Combinant savoirs historiques, techniques, et civilisationnels.</p> 
                <p>Désormais ancienne « martin », je poursuis mes études en alternance, fusionnant ainsi mes connaissances à mes origines.</p>
                <p>Que ce soit avec fougue ou grande sagesse, mon travail est d’unir la beauté à la stratégie. D’allier expériences utilisateur et interactivités régient par une noble sensibilité.</p>
            </TeamCard>
        </section>
    )
}