import '../../css/Savoir-faire/Savoir-faire.css';
import { useState } from "react";
import ListSavoir from "./Savoir/ListSavoir.jsx"
import searchIcon from "../../assets/Picto/picto-search.svg"

export default function Savoir() {
    const [inputText, setInputText] = useState("");
    const [ errorInput , setErrorInput] = useState(false);
    const inputLower = (e) => {
        let lower = e.target.value.toLowerCase();
        if(lower.match("^[A-zÀ-ú]*$") != null){
            setInputText(lower);
            setErrorInput(false)
        } else {
            setErrorInput(true)
        }
    };

    return (
        <section className="savoir-faire">
            <p>Tu peux filtrer un mot clef ici :</p>
            <div className="searchbar">
                <img src={searchIcon} alt="Icône représentant une loupe concernant la recherche" />
                <input type="search" placeholder="Rechercher" onChange={inputLower} />
            </div>
            {errorInput && <p>Un caractère spécial est présent. Merci de le retirer.</p>}

            <ListSavoir input={inputText} />
        </section>
    )
}