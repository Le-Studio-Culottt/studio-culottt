import '../../css/Homepage/Canvas.css';
import { Resize } from "../Resize/Resize"
import CanvasScratch from "./Canvas/CanvasScratch"
import imgScracth from "../../assets/Icon/icon_scratch_homepage.webp"

export default function Canvas () {
  const {windowSize} = Resize();
  return (
    <section className="home-canvas">
      <article className="canvas">
          <img src={imgScracth} className="canvas-logo-scratch" alt="Représentation d'un doigt pouvant gratter cette partie de l'écran." />
          {windowSize.innerWidth < 1201 ?
              <CanvasScratch id="scratch" width="350" height="350" />
          :
              <CanvasScratch id="scratch" width="500" height="500" />
          }
      </article>
      <h1 className="home-title">Le Studio qui enrichit l'image des vignerons</h1>
    </section>
  )
}