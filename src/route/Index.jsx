import { useEffect, } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
//import MainLayout from "@/layout1/MainLayout";

/* ===================== FRONTEND ===================== */
import Home from "@/pages1/Home"; 
//import Home from './pages/Home';
import GamesPage from "@/pages1/GamesPage";
import Play from "@/pages1/Play";
import TrailerPage from "@/pages1/TrailerPage";
import Blog from "@/pages1/Blog";
import VideoPage from "@/pages1/VideoPage";
import MyAccount from "@/pages1/MyAccount";
import Wallet from "@/pages1/Wallet";
import LeaderboardPage from "@/pages1/LeaderboardPage";
import NotFound from "@/pages1/NotFound";

/* ===== FRONTEND LAYOUT (HEADER + FOOTER) ===== */
//import MainLayout from "@/layout1/MainLayout";

/* ===================== AUTH ===================== */
import Login from "@/pages/auth/Login";
import SignIn from "@/pages1/auth/SignIn";

/* ===================== ADMIN ===================== */
import Layout from "@/layout/Index";
import ThemeProvider from "@/layout/provider/Theme";
import Homepage from "@/pages/Homepage";
import TriviaClash from "@/pages/others/TriviaClash";
import MegaQuiz from "@/pages/others/MegaQuiz";
import PuzzleHero from "@/pages/others/PuzzleHero";
import Subscribers from "@/pages/others/Subscribers";
import BillingTransactions from "@/pages/others/BillingTransactions";
import Sales from "@/pages/Sales";
import Analytics from "@/pages/Analytics";
import Blank from "@/pages/others/Blank";
import Faq from "@/pages/others/Faq";
import Regularv1 from "@/pages/others/Regular-1";
import Regularv2 from "@/pages/others/Regular-2";
import Terms from "@/pages/others/Terms";

/* ===================== FORMS ===================== */
import CreateTrandingGame from "@/pages/form/CreateTrandingGame";
import CreateRacingGame from "@/pages/form/CreateRacingGame";
import CreateReleaseGame from "@/pages/form/CreateReleaseGame";
import CreateMindMiningGame from "@/pages/form/CreateMindMiningGame";
import CreateExclusiveGame from "@/pages/form/CreateExclusiveGame";
import CreateTrailer from "@/pages/form/CreateTrailer";
import CreateVideo from "@/pages/form/CreateVideo";
import MainLayout from "../layout1/Mainlayout";
import ProtectedRoute from "../components/protectedroute/Protectedroute";

/* ===================== SCROLL TO TOP ===================== */
const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};


const Router = () => {
 

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>

        
         <Route
            path="/"
            element={
              <MainLayout />
            }
          >
            <Route index element={<Home />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/play" element={<Play />} />
            <Route path="/trailer" element={<TrailerPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />

          
          <Route element={<ThemeProvider />}>
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute/>}>
              <Route path="/admin"   element={<Homepage />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/_blank" element={<Blank />} />

              <Route path="/trivia-clash" element={<TriviaClash />} />
              <Route path="/mega-quiz" element={<MegaQuiz />} />
              <Route path="/puzzle-hero" element={<PuzzleHero />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route
                path="/billing-transactions"
                element={<BillingTransactions />}
              />
              </Route>

              
              <Route path="/create-tranding-game" element={<CreateTrandingGame />} />
              <Route path="/create-racing-game" element={<CreateRacingGame />} />
              <Route path="/create-release-games" element={<CreateReleaseGame />} />
              <Route
                path="/create-mind-mining-games"
                element={<CreateMindMiningGame />}
              />
              <Route
                path="/create-exclusive-games"
                element={<CreateExclusiveGame />}
              />
              <Route path="/create-trailer" element={<CreateTrailer />} />
              <Route path="/create-video" element={<CreateVideo />} />

              {/* ----- STATIC ----- */}
              <Route path="/pages/terms-policy" element={<Terms />} />
              <Route path="/pages/faq" element={<Faq />} />
              <Route path="/pages/regular-v1" element={<Regularv1 />} />
              <Route path="/pages/regular-v2" element={<Regularv2 />} />
            </Route>
          </Route>

         
          <Route path="*" element={<NotFound />} />

        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
