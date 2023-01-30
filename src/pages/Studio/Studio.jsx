import '../../css/Studio/StudioMain.css';
import { Resize } from "../../components/Resize/Resize"
import Letter from "../../components/Studio/Letter"
import Team from "../../components/Studio/Team"
import Rewards from "../../components/Studio/Rewards"

export default function StudioMain () {
  const {windowSize} = Resize();

  return(
      <main className={windowSize.innerWidth < 1201 ? "studio" : "studio desk"} id="footer">
          <h1>Le studio</h1>
          <h2>Un savoir-faire allié d'un savoir-être</h2>
          <p className="intro">Le Studio Culotté veut se dépasser avec ses clients. Ici, c’est un peu comme la Loire : c’est « Tout sauf l’ennui ». Agence digitale 360 spécialisée dans le secteur du vins & spiritueux</p>
          
          <div className="shape"></div>
          <Letter />
          <div className="shape second"></div>
          <Team />
          <div className="shape third"></div>
          <Rewards />
      </main>
  )
}