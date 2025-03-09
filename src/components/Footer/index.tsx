import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-12 w-max-[800px] border-t border-gray-500 text-center ">
      <div className="inline-flex text-gray-500 gap-4  mt-4">
        <a
          href="https://www.linkedin.com/in/leonardo-f-coutinho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-500 transition-colors size-5" />
        </a>
        <a
          href="https://github.com/Lcoult06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-white transition-colors size-5" />
        </a>
        <a
          href="https://wa.me/5532984695201"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="hover:text-green-500 transition-colors size-5" />
        </a>
      </div>
      <p className="text-gray-500 my-5 text- sm:text-base">
        © 2025 Leonardo Coutinho. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
