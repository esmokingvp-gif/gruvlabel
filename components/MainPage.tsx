import React from 'react';
import { Artist } from '../types';
import { Instagram, Music, Play, ArrowUpRight, Calendar, LineChart, Send, MonitorPlay } from 'lucide-react';

interface MainPageProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
}

// MODIFICADO: Alterado o formato do arquivo de .png para .svg
const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src="/logos/gruvlabel-logo.svg" 
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
        <Logo className="h-10 w-auto" />
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

const ArtistCard: React.FC<{ artist: Artist; onSelectArtist: (artist: Artist) => void }> = ({ artist, onSelectArtist }) => {
  return (
    <div className="group relative aspect-[3/4] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 card-glow">
      <img 
        src={artist.image} 
        alt={artist.name} 
        className={`absolute inset-0 w-full h-full object-cover ${artist.imageAlignment || 'object-center'} transition-transform duration-500 ease-in-out group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
      <div className="relative z-10 flex flex-col h-full p-6 text-center text-white">
        <div className="mt-auto">
          <h3 className="text-3xl font-bold mb-2">{artist.name}</h3>
          <p className="text-sm text-gray-400 mb-1">{artist.stats.monthlyListeners}</p>
          <p className="text-sm text-gray-400 mb-1">{artist.stats.subscribers}</p>
          <p className="text-sm text-gray-400 mb-4">{artist.stats.views}</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700/50 rounded-full hover:bg-cyan-400/20 transition-colors"><Instagram size={20}/></a>
            <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700/50 rounded-full hover:bg-cyan-400/20 transition-colors"><Music size={20}/></a>
            <a href={artist.socials.appleMusic} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700/50 rounded-full hover:bg-cyan-400/20 transition-colors"><Play size={20}/></a>
          </div>
          <div className="space-y-2">
            <button onClick={() => onSelectArtist(artist)} className="w-full bg-transparent border border-cyan-400 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
              VER DETALHES
            </button>
            <button onClick={() => onSelectArtist(artist)} className="w-full bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,242,234,0.4)]">
              CONTRATAR {artist.name.toUpperCase().split(' ')[1]}
            </button>
          </div>
        </div>
      </div>
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
          <video 
            autoPlay
            loop
            muted
            playsInline
            src="/videos/videohero.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* MODIFICADO: Reintroduzido um overlay, desta vez um gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10"></div>
          
          {/* MODIFICADO: Removida a sombra de texto e ajustado o z-index */}
          <div className="relative z-20 p-6">
            <Logo className="h-40 md:h-52 w-auto mx-auto" />
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
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-12 text-cyan-400">NOSSOS ARTISTAS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map(artist => (
                <ArtistCard key={artist.id} artist={artist} onSelectArtist={onSelectArtist} />
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-5xl font-black mb-8 text-cyan-400">SOBRE A GRUV LABEL</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A <span className="text-cyan-400 font-semibold">Gruv Label</span> é uma agência especializada em bookings e agenciamento de artistas.
            </p>
            <p className="text-gray-400 leading-relaxed mb-12">
             Adotamos um modelo 360°, oferecendo um suporte completo que vai desde o fechamento de datas de shows até a gestão de carreira, cuidado com a imagem do artista, assessoria de conteúdo e marketing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ServiceCard icon={<Calendar size={32}/>} title="Fechamento de Shows" />
                <ServiceCard icon={<LineChart size={32}/>} title="Gestão de Carreira" />
                <ServiceCard icon={<Send size={32}/>} title="Marketing Digital" />
                <ServiceCard icon={<MonitorPlay size={32}/>} title="Produção de Conteúdo" />
            </div>
          </div>
        </section>

        <section id="contato" className="py-24 bg-[#0D0D0D]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-black mb-8 text-cyan-400">CONTATO</h2>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#" className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                        <Instagram size={20} /> @gruvlabel
                    </a>
                    <a href="#" className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors duration-300 transform hover:scale-105">
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-[#111111] py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <Logo className="h-12 w-auto mx-auto mb-4" />
            <p className="text-sm mb-4">&copy; 2025 Gruv Label. Todos os direitos reservados.</p>
            <a href="#" className="inline-block p-2 hover:text-cyan-400 transition-colors"><Instagram size={20}/></a>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
