import '../../css/Homepage/Homepage.css';
import '../../css/Homepage/LightThemeHomepage.css';
import { Resize } from "../../components/Resize/Resize"
import Canvas from '../../components/Homepage/Canvas'
import Realisations from '../../components/Homepage/Realisations'
import FAQ from '../../components/Homepage/Faq'

export default function Homepage () {
  const {windowSize} = Resize();
  return (
    <>
      <main className={windowSize.innerWidth < 1201 ? "" : "desk"}>
        <Canvas />
        <h2 className="home-description">Nous sommes au service des acteurs de la vigne, du vin & des artisans de la boisson fermentée.</h2>
        <Realisations />
        <FAQ />
      </main>
    </>
  );
}