import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import scrollicon from "../../assets/images/scroll.png";
import herobanner from "../../assets/images/heroimg.jpg";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen max-w-[1240px] mx-auto  flex flex-col-reverse sm:flex-row justify-center items-center px-4 sm:px-8"
      id="home"
    >
      {/* Texto e Botões */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-6xl mt-4 font-bold bg-gradient-to-r from-blue-600 to-purple-500">
          Olá! Sou Leonardo Coutinho
        </h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Desenvolvedor Frontend",
              2000,
              "Desenvolvedor Backend",
              2000,
              "Desenvolvedor FullStack",
              2000,
            ]}
            speed={30}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />
        </motion.div>

        {/* Ícones Redes Sociais */}
        <div className="text-4xl flex gap-8 text-white">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/leonardo-f-coutinho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Lcoult06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-500 transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://wa.me/5532984695201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500 transition-colors" />
          </motion.a>
        </div>

        {/* Botão de Download */}
        <motion.a
          href="/Curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center px-6 py-3 mt-10 bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
        >
          Download CV
          <FaDownload className="ml-2" />
        </motion.a>

        {/* Ícone de Scroll */}
        <motion.img
          src={scrollicon}
          alt="Scroll down indicator"
          className="w-10 sm:w-12 mt-6"
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Imagem do Hero */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="my-auto flex justify-center"
      >
        <img
          className="w-[90%] max-w-xs sm:max-w-md md:max-w-lg h-auto"
          src={herobanner}
          alt="Imagem Leonardo Coutinho"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
