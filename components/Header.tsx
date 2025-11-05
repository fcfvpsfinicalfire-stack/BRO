
import React, { useState } from 'react';
import { Page } from '../App';

const NavLink: React.FC<{ href: string; iconClass: string; text: string }> = ({ href, iconClass, text }) => (
  <a href={href} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
    <i className={iconClass}></i>
    <span>{text}</span>
  </a>
);

interface HeaderProps {
    setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/10 sticky top-0 bg-dark-bg/50 backdrop-blur-xl z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <button onClick={() => setPage('home')} className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold">Code One Hosting</span>
        </button>

        <nav className="hidden lg:flex items-center space-x-8">
          <button onClick={() => setPage('pricing')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-tags"></i>
            <span>Pricing</span>
          </button>
          <button onClick={() => setPage('vps')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-cloud"></i>
            <span>Cloud</span>
          </button>
           <button onClick={() => setPage('dedicated')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-server"></i>
            <span>Dedicated</span>
          </button>
          <button onClick={() => setPage('discord')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-brands fa-discord"></i>
            <span>Discord Bot</span>
          </button>
          <button onClick={() => setPage('webhosting')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-globe"></i>
            <span>WebHosting</span>
          </button>
          <NavLink href="#" iconClass="fa-solid fa-file-contract" text="Legal" />
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white"><i className="fa-brands fa-discord"></i></button>
          <button className="text-gray-300 hover:text-white"><i className="fa-solid fa-sun"></i></button>
          <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
            <span role="img" aria-label="USA Flag">🇺🇸</span>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <i className="fa-solid fa-user"></i>
            <span>CLIENT SPACE</span>
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <i className={isMenuOpen ? "fa-solid fa-times text-2xl" : "fa-solid fa-bars text-2xl"}></i>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden mt-4 px-4 pb-4 space-y-4 bg-dark-bg/90">
          <button onClick={() => { setPage('pricing'); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-tags"></i>
            <span>Pricing</span>
          </button>
          <button onClick={() => { setPage('vps'); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-cloud"></i>
            <span>Cloud</span>
          </button>
          <button onClick={() => { setPage('dedicated'); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-server"></i>
            <span>Dedicated</span>
          </button>
          <button onClick={() => { setPage('discord'); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-brands fa-discord"></i>
            <span>Discord Bot</span>
          </button>
          <button onClick={() => { setPage('webhosting'); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-globe"></i>
            <span>WebHosting</span>
          </button>
          <NavLink href="#" iconClass="fa-solid fa-file-contract" text="Legal" />
          <div className="border-t border-white/10 pt-4">
             <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity">
                <i className="fa-solid fa-user"></i>
                <span>CLIENT SPACE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;