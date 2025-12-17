import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-200 transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* RESPONSIVE LAYOUT */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2">
            🦁 BigCats<span className="text-orange-600">Wiki</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
              <Link 
                  to="/quiz" 
                  className="text-sm font-bold text-orange-600 border border-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
              >
                  Take Quiz
              </Link>
              <Link 
                  to="/add" 
                  className="text-sm font-bold text-stone-600 hover:text-orange-600 transition-colors whitespace-nowrap"
              >
                  + Add Cat
              </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
