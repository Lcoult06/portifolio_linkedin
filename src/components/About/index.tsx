import userimage from "../../assets/images/user-image.png"; // Substitua pelo caminho correto da imagem

const About = () => {
  return (
    <section
      className="w-full min-h-screen max-w-[1240px] flex justify-center my-5  h-full sm:h-[70vh] items-center"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 items-center py-4  xl:gap-3 sm:py-16 xl:px-15">
        {/* Imagem */}
        <img
          src={userimage}
          width={200}
          height={200}
          alt="About Me Image"
          className="max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg mx-auto"
        />

        {/* Conteúdo */}
        <div className="mt-4 md:mt-0 flex flex-col h-full text-center md:text-left px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 mb-4">
            Sobre mim
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mx-auto max-w-3xl">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          {/* Botões de Aba */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <button></button>
          </div>

          {/* Conteúdo da Aba Ativa */}
          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
