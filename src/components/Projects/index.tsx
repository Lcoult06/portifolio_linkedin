import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-1.jpg";
import project4 from "../../assets/images/project-1.jpg";
import project5 from "../../assets/images/project-1.jpg";
import project6 from "../../assets/images/project-1.jpg";

import { AiOutlineGithub } from "react-icons/ai";
import { MdPreview } from "react-icons/md";

const portifolio = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Project #3",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "Project #4",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A data visualization project using D3.js and other libraries.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="project">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-700 mb-4">
        Meus projetos
      </h2>
      {portifolio.map((portifolio, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={portifolio.img}
              alt={portifolio.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              {portifolio.title}
            </h3>
            <p className="text-gray-500 mb-4">{portifolio.description}</p>
            <div className="flex space-x-4">
              <a
                href={portifolio.links.site}
                className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700
                                        transition duration-300"
              >
                <MdPreview className="size-6" />
              </a>
              <a
                href={portifolio.links.github}
                className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700
                                        transition duration-300"
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
