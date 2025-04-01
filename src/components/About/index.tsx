import userimage from "../../assets/images/userimage.png"; // Substitua pelo caminho correto da imagem

const About = () => {
  return (
    <section
      className="w-full min-h-screen max-w-[1240px] mx-auto  flex flex-col-reverse sm:flex-row justify-center items-center px-4 sm:px-8"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 items-center py-4  xl:gap-3 sm:py-16 xl:px-15">
        {/* Imagem */}
        <img
          src={userimage}
          width={400}
          height={400}
          alt="About Me Image"
          className="max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg mx-auto"
        />

        {/* Conteúdo */}
        <div className="mt-4 md:mt-0 flex flex-col h-full text-center md:text-left px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 mb-4">
            Sobre mim
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mx-auto max-w-3xl leading-relaxed text-left">
            Olá! Eu sou o{" "}
            <span className="font-semibold text-white">Leonardo Coutinho</span>{" "}
            👋
            <br />
            <br />
            Sou{" "}
            <span className="font-semibold text-white">
              Desenvolvedor Front-End
            </span>
            , apaixonado por tecnologia e sempre em busca de novos desafios.
            Formado em{" "}
            <span className="font-semibold text-white">Administração</span> pela
            Unopar, atualmente estou me especializando em{" "}
            <span className="font-semibold text-white">
              Desenvolvimento Full Stack Java
            </span>{" "}
            pela EBAC.
            <br />
            <br />
            No momento, estou aprofundando meus conhecimentos em{" "}
            <span className="font-semibold text-white">Back-End</span>, com o
            objetivo de me tornar um{" "}
            <span className="font-semibold text-white">
              Desenvolvedor Full Stack
            </span>
            .
            <br />
            <br />
            Tenho experiência em{" "}
            <span className="font-semibold text-white">
              React, JavaScript, HTML e CSS
            </span>
            , criando interfaces modernas, responsivas e integradas a APIs.
            Sempre aplico boas práticas, como otimização de performance e
            padronização de código.
            <br />
            <br />
            Estou em constante aprendizado e aberto a novas oportunidades.
            Explore meus projetos e conheça mais sobre meu trabalho! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
