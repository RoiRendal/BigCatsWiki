// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CatDetail from './pages/CatDetail';
import Quiz from './pages/Quiz';
import AddCat from './pages/AddCat';
import Footer from './components/Footer';

function App() {
  return (
    // CHANGE 1: Font is now 'font-serif'. Background is a classic 'bg-yellow-50' (paper feel).
    // CHANGE 2: Added a 'border-x-4 border-black' container to make it look like a document.
    <div className="min-h-screen bg-yellow-50 font-serif text-black selection:bg-black selection:text-white flex flex-col">
      
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-7xl mx-auto border-x-0 md:border-x-4 border-black bg-white min-h-screen shadow-[8px_0_0_0_rgba(0,0,0,0.2)]">
        <div className="p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat/:id" element={<CatDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/add" element={<AddCat />} />
            <Route path="/edit/:id" element={<AddCat />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
