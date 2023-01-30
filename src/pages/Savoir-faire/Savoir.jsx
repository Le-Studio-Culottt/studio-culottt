import '../../css/Savoir-faire/Savoir.css';
import { Resize } from "../../components/Resize/Resize"
import Savoir from "../../components/Savoir-faire/Savoir"
import Competences from "../../components/Savoir-faire/Competences"

export default function SavoirMain () {
  const {windowSize} = Resize();

  return (
    <>
      <main className={windowSize.innerWidth < 1201 ? "savoir" : "savoir desk"}>
        <h1>Au Studio Culotté, on sait faire tout ça :</h1>
        <h2>On t'explique un peu plus en détail notre métier.</h2>

        <Savoir />

        <Competences />
      </main>
    </>
  );
}