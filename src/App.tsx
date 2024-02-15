import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './ui/components/Navbar/Navbar';
import MainPage from './ui/pages/MainPage';
import NotFoundPage from './ui/pages/NotFoundPage';
import AsideInfo from './ui/components/AsideInfo/AsideInfo';
import ResumePage from './ui/pages/ResumePage';

const App = () => {
    return (
        <main>
            <Router>
                <AsideInfo />
                <div className="main-content">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        {/* Add more routes as needed */}
                        <Route path="/resume" element={<ResumePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </Router>
        </main >
    );
};

export default App