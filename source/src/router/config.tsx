import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AboutPage from "../pages/about/page";

import LeistungenPage from "../pages/leistungen/page";
import PreisePage from "../pages/preise/page";
import StandortePage from "../pages/standorte/page";
import ReferenzenPage from "../pages/referenzen/page";
import KontaktPage from "../pages/kontakt/page";
import AgbPage from "../pages/agb/page";
import DatenschutzPage from "../pages/datenschutz/page";
import ImpressumPage from "../pages/impressum/page";
import WiderrufsrechtPage from "../pages/widerrufsrecht/page";
import WiderrufFormPage from "../pages/widerruf/page";
import BlogPage from "../pages/blog/page";
import ChiptuningKosten2026Page from "../pages/blog/chiptuning-kosten-2026/page";
import FrankfurtAmMainPage from "../pages/standorte/frankfurt-am-main/page";
import OffenbachAmMainPage from "../pages/standorte/offenbach-am-main/page";
import EcoTuningPage from "../pages/eco-tuning/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/uber-uns",
    element: <AboutPage />,
  },
  {
    path: "/leistungen",
    element: <LeistungenPage />,
  },
  {
    path: "/preise",
    element: <PreisePage />,
  },
  {
    path: "/standorte",
    element: <StandortePage />,
  },
  {
    path: "/referenzen",
    element: <ReferenzenPage />,
  },
  {
    path: "/kontakt",
    element: <KontaktPage />,
  },
  {
    path: "/impressum",
    element: <ImpressumPage />,
  },
  {
    path: "/datenschutz",
    element: <DatenschutzPage />,
  },
  {
    path: "/agb",
    element: <AgbPage />,
  },
  {
    path: "/widerrufsrecht",
    element: <WiderrufsrechtPage />,
  },
  {
    path: "/widerruf",
    element: <WiderrufFormPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/chiptuning-kosten-2026",
    element: <ChiptuningKosten2026Page />,
  },
  {
    path: "/chiptuning-frankfurt-am-main",
    element: <FrankfurtAmMainPage />,
  },
  {
    path: "/chiptuning-offenbach-am-main",
    element: <OffenbachAmMainPage />,
  },
  {
    path: "/eco-tuning",
    element: <EcoTuningPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;