import userimage from "../../assets/images/user-image.png"; // Substitua pelo caminho correto da imagem

const About = () => {
  return (
    <section className="text-white mt-6 px-4 max-w-[1240px] mx-auto" id="about">
      <div className="md:grid md:grid-cols-2  items-center py-4  xl:gap-3 sm:py-16 xl:px-15">
        {/* Imagem */}
        <img
          src={userimage}
          width={500}
          height={500}
          alt="About Me Image"
          className="rounded-lg"
        />

        {/* Conteúdo */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl sm:text-5xl  font-bold bg-gradient-to-r from-blue-600 to-purple-500  mb-4">
            Sobre mim
          </h2>
          <p className="text-base lg:text-lg text-gray-400 ">
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
