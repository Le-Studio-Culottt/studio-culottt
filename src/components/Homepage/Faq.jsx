import '../../css/Homepage/Faq.css';
import { useEffect } from 'react';
import { HashLink as LinkAnchor } from 'react-router-hash-link';
import croixToggle from "../../assets/Picto/picto-nav-menu-close.webp"

export default function ListFAQ() {
    let currentItem = 4;
    const MoreItems = () => {
        let boxes = [...document.querySelectorAll(".questions ul .question")];
        const btnMoreQuest = document.querySelector(".faq-more")
        const btnBackTop = document.querySelector(".faq-back-start")
        for (let i = currentItem; i < currentItem + 3; i++) {
            boxes[i].style.display = 'block';
        }
        currentItem += 4;
        if(currentItem >= boxes.length){
            btnMoreQuest.style.display = "none";
            btnBackTop.style.display = "block"
        }
    }
    const keyPress = (e) => {
        if(e.key === "Enter"){
            MoreItems()
        }
    }
    useEffect(() => {
        const accordion = document.querySelectorAll(".question")
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function() {
                this.classList.toggle("active")
            })
        }
    })
    
    const objQuestFAQ = {
        alt: "Permet d'indiquer si la case de la réponse est déployée ou non.",
        classLi: "question",
        classSectionTitle: "question-section-title",
        classTitle: "title-question",
        classSectionContent: "question-section-content"
    }

    return (
        <section className="home-faq" id="faq">
            <h2>FAQ</h2>
            <section className="questions">
                <ul>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Pourquoi faire appel à un Studio de Création ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <ul>
                                <li>Faire appel à un studio, une agence de création ou un freelance est un investissement. C'est de l'argent dépensé pour ton image, pour ta visibilité ou même pour faciliter le parcours client. C'est pour des idées ou réaliser des idées de manières propre. Le propre d'un designer d'ailleurs, c'est d'améliorer l'existant ou créer de toute pièce.</li>
                                <li>Pour gagner du temps et avoir une image professionnelle.</li>
                                <li>Tout comme le dirait si bien mon amie Stéphanie Brasdefer (qui vous accompagne pour vos achats et vente de biens) : « Mon service c'est comme le restaurant, t'es pas obligé d'y aller, tu peux te faire à manger chez toi. Mais parfois, le plat que tu veux, tu veux qu'il soit réussi. »</li>
                            </ul>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Pourquoi votre profil (client) nous intéresse ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                        
                            <p>Là, on parle de toi. Tu es vigneron (ou vigneronne), tu es formateur en œnologie, tu as un restaurant, tu es brasseur, tu fermentes des boissons alcoolisés ou non, tu es distillateur, tu vends des bouchons de vin, tu es caviste ect. Nous sommes intéressés ! Pourquoi ? Notre plus-value se trouve dans le côté humain (que tu as aussi) et parce que nous sommes des passionnés du milieu. Quoi de mieux que de faire réparer sa voiture Renault chez Renault ? Travailler avec des personnes passionnées par le produit et le milieu change tout : de notre connaissance et compréhension de ton milieu à notre curiosité d'en apprendre plus. Nous voulons (et croyons) valoriser ce secteur, qui peut paraître précis mais qui reste quand même vaste !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Est-ce qu’un site Internet permet d’augmenter sa popularité/visibilité ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Il est prouvé par Google qu’un site Internet permet d’augmenter sa popularité/visibilité. Plus vous aurez de liens qui redirigent vers votre site, plus Google considérera que votre site est “populaire” et donc, plus Google le mettra en avant. Mais ce n’est pas tout, il y a d’autres particularités sur lesquelles travailler. (voir question suivante)</p>                    
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Y a t-il une différence entre l’art et le design ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Pour te faire simple, ce qui distingue l’art du design c’est l’objectif qui motive leur création. Celui du design est presque toujours commercial : acheter un produit, utiliser un service, visiter un lieu, apprendre certaines informations... Le design est un processus créatif prenant en compte les besoins, les usages et les comportements sociaux et environnementaux. En ce qui concerne l’art, son objectif est la communication d’une idée, d’une opinion, ou d’un sentiment. L’artiste crée une œuvre afin de partager ce qu’il pense avec les autres et afin que ces derniers s’y réfèrent et s’en inspirent.</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Pourquoi faire appel à un Studio Culotté ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                        
                            <p>Doit-on vraiment répondre à cette question ?</p> 
                            <p>Fais nous un coucou !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Comment nous joindre ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                    
                            <p>Le Studio recrute parfois des stagiaires, sur le court ou long terme. N'hésites pas à envoyer ta demande par mail avec book et projets.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Est-ce que nous recrutons ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                        
                            <p>Nous ne recrutons pas pour le moment.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Comment se rencontrer ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                        
                            <p>Rien de plus simple, appelle-nous ! On conviendra d'un lieu.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Où est-ce qu'on se situe ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                    
                            <p>Actuellement nos bureaux sont à Lyon. Pas de mystère, c’est la place rêvée pour goûter, déguster, découvrir et apprendre le monde gustatif.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Est-ce que nous nous déplaçons ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>                        
                            <p>On se déplace plusieurs fois par an pour aller visiter les vignobles ou rencontrer de nouvelles personnes en dehors de Lyon, et c’est toujours un bonheur !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Est-ce qu’on travaille avec d’autres personnes que les vignerons ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Oui, on n'est pas sectaires ! On travaille surtout avec des personnes avec qui on s'entends, tu peux faire le meilleur produit du monde, si t'es pas agréable, il n'y a aucune chance que l'on transmette une image agréable dans les design et que l'on fasse un bon travail. Dans ces cas-là, on refuse, mais c'est quand même rare dans le monde du vin !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Est-ce qu’il y a une boutique liée au Studio ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Oui, nous vendons les side projects, c’est-à-dire ce qui n’est pas une commande client. Comme des polices de caractère et des sérigraphies de vignobles.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce que WordPress ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Wordpress est ce que l’on appelle un CMS, un système de gestion de contenu en anglais. Pratique, libre de droit, WP nous permet, pardon, vous permet de pouvoir gérer votre contenu sans toucher au code. Notre parti c’est de le mettre en place et de faire un design cohérent, mais ensuite ce qui est appréciable, c’est de pouvoir intervenir dans le contenu de manière relativement simple !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’un site « natif » ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Un site natif est un site Internet développé sans outils destinés à aller plus vite (CMS). Nous développons le site du début à la fin, à la main. Le temps de développement est plus long, mais le code est maîtrisé et contrôlé. Un site natif possède le meilleur SEO (accessibilité/performance) possible.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Pourquoi créer un thème WordPress sur mesure ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>    
                            <p>- Nous pouvons évidemment créer un site sur mesure sans l’aide de WordPress. 
                                <span>◦ Nous serons ravis de le faire avec React.JS !</span>
                                <span>◦ Nous pouvons aussi les faire en HTML/CSS/Javascript Vanilla.</span></p>
                            <p>- Faire un thème sur-mesure nous offre plus de possibilités et nous permet de charger que ce qui est nécessaire. Cela offre donc un meilleur chargement</p>
                            <p>- WordPress fait gagner beaucoup de temps pour la connexion de la plupart des fonctionnalités. Temps gagné = facture diminuée ! (par rapport à un site créer de toute pièce)</p>
                            <p>- WordPress est un CMS extrêmement souple et est un véritable lego pour les développeurs. En moyenne, 30% des sites du monde entier sont réalisés sous WordPress, preuve que c'est pas mal non ?</p>
                            <p>- En matière de blog, WordPress a un système plutôt fluide et pas encore égale ou dépassé : Les bases de données sont nos alliées !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu'est-ce qu'un cache navigateur ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Un cache navigateur est un “instrument” appartenant au navigateur qui lui permet de sauvegarder des données nécessaires à la consultation d’un site web, sous forme de fichiers temporaires. Les deux intérêts principaux sont de réduire la consommation de la bande passante et un chargement beaucoup plus rapide à la prochaine consultation du site Internet.</p>                    
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Quelles sont les fonctionnalités que vous pouvez développer ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>De nos jours, le développement des fonctionnalités est très vaste. La seule vraie limite reste l’imagination et le temps à consacrer.</p>                    
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Comment peut-on avoir de la visibilité sur Internet ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>La visibilité dépend de plusieurs facteurs. C’est un mélange de performances, d’accessibilités, de SEO (mots-clés), de plan marketing et de concurrence. Il s’agit d’un gros travail sur chacun de ces sujets.</p>                    
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Les interactions web, c’est quoi ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>    
                            <p>- C'est tout ce qui peut bouger, changer de couleur ou de tête en fonction de toi, l'utilisateur. En fonction du scroll par exemple ou simplement d'un clic.</p> 
                            <p>- Ça peut-être quand on bouge avec la souris, quand on scrolle, quand on passe sur un objet, quand on clique, quand on se déplace sur une page (parallaxe), changement de couleur, animation en boucle, etc.
                                <span>◦ La parallaxe est un mouvement asynchrone d’objets sur la page. Un objet web peut-être tout contenu possible, que ce soit un bloc texte, une image, une vidéo. C’est assez pratique et dynamique et on évoque plusieurs messages : une révélation, un défilement, un mouvement, une multitude d’élément, etc.</span></p>  
                            <p>- Certaines interactions prennent du temps de développement et d’autres beaucoup beaucoup de temps de dev.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Un site est constitué de quoi ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Un site c’est rien de plus que du contenu texte et photo (voir vidéo) qui est mis en page en version mobile et ordinateur. C’est tout ? me diras-tu : c’est la matière première. Notre intervention requiert de la hiérarchisation, du design, de la cohérence, une traduction en code, une maîtrise de la css, des règles typographiques, etc. Mais cette matière première est très importante et nous aidons au ‘squelette’ du discours grâce au plan de site et nous pouvons réaliser les photos ou vous conseiller un confrère !</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Comment vendre sur internet ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>    
                            <p>- La visibilité et parler de soi est la première chose à entreprendre. La réclame est faite ainsi, c’est la présence dans l’esprit qui marque les esprits. Une belle image de marque donne envie, envie de participer au projet, de rejoindre l’aventure sur des idéaux et une vision.</p> 
                            <p>- Le mieux est d’avoir un pilier central qui va pouvoir répondre aux questions généralistes : j’ai nommé le site internet ! Un site internet c’est un lieu accessible partout et par tous. Il va regrouper les informations que tes clients demandent régulièrement et annoncer la couleur de ton travail. Son identité va refléter beaucoup de toi car aujourd’hui, tout le monde ne lit pas tout. Ce n'est pas pour autant qu’un site doit comporter peu de texte. Car si des personnes un peu pressées ne vont pas prendre le temps de tout lire, encore beaucoup d’autres humains lisent tout ainsi que les robots Google. </p>  
                            <p>- Le site a une temporalité de vie plutôt longue dans le monde de la communication, même si c’est bien de le réviser et le mettre à jour régulièrement. </p>
                            <p>- Pour une temporalité plus courte (hebdomadaire ou quotidienne) interviennent alors les réseaux sociaux. C’est pour capter le ‘moment’. Les réseaux offrent une possibilité de dingue pour parler de sa marque, de ce que tu es, comment tu es, pour l’apprécier ! Que ce soient des moments de vie, un idéal ou renvoyer une pensée, cela se partage facilement sur une communauté toujours grandissante (si l’on fait bien les choses 😉). Tu connais déjà l’adage, mais souvent une image vaut mille mots, alors tu comprends pourquoi il faut soigner son image selon l’axe souhaité pour faire transparaître les bonnes idées.</p>
                            <p>- Les réseaux vont offrir une circulation de la marque en deux temps avec le site internet (qu’il soit vitrine ou e-commerce) : le site répondra aux questions de fonds, aux sujets à lire et à relire, alors que les réseaux sociaux pourront partager les nouveautés et booster cette circulation.</p>
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu'est-ce qu'un sitemap ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>C’est tout simplement un plan de site représentant l’architecture générale d’un site web. Il permet de hiérarchiser les ressources et les contenus, afin d’aider les moteurs de recherche (Google, Firefox, Safari, Opera, …) à retrouver l’ensemble des pages à indexer. La conduite d’un sitemap est une stratégie de référencement naturel d’un site internet.</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’une maquette ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Dans notre milieu, une maquette est un prototype se concentrant principalement sur l’aspect graphique d’un livre, ou d’un site internet. Elle permet ainsi de visualiser l’ensemble du projet, et de faire des validations progressives. Une maquette est forcément conçue en amont de la réalisation finale.</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’un print ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Un print est un support visuel de l’identité et de la communication d’une marque qui a pour vocation d’être imprimé : affiches, cartes de visite, flyers, plaquettes…</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’une étiquette ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Le coût d’une étiquette dépend d’abord du temps de création. Effectivement, la création d’étiquette demande un travail personnalisé, le temps de travail n’est donc pas standardisé, et peut varier d’un projet à l’autre. Le coût d’une étiquette dépend aussi d’autres modalités tel que le type de support, le type d’impression, les finitions…</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’une direction artistique ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>C’est un préalable indispensable à la création graphique. Une direction artistique prend en compte tes besoins, et tes attentes. Et elle matérialise sous une forme visuelle ton concept, tes valeurs, et tes messages que tu souhaites véhiculer pour ta marque.</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’une identité visuelle et une charte graphique ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Une identité visuelle, comme son nom l’indique, c’est l’ensemble des éléments visuels représentant l’identité de ta marque : logo, typographie, couleurs, pictogrammes, icônes.... Celle-ci est conventionnée dans une charte graphique, un outil regroupant l’ensemble des directives pour son utilisation. Elle permet ainsi de garder une cohérence graphique tout le long du projet, et est un moyen indispensable de communiquer entre un créatif et un développeur, par exemple.</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Comment faites vous pour concevoir une identité visuelle ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>On détaille tout cela dans notre page dédiée aux étapes de conception. 😉</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est-ce qu’un logo ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>C’est un ensemble d’éléments graphiques et/ou textuelles, qui permet d’identifier visuellement une marque, une entreprise, une association, un service, un événement,… Il incarne une image, et des valeurs. Il permet de séduire, capter l’attention, de fédérer et ainsi valoriser l’image de ta marque.</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Faîtes vous des illustrations ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Selon tes besoins et bien entendu à ta demande, on peut réaliser des illustrations servant à accompagner par l’image un récit, du texte informatif, une idée, une étiquette, un poster…</p> 
                        </article>
                    </li>
                    <li className={objQuestFAQ.classLi}>
                        <article className={objQuestFAQ.classSectionTitle}>
                            <h3 className={objQuestFAQ.classTitle}>Qu’est le SEO Friendly ?</h3>
                            <span><img src={croixToggle} alt={objQuestFAQ.alt} /></span>
                        </article>
                        <article className={objQuestFAQ.classSectionContent}>
                            <p>Un site internet SEO Friendly est un site conçu pour répondre aux préconisations des moteurs de recherche (Google, Firefox, Safari, Opéra), pour améliorer la visibilité de celui-ci. Nous faisons attention à la structure du site, à l’agencement des éléments, aux titres, aux boutons et à l’accessibilité. Pour gagner de la performance, du côté technique on fait en sorte que le chargement de ton site ne soit pas lourd, et de ce fait, que les images soient toujours optimisées. Nous nous positionnons en tant que conseiller du SEO, et non en tant qu’expert.</p> 
                        </article>
                    </li>
                </ul>
                <a role="button" onKeyDown={keyPress} title="Permet d'appuyer sur 'Entrée' de votre clavier pour pouvoir accéder aux autres questions de la FAQ." tabIndex="0"><p onClick={MoreItems} className="faq-more">Voir d'autres questions <span>↓</span></p></a>
                <LinkAnchor to="#faq" title="Permet de retourner à la première question de la FAQ"><p className="faq-back-start"><span>↓</span>Retour en haut</p></LinkAnchor>
            </section>
        </section>
    )
}