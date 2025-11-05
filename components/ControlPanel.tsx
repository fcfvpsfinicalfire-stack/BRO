
import React from 'react';

const ControlPanel: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-badge-bg text-badge-text font-semibold px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-gamepad"></i>
                <span>Pterodactyl Panel</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Powerful & Intuitive <span className="text-accent-purple">Control Panel</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Manage all your game servers with ease using our customized Pterodactyl panel. We've designed it to be powerful for experts, yet simple for beginners.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-check-circle text-brand-green mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white">One-Click Mod Installs</h4>
                  <p className="text-gray-400">Easily install popular mods and plugins directly from the panel.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-check-circle text-brand-green mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white">Automated Backups</h4>
                  <p className="text-gray-400">Schedule automatic backups to keep your server data safe.</p>
                </div>
              </li>
               <li className="flex items-start space-x-3">
                <i className="fa-solid fa-check-circle text-brand-green mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white">Real-time Console</h4>
                  <p className="text-gray-400">Access and manage your server console directly in your browser.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             <img src="https://i.imgur.com/kG5B224.png" alt="Pterodactyl Control Panel" className="relative rounded-2xl shadow-2xl shadow-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;
