import { useParams, Link } from 'react-router-dom';
import { cats } from '../data/cats';

function CatDetail() {
    // 1. Get the "id" from the URL (e.g., 'tiger')
    const { id } = useParams();

    // 2. Find the specific cat the component needs in the data array
    const cat = cats.find((c) => c.id === id);

    // 3. Sooo... what if the user types /cat/dinosaur?
    if (!cat) {
        return <div className="text-center text-2xl mt-10">😿 The cat isn't here!</div>;
    }

    return (
      /* One Parent Element ONLY */
      
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-6 text-orange-600 hover:underline font-medium">
          &larr; Back to Gallery
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        
          {/* Hero Image */}
          <div className="h-64 md:h-96 w-full relative">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-linear-to-t from-black/70 to-transparent w-full p-6 pt-20">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{cat.name}</h1>
                  <p className="text-stone-200 italic text-xl">{cat.scientificName}</p>
              </div>
          </div>

          {/* Content Layout: 2 Columns on Desktop, 1 on Mobile */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
            {/* Left: Main Description (Takes up 2 columns space) */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-stone-800">About</h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                  {cat.description}
              </p>
              <p className="text-stone-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Right: Info Box (Takes up 1 column space) */}
            <div className="bg-stone-50 p-6 rounded-xl h-fit border border-stone-100">
              <h3 className="font-bold text-stone-400 uppercase tracking-widest text-sm mb-4">Vital Stats</h3>
              <ul className="space-y-3">
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                      <span>Lifespan</span>
                      <span className="font-semibold">{cat.stats.lifespan}</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                      <span>Speed</span>
                      <span className="font-semibold">{cat.stats.speed}</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                      <span>Weight</span>
                      <span className="font-semibold">{cat.stats.weight}</span>
                  </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
}

export default CatDetail;
