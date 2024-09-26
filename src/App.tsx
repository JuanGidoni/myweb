import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./ui/pages/MainPage";
import NotFoundPage from "./ui/pages/NotFoundPage";
import AsideInfo from "./ui/components/AsideInfo/AsideInfo";
import ResumePage from "./ui/pages/ResumePage";
import Footer from "./ui/components/Footer/Footer";

const App = () => {
  return (
    <main>
      <Router>
        <AsideInfo />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer text="Made with ❤️ by Juan Ignacio Gidoni" />
        </div>
      </Router>
    </main>
  );
};

export default App;
