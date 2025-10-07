import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ navItems, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        <div className="flex-shrink-0">
          <img
            src="Logo.png"
            alt="Logo"
            className="w-12 h-12 cursor-pointer"
            onClick={() => scrollToSection(navItems[0].ref)}
          />
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => scrollToSection(ref)}
              className="text-gray-700 cursor-pointer hover:text-emerald-500 font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-emerald-500 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navItems.map(({ label, ref }) => (
              <button
                key={label}
                onClick={() => {
                  scrollToSection(ref);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-500 font-medium transition-colors text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
