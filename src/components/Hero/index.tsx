import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import scrollicon from "../../assets/images/scroll.png";
import herobanner from "../../assets/images/hero-banner.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto  flex flex-col-reverse sm:flex-row justify-center items-center px-4 sm:px-8">
      {/* Texto e Botões */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-6xl mt-4 font-bold bg-gradient-to-r from-blue-600 to-purple-500">
          Olá! Sou Leonardo Coutinho
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white">
          Desenvolvedor FullStack
        </h1>

        {/* Ícones Redes Sociais */}
        <div className="text-4xl flex gap-8 text-white">
          <FaLinkedin className="hover:text-blue-500 transition-colors" />
          <FaGithub className="hover:text-gray-500 transition-colors" />
          <FaWhatsapp className="hover:text-green-500 transition-colors" />
        </div>

        {/* Botão de Download */}
        <motion.button className="flex items-center px-6 py-3 mt-10 bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg">
          Download CV
          <FaDownload className="ml-2" />
        </motion.button>

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
        className="my-auto flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-[80%] max-w-xs sm:max-w-md md:max-w-lg h-auto"
          src={herobanner}
          alt="Imagem Leonardo Coutinho"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div>
//       <div className="max-w-[1200px] h-[100vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
//         <div className="flex-col my-auto mx-auto md:mx-0">
//           <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold md:py-6 text-white justify-center aling-center">
//             Olá! Sou Leonardo Coutinho
//           </h1>
//           <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold md:py-6 text-white justify-center aling-center">
//             Desenvolvedor FullStack
//           </h1>

//           <div className="text-5xl flex justify-center aling-center gap-16 my-7 text-white">
//             <FaLinkedin />
//             <FaGithub />
//             <FaWhatsapp />
//           </div>
//           <motion.button className="px-6 py-3 bg-gradient-to-r  from-blue-600 to-purple-500 text-white hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg">
//             Download CV
//           </motion.button>
//           <motion.img
//             src={scrollicon}
//             alt="Scroll down indicator"
//             className="w-10 sm:w-12 mx-auto mt-6 "
//             variants={textVariants}
//             animate="scrollButton"
//           />
//         </div>

//         <div className="my-auto">
//           <img
//             className="w-[300px] sm:w-[500px] mx-auto h-auto "
//             src={herobanner}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import scrollicon from "../../assets/images/scroll.png";
// import herobanner from "../../assets/images/hero-banner.png";

// const textVariants = {
//   initial: { x: -500, opacity: 0 },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1, staggerChildren: 0.1 },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: { duration: 2, repeat: Infinity },
//   },
// };

// const imageVariants = {
//   initial: { x: 100, opacity: 0 },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1.2, ease: "easeOut" },
//   },
// };

// const Hero = () => {
//   return (
//     <div className=" h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
//       {/* Container do Texto */}
//       <div className="max-w-screen-xl mx-auto h-full flex items-center px-4 sm:px-6">
//         <motion.div
//           className="w-full md:w-1/2 md:text-center flex flex-col justify-center gap-8 sm:gap-5 px-6"
//           variants={textVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.h2
//             className="text-3xl sm:text-4xl md:text-7xl font-bold text-white"
//             variants={textVariants}
//           >
//             <span className="text-white">Olá! Sou Leonardo Coutinho</span>
//           </motion.h2>
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-500 font-bold"
//             variants={textVariants}
//           >
//             Desenvolvedor FullStack
//           </motion.h1>
//           <motion.div
//             className="flex gap-5 justify-center mt-5 sm:mt-8"
//             variants={textVariants}
//           >
//             <motion.button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg">
//               Download CV
//             </motion.button>
//           </motion.div>
//           <motion.img
//             src={scrollicon}
//             alt="Scroll down indicator"
//             className="w-10 sm:w-12 mx-auto mt-6"
//             variants={textVariants}
//             animate="scrollButton"
//           />
//         </motion.div>
//         {/* <div className="my-auto">
//           <img
//             src={herobanner}
//             alt=""
//             className="w-[300px] sm:w-[500px] mx-auto h-auto"
//           />
//         </div> */}

//         <motion.div
//           className="w-full md:w-1/2 flex justify-center px-4 sm:px-0"
//           variants={imageVariants}
//           initial="initial"
//           animate="animate"
//           whileHover="hover"
//         >
//           <img
//             src={herobanner}
//             alt="Imagem de Leonardo Coutinho"
//             className="w-[80%] max-w-[280px] sm:max-w-[320px] md:max-w-lg lg:max-w-xl h-auto object-cover"
//           />
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import scrollicon from "../../assets/images/scroll.png";

// const textVariants = {
//   initial: { x: -500, opacity: 0 },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 1, staggerChildren: 0.1 },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: { duration: 2, repeat: Infinity },
//   },
// };

// const Hero = () => {
//   return (
//     <div className="relative h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
//       {/* Container do Texto */}
//       <div className="max-w-screen-xl mx-auto h-full flex items-center">
//         <motion.div
//           className="w-1/2 md:w-full md:text-center flex flex-col justify-center gap-10 md:gap-5 px-6"
//           variants={textVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.h2
//             className="text-7xl md:text-4xl font-bold text-white"
//             variants={textVariants}
//           >
//             <span className="text-white gap-2">Olá! Sou Leonardo Coutinho</span>
//           </motion.h2>
//           <motion.h1
//             className="text-4xl sm:text-3xl  bg-gradient-to-r from-blue-600 to-purple-500 font-bold"
//             variants={textVariants}
//           >
//             Desenvolvedor FullStack
//           </motion.h1>
//           <motion.div
//             className="flex gap-5 md:justify-center"
//             variants={textVariants}
//           >
//             <motion.button
//               className="px-6 py-3 mt-11  bg-gradient-to-r from-blue-600 to-purple-500 bg-transparent  hover:scale-110 hover:
//               transition-transform duration-300 ease-in-out rounded-lg"
//             >
//               Download CV
//             </motion.button>
//           </motion.div>
//           <motion.img
//             src={scrollicon}
//             alt="Scroll down indicator"
//             className="w-12 mx-auto mt-4"
//             variants={textVariants}
//             animate="scrollButton"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

{
  /* <motion.div
  className="w-full md:w-1/2 flex justify-center"
  variants={imageVariants}
  initial="initial"
  animate="animate"
  whileHover="hover"
>
  <img
    src={herobanner}
    alt="Imagem de Leonardo Coutinho"
    className="w-full max-w-lg md:max-w-xl object-cover"
  />
</motion.div> */
}
{
  /* <div className="imageContainer">
  <img src={herobanner} alt="" />
</div> */
}
