import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div>
          <span className="block text-center sm:text-left">PortoFolio</span>
          <span className="block text-sm text-slate-400 mt-2 text-center sm:text-left">
            (Adithya Rachmadhani Permana)
          </span>
        </div>
        <p className="text-slate-600 text-center sm:text-left">
        Change your thoughts and you change your world
        </p>
      </div>
    </footer>
  );
};

export default Footer;
