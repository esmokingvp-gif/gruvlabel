import React from 'react';
import { Artist } from '../types';
import { ArrowLeft, ChevronDown, FileText, Instagram } from 'lucide-react';

// Ícone personalizado para o YouTube
const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

// CORRIGIDO: O código SVG do ícone do Spotify foi substituído
const SpotifyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.162 14.226c-.24.398-.756.517-1.154.277-2.327-1.417-5.28-1.73-8.714-.943-.458.104-.91-.188-.016-.646.104-.458.558-.75.646-.015 3.855-.86 7.03.53 9.66 2.18.398.24.517.756.277 1.154zm1.38-2.668c-.29.477-.878.62-1.355.33-2.61-1.58-6.52-2.05-10.01-1.115-.55.15-.15-.36-.3-.9.15-.55.7-.9.9-.3 3.9-.94 8.22-.41 11.2 1.48.476.29.62.875.33 1.355zM17.8 8.91c-.34.59-.14 1.35.45 1.69 3.24 1.86 8.4 1.62 12.28-.94.66-.25 1.32.14 1.57.8.25.66-.14 1.32-.8 1.57-4.4.25-10.01.5-13.8-1.92-.59-.34-1.35-.14-1.69.45z"/>
    </svg>
);

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src="/logos/gruvlabel-logo.svg" 
    alt="Grüv Label Logo" 
    className={className} 
  />
);

interface DjDetailPageProps {
  artist: Artist;
  onBack: () => void;
}

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
             <nav className="hidden md:flex items-center space-x-8 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
              <button onClick={() => scrollToSection('musicas')} className="hover:text-cyan-400 transition-colors">MÚSICA</button>
              <button onClick={() => scrollToSection('visualizers')} className="hover:text-cyan-400 transition-colors">VISUALIZERS</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-cyan-400 transition-colors">SOBRE</button>
            </nav>
            <div></div>
          </div>
        </header>
    );
};


const DjDetailPage: React.FC<DjDetailPageProps> = ({ artist, onBack }) => {
    const scrollToMusic = () => {
        document.getElementById('musicas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

  return (
    <div className="relative bg-black">
      <DjHeader onBack={onBack}/>

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

      <section id="musicas" className="py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-black mb-12 text-cyan-400">MÚSICAS</h2>
          
          <div className="rounded-2xl border border-gray-800 card-glow overflow-hidden">
            <iframe
              src={artist.spotifyEmbedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section id="visualizers" className="py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl font-black mb-12 text-cyan-400">VISUALIZERS</h2>
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

      <section id="sobre" className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-black mb-12 text-cyan-400 text-center">SOBRE</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0">
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

      <a href="#" className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors transform hover:scale-105 shadow-lg shadow-green-500/30 z-40">
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