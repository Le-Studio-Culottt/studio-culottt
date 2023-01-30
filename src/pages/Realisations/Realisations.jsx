import "../../css/Realisation/RealisationMain.css"
import { Resize } from "../../components/Resize/Resize"
import Slider from '../../components/Realisation/scripts/Slider'

export default function RealisationMain() {
    const {windowSize} = Resize();
    return(
        <>
            <main className={windowSize.innerWidth < 1201 ? "realisations" : "realisations desk"}>
                <Slider />
            </main>
        </>
    )
}