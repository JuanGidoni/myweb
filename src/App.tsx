import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./ui/pages/MainPage";
import NotFoundPage from "./ui/pages/NotFoundPage";
import AsideInfo from "./ui/components/AsideInfo/AsideInfo";
import ResumePage from "./ui/pages/ResumePage";
import Footer from "./ui/components/Footer/Footer";
import BackToTop from "./ui/components/BackToTop/BackToTop";

const App = () => {
  return (
    <main>
      <Router>
        <BackToTop />
        <AsideInfo />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer text="Juan Ignacio Gidoni" />
        </div>
      </Router>
    </main>
  );
};

export default App;
