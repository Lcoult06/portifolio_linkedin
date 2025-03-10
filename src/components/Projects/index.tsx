import project1 from "../../assets/images2/CloneSpotify.png";
import project2 from "../../assets/images2/efood.png";
import project3 from "../../assets/images2/eplay.png";
import project4 from "../../assets/images2/clonedisney.png";
import project5 from "../../assets/images2/sorteador.png";

import { AiOutlineGithub } from "react-icons/ai";
import { MdPreview } from "react-icons/md";

const portifolio = [
  {
    img: project1,
    title: "Clone do Spotify #1",
    description:
      "Réplica simplificada do Spotify, utilizando React no frontend, Node.js com Express no backend e MongoDB como banco de dados.",
    links: {
      site: { url: "#", target: "_blank" },
      github: {
        url: "https://github.com/Lcoult06/Projeto_Spotify",
        target: "_blank",
      },
    },
  },
  {
    img: project2,
    title: "Efood - E-commerce  #2",
    description:
      "Loja virtual em React com validação de formulários, menu responsivo, integração com APIs e loaders personalizados. O projeto inclui otimizações no código, validação do carrinho e boas práticas de desenvolvimento. ",
    links: {
      site: { url: "https://projeto6-ten.vercel.app/", target: "_blank" },
      github: {
        url: "https://github.com/Lcoult06/Projeto6-EFOOD",
        target: "_blank",
      },
    },
  },
  {
    img: project3,
    title: "Eplay - E-commerce #3",
    description:
      "Loja virtual em React com validação de formulários, menu responsivo, integração com APIs e loaders personalizados. O projeto inclui otimizações no código, validação do carrinho e boas práticas de desenvolvimento. ",
    links: {
      site: { url: "https://eplay-one.vercel.app/", target: "_blank" },
      github: { url: "https://github.com/Lcoult06/eplay", target: "_blank" },
    },
  },
  {
    img: project4,
    title: "Clone Disney - Tema Iron Man  #4",
    description:
      "Desenvolvi um clone da Disney aplicando HTML, CSS e JavaScript, com foco em responsividade e interatividade. O projeto inclui uma seção de atrações, listagem de planos, FAQ interativo e um rodapé estilizado, seguindo boas práticas de design.",
    links: {
      site: {
        url: "https://projeto-landing-page-eight.vercel.app/",
        target: "_blank",
      },
      github: {
        url: "https://github.com/Lcoult06/Projeto4_clonedisney_tema_ironman",
        target: "_blank",
      },
    },
  },
  {
    img: project5,
    title: "Sorteador Automático #5",
    description:
      "Este projeto consiste em um sorteador de números desenvolvido com HTML, CSS e JavaScript, utilizando o Grunt para automação de tarefas.",
    links: {
      site: { url: "https://sorteadorgruntleo.vercel.app/", target: "_blank" },
      github: {
        url: "https://github.com/Lcoult06/sorteador_grunt",
        target: "_blank",
      },
    },
  },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="project">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-700 mb-4">
        Meus projetos
      </h2>
      {portifolio.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.links.site.url}
                target={project.links.site.target} // Adicionando target="_blank"
                className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition duration-300"
              >
                <MdPreview className="size-6" />
              </a>
              <a
                href={project.links.github.url}
                target={project.links.github.target} // Adicionando target="_blank"
                className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition duration-300"
              >
                <AiOutlineGithub className="size-6" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
