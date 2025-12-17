import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-200 border-t-4 border-black text-black py-10 mt-auto font-mono">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4 uppercase underline decoration-2 decoration-black underline-offset-4">
                About This Site
            </h3>
            <p className="text-sm leading-relaxed">
                A static repository of feline knowledge. Optimized for Netscape Navigator and Internet Explorer 4.0.
            </p>
        </div>

        {/* Quick Links */}
        <div>
            <h4 className="font-bold mb-4 uppercase bg-black text-white inline-block px-2">Navigation</h4>
            <ul className="space-y-2 text-sm">
                <li>
                    <Link to="/" className="hover:bg-blue-700 hover:text-white px-1 transition-colors">
                        [Home]
                    </Link>
                </li>
                <li>
                    <Link to="/quiz" className="hover:bg-blue-700 hover:text-white px-1 transition-colors">
                        [Take Quiz]
                    </Link>
                </li>
                <li>
                    <Link to="/add" className="hover:bg-blue-700 hover:text-white px-1 transition-colors">
                        [Add New Entry]
                    </Link>
                </li>
            </ul>
        </div>

        {/* Credits */}
        <div className="text-right flex flex-col justify-end">
            <p className="text-xs font-bold">
                IT314 FINAL PROJECT
            </p>
            <p className="text-xs mt-1">
                &copy; {currentYear} Student Name
            </p>
            <div className="mt-4 flex justify-end gap-2">
                {/* Fake "Best Viewed" Badges */}
                <div className="border border-black px-2 py-1 text-[10px] bg-yellow-200">
                    HTML 5
                </div>
                <div className="border border-black px-2 py-1 text-[10px] bg-blue-200">
                    CSS 3
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
