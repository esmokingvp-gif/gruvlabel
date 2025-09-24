import React from 'react';
import { Artist } from '../types';
// MODIFICADO: Adicionado Youtube, FileText e Instagram
import { ArrowLeft, ChevronDown, Music, Play, Youtube, FileText, Instagram, MoreHorizontal, SkipBack, SkipForward, Pause, Plus } from 'lucide-react';

interface DjDetailPageProps {
  artist: Artist;
  onBack: () => void;
}

const DjHeader: React.FC<{onBack: () => void}> = ({onBack}) => {
    // ... (código do header sem alterações)
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
              <button onClick={() => scrollToSection('videos')} className="hover:text-cyan-400 transition-colors">VÍDEOS</button>
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
    <div className="relative">
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
        <button onClick={scrollToMusic} className="absolute bottom-10 z-10 animate-bounce">
            <ChevronDown size={36} />
        </button>
      </section>

      <section id="musicas" className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-black mb-12 text-cyan-400">MÚSICAS</h2>
          
          {/* MODIFICADO: Adicionados os novos botões de links aqui */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-5 rounded-full hover:bg-green-600 transition-colors transform hover:scale-105">
              <Music size={18} /> Spotify
            </a>
            <a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-5 rounded-full hover:bg-red-700 transition-colors transform hover:scale-105">
              <Youtube size={18} /> YouTube
            </a>
             <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-600 text-white font-bold py-2 px-5 rounded-full hover:bg-pink-700 transition-colors transform hover:scale-105">
              <Instagram size={18} /> Instagram
            </a>
            <a href={artist.socials.pressKit} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 border border-cyan-400 text-cyan-400 font-bold py-2 px-5 rounded-full hover:bg-white/20 transition-colors transform hover:scale-105">
              <FileText size={18} /> Press Kit
            </a>
          </div>

          <div className="bg-[#181818] rounded-xl p-6 text-left shadow-2xl card-glow border border-gray-800">
             {/* ... (restante do código do player de música sem alterações) ... */}
          </div>
        </div>
      </section>
      
      {/* ... (Restante do arquivo DjDetailPage.tsx sem alterações) ... */}
      <section id="videos" className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl font-black mb-12 text-cyan-400">VÍDEOS</h2>
            <div className="space-y-6">
                {artist.videos.map(video => (
                    <a href={video.url} key={video.id} className="block bg-[#1A1A1A] rounded-lg overflow-hidden flex items-center gap-4 p-4 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 card-glow">
                        <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover rounded"/>
                        <p className="font-semibold text-lg text-left">{video.title}</p>
                    </a>
                ))}
            </div>
        </div>
      </section>

      <a href="#" className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors transform hover:scale-105 shadow-lg shadow-green-500/30 z-40">
        CONTRATE
      </a>
    </div>
  );
};

export default DjDetailPage;
