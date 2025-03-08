import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 group"
      >
        <div className="relative h-8 w-8 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 animate-spin [mask-image:linear-gradient(transparent,white)]" />
          <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center">
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-500 ">
              LC
            </span>
          </div>
        </div>
        <h1 className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500">
          Leonardo Coutinho
        </h1>
      </motion.div>
      <ul className="hidden md:flex">
        <li className="p-2 text-base">
          <a href="#">Home</a>
        </li>
        <li className="p-2 text-base">
          <a href="#">Sobre</a>
        </li>
        <li className="p-2 text-base">
          <a href="#">Projetos</a>
        </li>
        <li className="p-2 text-base">
          <a href="#">Contatos</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 text-gray-500 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#121922] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 group p-8"
        >
          <div className="relative h-8 w-8 rounded-full overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 animate-spin [mask-image:linear-gradient(transparent,white)]" />
            <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-500 ">
                LC
              </span>
            </div>
          </div>
        </motion.div>
        <ul className="p-8 text-2xl">
          <li className="p-2 text-base">
            <a href="#">Home</a>
          </li>
          <li className="p-2 text-base">
            <a href="#">Sobre</a>
          </li>
          <li className="p-2 text-base">
            <a href="#">Tecnologias</a>
          </li>
          <li className="p-2 text-base">
            <a href="#">Projetos</a>
          </li>
          <li className="p-2 text-base">
            <a href="#">Contatos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
