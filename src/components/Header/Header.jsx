import '../../css/Header/Header.css';
import { Link } from "react-router-dom"
import { Resize } from "../Resize/Resize"
import logo from '../../assets/Logo/logo-mobile-sc.webp'

export default function Header() {
    const {windowSize} = Resize();
    return (
        <>
            {windowSize.innerWidth < 1201 ?
                <header>
                    <Link to="/" title="Redirection vers la page principale du Studio Culotté.">
                        <img src={logo} alt="Logo du Studio Culotté de couleur blanche représentant un 'E' avec un accent en forme d'éclair." />
                    </Link>  
                </header>
            : 
                null
            }
        </>
    );
}
