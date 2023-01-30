import "../../../css/Savoir-faire/subpages/Subpages.css"
import { Resize } from "../../../components/Resize/Resize"
import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthContext"
import { Link } from "react-router-dom"

import Debourrement from "../../../assets/Images/img-debourrement.webp"
import Feuillaison from "../../../assets/Images/img-feuillaison.webp"
import Floraison from "../../../assets/Images/img-floraison.webp"

export default function Illustration() {
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
            case targetName.contains('mongestine'):
                modifyIndex(3)
                break;
            case targetName.contains('ddr'):
                modifyIndex(4)
                break;
            case targetName.contains('lb'):
                modifyIndex(5)
                break;
            case targetName.contains('aromo'):
                modifyIndex(7)
                break;
            case targetName.contains('syrah'):
                modifyIndex(10)
                break;
            case targetName.contains('decante'):
                modifyIndex(11)
                break;
            case targetName.contains('edition'):
                modifyIndex(12)
                break;
        } 
    }
    return(
        <>  
            <main className={windowSize.innerWidth < 1201 ? "subs" : "subs desk"}>
                <h1>Illustration</h1>
                <h2>Illustration & dessin</h2>
                <p>L'illustration est une représentation graphique d'une idée ou d'un message. Il le met en valeur. À la différence du dessin qui est plus du côté de la technique de représentation, comme une nature morte par exemple. C'est l'exécution que l'on va observer.
                <br />Ils sont liés évidement, car on va se servir de sa technique en dessin pour illustrer. C'est ce qu'on appelle le style ou la patte.</p>

                <img src={Debourrement} alt="Représentation du débourrement." />

                <h2>L'illustration est partout.</h2>           
                <p>Son rôle est d'éclairer sur un texte ou le représenter. Elle s'exprime sur de nombreux supports : à côté d'un article sur un site ou un journal, pour accompagner un message sur les réseaux, sur une publicité, sur une couverture, et bien sûr, sur l'étiquette d'une bouteille, etc.
                <br />Dans la communication, l'illustration est indispensable, et je la valorise beaucoup.</p>

                <img src={Feuillaison} alt="Représentation de la feuillaison." />
                <img src={Floraison} alt="Représentation de la floraison." />

                <h3>Cas d'utilisation</h3>
                <ul>
                    <Link title="Redirection vers la réalisation du Domaine de la Mongestine." to="/realisation"><li onClick={switchIndex} className="mongestine">La Mongestine</li></Link>
                    <Link title="Redirection vers la réalisation de la Distillerie du Rhône." to="/realisation"><li onClick={switchIndex} className="ddr">Distillerie du Rhône</li></Link>
                    <Link title="Redirection vers la réalisation du Domaine Lionel Brenier." to="/realisation"><li onClick={switchIndex} className="lb">Domaine Lionel Brenier</li></Link>
                    <Link title="Redirection vers la réalisation d'Aromo." to="/realisation"><li onClick={switchIndex} className="aromo">Aromo</li></Link>
                    <Link title="Redirection vers la réalisation du Syrah." to="/realisation"><li onClick={switchIndex} className="syrah">Syrah</li></Link>
                    <Link title="Redirection vers la réalisation du Décanté." to="/realisation"><li onClick={switchIndex} className="decante">Le Décanté</li></Link>
                    <Link title="Redirection vers la réalisation de Mieux Comprendre le (vin) Bio." to="/realisation"><li onClick={switchIndex} className="edition">Mieux comprendre le (vin) bio</li></Link>
                </ul>
            </main>
        </>
    )
}