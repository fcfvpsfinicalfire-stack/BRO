import React, { useEffect, useState, useRef } from 'react';
import { Page } from '../App';
import CodeMatrixBackground from './CodeMatrixBackground';

interface HeroProps {
  setPage: (page: Page) => void;
}

const ServiceCard: React.FC<{ icon: string, title: string, page: Page, onClick: (page: Page) => void }> = ({ icon, title, page, onClick }) => (
    <button 
        onClick={() => onClick(page)}
        className="bg-card-bg/50 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:border-accent-purple group w-full"
    >
        <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-600/20 rounded-lg text-purple-300 text-3xl transition-all duration-300 group-hover:bg-purple-600/40 group-hover:text-white">
                <i className={`fa-solid ${icon}`}></i>
            </div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
    </button>
);


const RustHero: React.FC<HeroProps> = ({ setPage }) => {
  const animatedWords = ['Adventure', 'Community', 'Masterpiece'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-fade-out');
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
        setAnimationClass('animate-fade-in');
      }, 500); // Duration of fade-out animation
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section 
        className="relative h-screen min-h-[800px] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <CodeMatrixBackground />
      <div className="absolute inset-0 bg-dark-bg/80 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          Host Your Next
          <br />
          <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 min-h-[80px] md:min-h-[100px] ${animationClass}`}>
            {animatedWords[currentWordIndex]}
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Experience lightning-fast performance, unbeatable reliability, and 24/7 support for all your projects and games.
        </p>
        <div className="mt-8">
          <button 
            onClick={() => setPage('pricing')}
            className="group relative w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold text-lg flex items-center justify-center transform transition-transform duration-300 shadow-lg animate-pulse-glow-purple hover:scale-110"
          >
            <i className="fa-solid fa-rocket text-3xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"></i>
            <div className="absolute inset-0 border-2 border-purple-400/50 rounded-full scale-125 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </button>
        </div>
        
      </div>

       <div className="relative z-20 mt-auto pb-12 w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard icon="fa-gamepad" title="Game Servers" page="pricing" onClick={setPage} />
                <ServiceCard icon="fa-cloud" title="Cloud VPS" page="vps" onClick={setPage} />
                <ServiceCard icon="fa-server" title="Dedicated" page="dedicated" onClick={setPage} />
            </div>
        </div>

    </section>
  );
};

export default RustHero;