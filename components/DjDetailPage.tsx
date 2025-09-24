
import React from 'react';
import { Artist, Track, Video } from '../types';
import { ArrowLeft, ChevronDown, Music, Play, Video as VideoIcon, User, MoreHorizontal, SkipBack, SkipForward, Pause, Plus } from 'lucide-react';

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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ height: '500px' }}
          src={artist.heroVideo}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="z-10 p-6">
            <h1 className="text-8xl md:text-9xl font-black tracking-tight whitespace-nowrap">{artist.name.split(' ')[1].toLowerCase()}</h1>
            <p className="text-xl md:text-2xl font-semibold text-cyan-400 tracking-widest mt-2">{artist.tagline}</p>
        </div>
        <button onClick={scrollToMusic} className="absolute bottom-10 z-10 animate-bounce">
            <ChevronDown size={36} />
        </button>
      </section>

      <section id="musicas" className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-5xl font-black mb-12 text-cyan-400 text-glow">MÚSICAS</h2>
          <div className="bg-[#181818] rounded-xl p-6 text-left shadow-2xl card-glow border border-gray-800">
             <div className="flex items-start gap-6 mb-6">
                <img src={artist.topTracks[0].coverArt} alt="Album Art" className="w-40 h-40 rounded-lg"/>
                <div className="flex-1 pt-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-3xl font-bold">{artist.topTracks[0].title}</h3>
                            <p className="text-gray-400">{artist.name}</p>
                        </div>
                        <Music size={28} className="text-green-500"/>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <button className="text-white hover:text-cyan-400"><Plus size={24}/></button>
                        <p className="text-xs bg-gray-700 px-2 py-1 rounded">Prévia</p>
                        <button className="text-white hover:text-cyan-400"><MoreHorizontal size={24}/></button>
                    </div>
                </div>
             </div>

             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                    <button className="hidden sm:block text-gray-400 hover:text-white"><SkipBack size={24}/></button>
                    <button className="hidden sm:block text-gray-400 hover:text-white"><SkipForward size={24}/></button>
                </div>
                <button className="bg-green-500 p-4 rounded-full text-black hover:scale-105 transition-transform">
                    <Play size={24} className="fill-current"/>
                </button>
             </div>
             
             <div>
                {artist.topTracks.slice(1).map((track, index) => (
                    <div key={track.id} className="grid grid-cols-[20px_1fr_auto] items-center gap-4 py-2 hover:bg-white/10 rounded-md px-2">
                        <span className="text-gray-400 text-sm">{index + 2}</span>
                        <div className="flex items-center gap-3">
                           {track.explicit && <span className="text-xs bg-gray-600 text-gray-300 font-bold px-1.5 py-0.5 rounded">E</span>}
                           <p>{track.title}</p>
                        </div>
                        <span className="text-gray-400 text-sm">{track.duration}</span>
                    </div>
                ))}
             </div>
          </div>
          <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors transform hover:scale-105">
            VER NO SPOTIFY
          </a>
        </div>
      </section>

      <section id="videos" className="py-24 bg-[#111111]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-5xl font-black mb-12 text-cyan-400 text-glow">VÍDEOS</h2>
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
