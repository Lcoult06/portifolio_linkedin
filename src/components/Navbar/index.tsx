import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121922] text-gray-500 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto h-20 px-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 animate-spin [mask-image:linear-gradient(transparent,white)]" />
            <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-500">
                LC
              </span>
            </div>
          </div>
          <h1 className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500">
            Leonardo Coutinho
          </h1>
        </motion.div>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-6">
          <li className="p-2 text-base">
            <a href="#home">Home</a>
          </li>
          <li className="p-2 text-base">
            <a href="#about">Sobre</a>
          </li>
          <li className="p-2 text-base">
            <a href="#project">Projetos</a>
          </li>
          <li className="p-2 text-base">
            <a href="#contact">Contatos</a>
          </li>
        </ul>

        {/* Ícone Menu Mobile */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Menu Mobile */}
        <div
          className={`fixed left-0 top-0 h-screen w-[60%] bg-[#121922] border-r border-gray-900 p-8 transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 animate-spin [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-500">
                  LC
                </span>
              </div>
            </div>
          </motion.div>

          <ul className="mt-8 space-y-4 text-lg">
            <li>
              <a href="#home" onClick={handleNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleNav}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#project" onClick={handleNav}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNav}>
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
