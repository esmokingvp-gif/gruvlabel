
import React, { useState } from 'react';
import { Artist } from './types';
import { ARTISTS } from './constants';
import MainPage from './components/MainPage';
import DjDetailPage from './components/DjDetailPage';

const App: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleSelectArtist = (artist: Artist) => {
    setSelectedArtist(artist);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArtist(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-gray-200">
      {selectedArtist ? (
        <DjDetailPage artist={selectedArtist} onBack={handleBack} />
      ) : (
        <MainPage artists={ARTISTS} onSelectArtist={handleSelectArtist} />
      )}
    </div>
  );
};

export default App;
