import React from "react";

const Header = ({ navItems, scrollToSection }) => {
  return (
    <header className="fixed w-full bg-white shadow z-100 p-3 font-body">
      <nav className=" mx-5 flex items-center h-16 justify-between">
        <div className="rounded-2xl p-1 size-17 overflow-hidden">
          <img src="Logo.png" alt="Logo" className="w-full h-full cursor-pointer" />
        </div>
        <div className="w-[20%] flex justify-between items-center">
          {navItems.map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => scrollToSection(ref)}
              className="hover:text-emerald-500 transition font-medium cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
