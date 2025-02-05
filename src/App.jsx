import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ZodiacSigns from './pages/ZodiacSigns';
import DailyHoroscope from './pages/DailyHoroscope';
import BirthChart from './pages/BirthChart';
import Numerology from './pages/Numerology';
import TarotReading from './pages/TarotReading';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zodiac" element={<ZodiacSigns />} />
            <Route path="/horoscope" element={<DailyHoroscope />} />
            <Route path="/birth-chart" element={<BirthChart />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/tarot" element={<TarotReading />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
