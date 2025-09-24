import React from 'react';
import { Artist } from '../types';
import { Instagram, Music, Play, ArrowUpRight, Calendar, LineChart, Send, MonitorPlay } from 'lucide-react';

interface MainPageProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
}

// NOVO: Componente reutilizável para o logo
const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src="/logos/gruvlabel-logo.svg" // <-- ATENÇÃO: Mude aqui se o nome do seu arquivo for diferente
    alt="Grüv Label Logo" 
    className={className} 
  />
);

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* MODIFICADO: Substituímos o h1 pelo componente Logo */}
        <Logo className="h-7 w-auto" />
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">INÍCIO</button>
          <button onClick={() => scrollToSection('artistas')} className="hover:text-cyan-400 transition-colors">ARTISTAS</button>
          <button onClick={() => scrollToSection('sobre')} className="hover:text-cyan-400 transition-colors">SOBRE</button>
        </nav>
        <button onClick={() => scrollToSection('contato')} className="bg-cyan-400 text-black font-bold py-2 px-5 rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,242,234,0.5)]">
          CONTRATE
        </button>
      </div>
    </header>
  );
};

// ... (O restante dos seus componentes como ArtistCard e ServiceCard não precisam de alteração)
const ArtistCard: React.FC<{ artist: Artist; onSelectArtist: (artist: Artist) => void }> = ({ artist, onSelectArtist }) => {
  return (
    <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 card-glow">
      <img src={artist.image} alt={artist.name} className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"/>
      <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
      <p className="text-sm text-gray-400 mb-1">{artist.stats.monthlyListeners}</p>
      <p className="text-sm text-gray-400 mb-1">{artist.stats.subscribers}</p>
      <p className="text-sm text-gray-400 mb-4">{artist.stats.views}</p>
      <div className="flex space-x-4 mb-6">
        <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700/50 rounded-full hover:bg-cyan-400/20 transition-colors"><Instagram size={20}/></a>
        <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700/50 rounded-full hover:bg-cyan-400/20 transition-colors"><Music size={20}/></a>
        <a href={artist.socials.appleMusic} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700/50 rounded-full hover:bg-cyan-400/20 transition-colors"><Play size={20}/></a>
      </div>
      <button onClick={() => onSelectArtist(artist)} className="w-full bg-transparent border border-cyan-400 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 mb-2">
        VER DETALHES
      </button>
       <button onClick={() => onSelectArtist(artist)} className="w-full bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,242,234,0.4)]">
        CONTRATAR {artist.name.toUpperCase().split(' ')[1]}
      </button>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 card-glow">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h4 className="font-semibold">{title}</h4>
    </div>
);


const MainPage: React.FC<MainPageProps> = ({ artists, onSelectArtist }) => {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{backgroundImage: "url('https://i.imgur.com/n6tK5qL.jpeg')", opacity: 0.15}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10"></div>
          <div className="z-20 p-6">
            {/* MODIFICADO: Substituímos o h1 pelo componente Logo */}
            <Logo className="h-24 md:h-28 w-auto mx-auto" />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wider text-white mt-4">AGENCIAMENTO DE ARTISTAS</h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">Contrate os melhores DJs para o seu evento</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <p className="text-3xl font-bold text-cyan-400">19K+</p>
                <p className="text-xs text-gray-500">INSCRITOS</p>
              </div>
              <div className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <p className="text-3xl font-bold text-cyan-400">8M+</p>
                <p className="text-xs text-gray-500">VISUALIZAÇÕES</p>
              </div>
              <div className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <p className="text-3xl font-bold text-cyan-400">232+</p>
                <p className="text-xs text-gray-500">VÍDEOS</p>
              </div>
              <div className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <p className="text-3xl font-bold text-cyan-400">260K+</p>
                <p className="text-xs text-gray-500">OUVINTES/MÊS</p>
              </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="bg-cyan-400 text-black font-bold py-4 px-10 rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,242,234,0.5)]">CONTRATE AGORA</button>
                <button onClick={() => document.getElementById('artistas')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border border-gray-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">NOSSOS ARTISTAS</button>
            </div>
          </div>
        </section>

        <section id="artistas" className="py-24 bg-[#0D0D0D]">
          {/* ... */}
        </section>

        <section id="sobre" className="py-24 bg-[#111111]">
          {/* ... */}
        </section>

        <section id="contato" className="py-24 bg-[#0D0D0D]">
            {/* ... */}
        </section>
      </main>

      <footer className="bg-[#111111] py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
            {/* MODIFICADO: Substituímos o h3 pelo componente Logo */}
            <Logo className="h-8 w-auto mx-auto mb-4" />
            <p className="text-sm mb-4">&copy; 2025 Gruv Label. Todos os direitos reservados.</p>
            <a href="#" className="inline-block p-2 hover:text-cyan-400 transition-colors"><Instagram size={20}/></a>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
