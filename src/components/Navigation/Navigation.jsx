import '../../css/Navigation/Navigation.css';
import '../../css/Navigation/LightThemeNavigation.css';
import { Resize } from "../Resize/Resize"
import MobileNavigation from "./MobileNavigation/MobileNavigation"
import DeskNavigation from "./DeskNavigation/DeskNavigation"

export default function Navigation() {
  const {windowSize} = Resize();
  return (
    <>  
        {windowSize.innerWidth < 1201 ?
            <MobileNavigation />
        :
            <DeskNavigation />
        }
    </>
  );
}