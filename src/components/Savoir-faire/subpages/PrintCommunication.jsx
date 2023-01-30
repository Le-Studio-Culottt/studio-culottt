import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Print from "../../../assets/Images/img-print-decante.webp"
import Print2 from "../../../assets/Images/img-phyllotaxie.webp"

export default function PrintCommunication() {
    const {windowSize} = Resize();

    const [, setSlideIndex] = useContext(AuthContext);
    const modifyIndex = index => {
        setSlideIndex(index)
    }
    const switchIndex = (e) => {
        const targetName = e.target.classList
        switch(true) {
            default: 
                console.error(`⚠️ La class '${targetName}' ne correspond pas à la 'case' conçue. ⚠️`)
                break;
            case targetName.contains('vlm'):
                modifyIndex(16)
                break;
            case targetName.contains('danaides'): 
                modifyIndex(1)
                break;
            case targetName.contains('lombard'):
                modifyIndex(2)
                break;
            case targetName.contains('cdv'):
                modifyIndex(15)
                break;
            case targetName.contains('ddr'):
                modifyIndex(4)
                break;
            case targetName.contains('lb'):
                modifyIndex(5)
                break;
            case targetName.contains('navigli'):
                modifyIndex(9)
                break;
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
            case targetName.contains('edition'):
                modifyIndex(12)
                break;
            case targetName.contains('vif'):
                modifyIndex(14)
                break;
        } 
    }

    return(
        <>  
            <main className={windowSize.innerWidth <= 1201 ? "subs" : "subs desk"}>
                <h1>Le print en communication</h1>
                <h2>Des objets tellement vivants</h2>
                <p>Dans une communication, le « print » regroupe l’ensemble des supports imprimés, comme les catalogues, flyers, affiches, plaquettes commerciales, brochures, dépliants, cartes postales, cartes d’affaire.
                <br />Ces déclinaisons ne sont pas obligatoires, mais elles ont parfois d’énormes avantages à utiliser. Au niveau identitaire, comme au niveau papier. Sans devenir un extrême —comme Patrick Bateman dans American Psycho, le papier et son toucher ont une importance capitale : de manière implicite, ils permettent de faire passer un nouveau message ! Car il n’y a pas que les mots pour faire passer un message, les sensations du papier, les odeurs, viennent s’additionner au textes et aux images.</p>

                <img src={Print} alt="Représentation d'un print montrant le livre du Décanté" />

                <h2 id="anchor-human">Un lien fort avec l'humain</h2>           
                <p>La conception de ces supports, c’est tout une histoire, on justifie un format, on choisit les polices de caractères, etc. Le travail de l’identité est là pour nous aider à garder la ligne directrice de l’entreprise et de ce que l’on veut transmettre.
                <br />Par exemple pour le choix d’un livre, son format peut être justifié par rapport à son utilisation, mais aussi par tout autre mesure, c’est ce qui a été réalisé pour le Décanté par exemple. Il y a un lien très fort entre toutes les dimensions : autour de la zone de texte, l’espace pour placer ses pouces va déterminer un lien entre l’humain et l’ouvrage. Il y a même la tenue de l’objet lui-même qui dépend du papier, de son poids. Tout ces liens sont à prendre en compte dans la conception.
                <br />Toujours en lien avec la nature, les mesures du nombre d’or sont la base de la conception en imprimerie avec les Bibles de Gutenberg. Ce nombre d’or s’observe et se retrouve dans la nature selon comment elle pousse, parfois, en suivant la suite de Fibonacci (en lien avec le nombre d’or) par exemple. Étude déployée dans la PhyLlotaxie du livre.
                <br />Aussi nous donnerons la priorité à utiliser les ressources à bon escient avec des imprimeurs eco-responsables. Un fait tiré d’une étude datant de 2019 : « le bois utilisé pour la production en Europe est renouvelable et provient de forêts gérées de manière responsable ». Alors nous mettrons tout en œuvre pour aller plus loin, dans la gestion des encres et de l’utilisation.</p>

                <img src={Print2} alt="Représentation d'un print montrant le livre La Phyllotaxie du livre." />
                
                <p id="anchor-format">La mise au format et l’adaptabilité est maître mot de notre métier. Rien que pour la partie imprimée (mais ça marche aussi dans le digital), il est primordial de pouvoir adapter un visuel à sa taille de destination, que ce soit d’une brochure à un flyer ou d’un kakémono à une bâche ou pour une couverture de magazine : les informations présentées n’auront pas la même disposition ni les mêmes tailles. Savoir nuancer le poids de ces ‘objets’, c’est notre métier !</p>

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation de Verre le Monde." to="/realisation"><li onClick={switchIndex} className="vlm">Verre le Monde</li></Link>
                    <Link title="Redirection vers la réalisation de la Brasserie les Danaïdes." to="/realisation"><li onClick={switchIndex} className="danaides">Brasserie les Danaïdes</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lombard." to="/realisation"><li onClick={switchIndex} className="lombard">Domaine Lombard</li></Link>
                    <Link title="Redirection vers la réalisation de la Carte des vins." to="/realisation"><li onClick={switchIndex} className="cdv">Carte des vins</li></Link>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation de Navigli." to="/realisation"><li onClick={switchIndex} className="navigli">Navigli</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation de Mieux Comprendre le (vin) Bio." to="/realisation"><li onClick={switchIndex} className="edition">Mieux Comprendre le (vin) bio</li></Link>
                    <Link title="Redirection vers la réalisation de Vif agence de vins." to="/realisation"><li onClick={switchIndex} className="vif">Vif Agence de vins</li></Link>
                </ul>
            </main>
        </>
    )
}