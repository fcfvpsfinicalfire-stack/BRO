
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Code One Hosting. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-discord"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;