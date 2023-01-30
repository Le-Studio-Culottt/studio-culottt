import '../../css/Studio/Letter.css';
import { useState } from "react"
import PictoPlus from "../../assets/Picto/picto-plus-letter.png"

export default function Letter () {
    const [ setLetter, setLetterOpen ] = useState("close");
    const toggleLetter = () => {
        setLetterOpen(setLetter === "close" ? "open" : "close");
    }

    return (
        <section className="letter" id="letterAnchor">
            <h2>Ceci est une lettre ouverte, vas-tu pouvoir tout lire ?</h2>
            {setLetter === "close" ? <div className="letter-clic"><span></span><p>Clic</p></div> : null}
            <article onClick={toggleLetter} className={`thisLetter ${setLetter}`}>
                <span className="letter-close"><img src={PictoPlus} alt="Pictogramme représentant une croix" /></span>
                <p>Vous pouvez ne pas comprendre la multitude de compétences que l’on peut trouver au Studio. Seulement, tout entrepreneur ou chef d’entreprise l’entendra : Nous avons un million de choses à faire et c’est tant mieux. Parfois on se souvient de nous pour seulement la création d’étiquette ou design de site internet. Alors qu’en communication, on fait beaucoup plus :</p>
                <ul>
                    <li>Exprimer une idée passe souvent 'par la main'. Comme les rédacteurs le font le plus souvent, le lien direct entre le papier et le cerveau est toujours un peu plus court que celui entre le cerveau et l’ordinateur (ou tablette et portable). C’est prouvé !</li>
                    <li>Le dessin est une des forces du Studio, cela nous offre une palette de compétences allant du picto minimaliste au dessin détaillé à la plume</li>
                    <li>La réalisation d’une étiquette demande plusieurs savoir-faire. On est pas 'juste' graphistes. Une étiquette c’est de l’orfèvrerie : Un tout petit support où il faut placer de plus en plus d’informations. Il faut pouvoir réaliser un visuel sexy. Pouvoir avoir du recul sur le marché et ce que les consommateurs peuvent attendre d’un packaging selon la cible. Pouvoir avoir des connaissances en impressions pour conseiller sur les limites techniques de ce medium. Connaître les différentes techniques d’impressions pour te proposer le meilleur. Créer une mise en page lisible, ni trop petite, ni trop grande. Créer une étiquette c’est passionnant, c’est comme créer une maquette d’un livre : il y a une échelle humaine à prendre en compte. La bouteille sera tenue dans la main, le visuel sera lu à telle distance. Il pourra avoir un papier spécial pour le touché ; C’est vraiment le premier message entre le consommateur et le travail du vigneron (par exemple).</li>
                    <a href="https://www.persee.fr/doc/colan_0336-1500_1999_num_121_1_2949#:~:text=L'%C3%A9tiquette%20n'est%20pas,la%20promesse%20de%20son%20excellence" title="Redirection vers le site Internet persee.fr concernant l'étiquette de vin"><li className="letter-side">◦ L'étiquette de vin : analyse d'un objet ordinaire.</li></a>
                    <li>Réaliser un site, ça prend plusieurs mois. On a un travail d’architecture pour placer les éléments et sections. Selon le budget on adore être créatif en digital et chercher une interaction adaptée au propos. Toujours la technique au service du design ! On pense global et tous nos choix sont justifiés. Du placement d’une barre de recherche au choix d’une police de caractère. On est tellement passionnés que l’on a créé notre propre thème. Pourquoi ? Vous offrir de meilleures statistiques de chargement. Pour pouvoir régir l’appel ou non de certains éléments dynamiques. Afin d’être le plus 'SEO friendly' possible, d’être impeccable sur la structure et qu’il n’y ai rien de chargé qui ne soit pas nécessaire. Ça demande un côté designer qui comprends le monde du web pour prévoir des maquettes créatives qui plaisent au client et qui respecte les bonnes pratiques du web (il n’y a pas que le responsive : il y a bien plus !). Ça demande aussi une bonne pratique et organisation pour faire communiquer tous les éléments et les régir en code. On passe par de la conception, de la création, de la mise en page, dessin de picto parfois, prise de photos occasionnellement, du code, des tests, du SEO basique, de la structure sémantique, de l’intégration, du code et encore du code (du front-end et un peu de back-end).</li>
                    <li className="letter-side">◦ Ce que notre thème comprend (possiblement) :</li>
                    <li className="letter-square">Un accès au back-office ;</li>
                    <li className="letter-square">La possibilité de changer les textes et images sur le site ;</li>
                    <li className="letter-square">La gestion d'un blog ;</li>
                    <li className="letter-square">Un moteur de recherche interne ;</li>
                    <li className="letter-square">La gestion d'une boutique en ligne.</li>
                    <li className="letter-side">◦ Nous nous attachons aussi à installer et paramétrer :</li>
                    <li className="letter-square">Un système de cache pour la rapidité de chargement ;</li>
                    <li className="letter-square">Un pare-feu pour la sécurité et éviter de nombreuses attaques ;</li>
                    <li className="letter-square">Un système de back-up en ligne (efficace que si le serveur ne brûle pas).</li>
                    <li>Dans la communication, il y a aussi la gestion des réseaux sociaux. C’est très grisant quand on nous fait confiance pour ce format ephémère, mais où on mise beaucoup sur l’image et le ton. On adore les photos au téléphone, mais la qualité du reflexe en manuel : ça change tout ! Donc oui ça prend un peu plus de temps, de prise de vue et de retouche, mais à la sortie tu es plus fier de ta comm.</li>
                    <li>Évidemment il y a la création de marque, avec le logo et la charte graphique. C’est énervant tous ces graphistes qui demandent un logo et une charte graphique haha. Oui, c’est important de définir des cadres : pour la consistance. Que tu sois créatif ou non, si on ne te donne pas de cadre, l’image de ta boîte peut changer tous les deux mois ou moins, c’est humain. C’est pour ça que l’on demande quelles sont les règles déjà établies et sur quels sentiers c’est ok d’aller. Notre volonté c’est que tu sois perçu comme une belle entreprise certes, mais la consistance est aussi importante pour marquer les esprits. « Marquer » les esprits. Tu avais déjà fait gaffe à ce terme ? C’est pour ça que ta marque doit te ressembler et avoir de la cohérence entre les différents supports (papiers ou digitaux).</li>
                    <li>Des interactions pourquoi faire ? Pour servir votre propos et créer un site immersif, unique et dont on se souvient. On travaille pour que tes clients se rappelle de toi ! C’est dit un peu rapidement mais la porte des possibles s’arrête à l’imagination et ce que vous pouvez investir pour la réalisation de ton projet. Ces animations et interactions vont apporter dynamisme d’une part, mais ils servent surtout un message, une histoire qui appuie sur les définitions de ta marque. Car tu le sais bien, une image vaut mille mots.</li>
                    <li className="letter-side">◦ Le mieux dans tout ça, c’est que chaque défi est hyper passionnant et vient stimuler une partie différente du cerveau. Peut-être qu’on est accros à trouver des solutions haha</li>                
                </ul>
                <h3>Ici au Studio, avant d'être un business on est.</h3>
                <p>C’est à dire que notre recherche profonde est le savoir, la maîtrise et l’apprentissage. C’est ce qui nous anime.</p>
                <p>Quoi de mieux que de créer un message fort, un design adapté à la demande client ? En gros d’écouter le client, enfin ; de t’écouter toi. T’accompagner dans une démarche de création pour ce que tu exprimes - avec des mots ou des idées - soit affuté, affiné et réalisé dans les règles de l’art et de la technique. Nous on est là pour conseiller, car nous connaissons notre marché. On est tellement passionnés que la veille c’est nuit et jour.</p>
                <p>Nous, on est issus de la campagne et on admire toujours autant les choses qui poussent, même depuis notre bureau de citadins lyonnais. On respecte le travail de nos clients comme nos clients respectent le nôtre. Travailler avec un Studio comme le nôtre, c’est un échange, une relation. Je t’en prie, si tu souhaites juste un exécutant, pose une annonce Facebook.</p>
                <p>On est travailleurs et d’ailleurs, on fait toujours notre max pour que tu sois satisfait tout en nous procurant du plaisir. On ne se bat pas pour <span className='letter-italic'>« changer des vies avec un poster »</span>. On travaille pour t’amener toi, plus proche de tes clients grâce à la communication (graphique, digitale, etc.). On travaille avec des gens humains, car personne ne va en mourir de pas avoir eu la livraison d’un visuel ou d’un site à temps (sur des dates subjectives). Il faut se rendre compte que la création, c’est comme chez Cantillon : « le temps ne respecte pas ce qu’il se fait sans lui. » (Paul Morand).</p>
                <p>N'Crois pas qu’on procrastine, réaliser un site ou une création dans les règles de l’art prend du temps et de l’expérience. Mais après tout, on est un service. C’n’est pas comme une assurance habitation, tu peux le faire toi-même sans nous payer. Rien n’est obligatoire. Nous on est juste là pour te soulager du temps et t’offrir du professionnalisme, c’est toi qui vois.</p>
                <p>Construire un business, c’est pouvoir créer une valeur. C’est t’apporter de la valeur. L’être humain n’est-il pas voué à continuellement apprendre sur lui-même et apprendre des autres ? Nous sommes la moyenne des gens que l’on côtoie. Et c’est pour ça que l’on s’octroi le droit de refuser des clients. C’est parce que les personnes avec qui je travaille, vont prendre un peu de moi et moi un peu d’eux. Si nous faisons aussi bien notre travail, c’est parce qu’on est heureux de faire ce que l’on fait. Pourquoi certaines personnes changent de vie ? C’est pour être plus heureux. Ici on a construit notre équilibre et en plus on se sent utiles. Quand on a les retours clients, ça nous conforte dans ce que l’on fait et comment on le fait. Pas besoin d’être docteur en science cognitive pour savoir que faire quelque chose que l’on aime sera toujours mieux fait que quelque chose d’imposé</p>
            </article>
      </section>
    )
}