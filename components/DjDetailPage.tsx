import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// CORREÇÃO: A importação foi dividida em duas linhas corretas
import { Artist } from '../types';
import { ARTISTS } from '../constants';
import { ArrowLeft, ChevronDown, FileText, Instagram } from 'lucide-react';

// ... (Ícones SVG e componente Logo permanecem iguais)
const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg /* ... */ > </svg> );
const SpotifyIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg /* ... */ > </svg> );
const Logo: React.FC<{ className?: string }> = ({ className = '' }) => ( <img /* ... */ /> );

// REMOVIDO: A interface DjDetailPageProps não é mais necessária

const DjHeader: React.FC<{onBack: () => void}> = ({onBack}) => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
             <button onClick={onBack} className="bg-black/30 backdrop-blur-sm p-3 rounded-full hover:bg-black/50 transition-colors">
                <ArrowLeft size={20} />
             </button>
             <nav className="flex items-center space-x-4 md:space-x-8 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
              <button onClick={() => scrollToSection('musicas')} className="hover:text-cyan-400 transition-colors text-sm md:text-base">MÚSICA</button>
              <button onClick={() => scrollToSection('visualizers')} className="hover:text-cyan-400 transition-colors text-sm md:text-base">VISUALIZERS</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-cyan-400 transition-colors text-sm md:text-base">SOBRE</button>
            </nav>
            <div></div>
          </div>
        </header>
    );
};


const DjDetailPage: React.FC = () => {
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();
    const artist = ARTISTS.find(a => a.slug === slug);

    const handleBack = () => {
      navigate('/');
      window.scrollTo(0, 0);
    };

    const scrollToMusic = () => {
        document.getElementById('musicas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (!artist) {
      return (
        <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Artista não encontrado</h1>
          <button onClick={handleBack} className="mt-4 text-cyan-400">Voltar para a página inicial</button>
        </div>
      );
    }

  return (
    <div className="relative bg-black">
      <DjHeader onBack={handleBack}/>

      <section className="h-screen w-full relative flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={artist.heroVideo}
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="z-10 p-6 flex flex-col items-center">
            <img 
              src={artist.logoUrl} 
              alt={`Logo de ${artist.name}`} 
              className="max-h-40 md:max-h-56 w-auto" 
            />
            <p className="text-xl md:text-2xl font-semibold text-cyan-400 tracking-widest mt-4">{artist.tagline}</p>
        </div>

        <div className="absolute bottom-28 z-20 flex justify-center items-center gap-3">
          <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors">
            <SpotifyIcon className="w-6 h-6" />
          </a>
          <a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors">
            <YoutubeIcon className="w-6 h-6" />
          </a>
          <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors">
            <Instagram size={24}/>
          </a>
          <a 
            href={artist.socials.pressKit} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sm font-semibold py-3 px-5 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
          >
            <FileText size={20}/>
            <span>Press Kit</span>
          </a>
        </div>

        <button onClick={scrollToMusic} className="absolute bottom-10 z-10 animate-bounce">
            <ChevronDown size={36} />
        </button>
      </section>

      <section id="musicas" className="pt-16 pb-8">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-black mb-8 text-cyan-400">MÚSICAS</h2>
          
          <div className="rounded-2xl border border-gray-800 card-glow overflow-hidden">
            <iframe
              src={artist.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section id="visualizers" className="py-8">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl font-black mb-8 text-cyan-400">VISUALIZERS</h2>
            <div className="aspect-video w-full rounded-2xl border border-gray-800 card-glow overflow-hidden">
              <iframe 
                className="w-full h-full"
                src={artist.youtubeEmbedUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
        </div>
      </section>

      <section id="sobre" className="pt-8 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-black mb-8 text-cyan-400 text-center">SOBRE</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1-3 flex-shrink-0">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full aspect-[3/4] object-cover rounded-2xl border border-gray-800 card-glow"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <p className="text-gray-300 text-lg leading-relaxed">
                {artist.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="fixed bottom-8 right-6 flex items-center gap-3 bg-cyan-400 text-black font-bold py-2 px-5 rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,242,234,0.5)]">
        CONTRATE
      </a>

      <footer className="py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <Logo className="h-14 w-auto mx-auto mb-4" />
            <p className="text-sm mb-4">&copy; 2025 Gruv Label. Todos os direitos reservados.</p>
            <a href="#" className="inline-block p-2 hover:text-cyan-400 transition-colors"><Instagram size={20}/></a>
        </div>
      </footer>
    </div>
  );
};

export default DjDetailPage;