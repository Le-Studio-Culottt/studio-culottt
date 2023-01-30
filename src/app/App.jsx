import '../css/App/App.css';
import '../css/App/ThemeLightApp.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

import Homepage from '../pages/Homepage/Homepage'
import Realisations from '../pages/Realisations/Realisations';
import Savoir from "../pages/Savoir-faire/Savoir"
import Creation from "../pages/Creation/Creation"
import Studio from "../pages/Studio/Studio"
import Mentions from "../pages/Mentions/Mentions"
import CGV from "../pages/CGV/CGV"
import Sitemap from "../pages/Sitemap/Sitemap"

import SavoirDirectionArtistique from "../components/Savoir-faire/subpages/DirectionArtistique"
import SavoirSiteInternetDifferent from "../components/Savoir-faire/subpages/SiteInternetDifferent"
import SavoirLogoIdentiteVisuelle from "../components/Savoir-faire/subpages/LogoIdentiteVisuelle"
import SavoirHabillageBouteille from "../components/Savoir-faire/subpages/HabillageBouteille"
import SavoirIllustration from "../components/Savoir-faire/subpages/Illustration"
import SavoirCartographieVignoble from "../components/Savoir-faire/subpages/CartographieVignoble"
import SavoirPrintCommunication from "../components/Savoir-faire/subpages/PrintCommunication"
import SavoirLettres from "../components/Savoir-faire/subpages/Lettres"
import SavoirCommunaute from "../components/Savoir-faire/subpages/Communaute"
import SavoirUXUI from "../components/Savoir-faire/subpages/UXUI"
import SavoirPhoto from "../components/Savoir-faire/subpages/Photo"
import SavoirBiereVin from "../components/Savoir-faire/subpages/BiereVin"

export default function App () {
  const [slideIndex, setSlideIndex] = useState(1);

  return (
    <>
      <Header />
      <Navigation />
      <AuthContext.Provider value={[slideIndex, setSlideIndex]}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/realisation" element={<Realisations />} />
          <Route exact path="/savoir" element={<Savoir />} />
          <Route exact path="/savoir/direction-artistique" element={<SavoirDirectionArtistique />} />
          <Route exact path="/savoir/site-internet" element={<SavoirSiteInternetDifferent />} />
          <Route exact path="/savoir/logo-identite-visuelle" element={<SavoirLogoIdentiteVisuelle />} />
          <Route exact path="/savoir/habillage-bouteille" element={<SavoirHabillageBouteille />} />
          <Route exact path="/savoir/illustration" element={<SavoirIllustration />} />
          <Route exact path="/savoir/cartographie-vignoble" element={<SavoirCartographieVignoble />} />
          <Route exact path="/savoir/print-communication" element={<SavoirPrintCommunication />} />
          <Route exact path="/savoir/lettres" element={<SavoirLettres />} />
          <Route exact path="/savoir/communaute" element={<SavoirCommunaute />} />
          <Route exact path="/savoir/ux-ui" element={<SavoirUXUI />} />
          <Route exact path="/savoir/photo" element={<SavoirPhoto />} />
          <Route exact path="/savoir/biere-vin" element={<SavoirBiereVin />} />
          <Route exact path="/creation" element={<Creation />} />
          <Route exact path="/studio" element={<Studio />} />
          <Route exact path="/mentions-legales" element={<Mentions />} />
          <Route exact path="/cgv" element={<CGV />} />
          <Route exact path="/sitemap" element={<Sitemap />} />
        </Routes>
      </AuthContext.Provider>
      <Footer />
    </>
  );
}
