const Contact = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center my-5 h-full sm:h-auto items-center px-4"
      id="contact"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seção de Contatos */}
          <div className="p-24 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500">
              Meus Contatos
            </h1>

            <div className="space-y-4 text-gray-400">
              <p className="text-lg mt-5">📬 Entre em Contato</p>

              {/* E-mail */}
              <div className="flex items-center gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=coutinhofleonardo98@gmail.com"
                  target="_blank"
                  className="flex items-center hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <p className="text-md sm:text-xl tracking-wide font-semibold">
                    Email
                  </p>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 ">
                <a
                  href="https://www.linkedin.com/in/leonardo-f-coutinho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7H9v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <p className="text-md sm:text-xl  tracking-wide font-semibold">
                    LinkedIn
                  </p>
                </a>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.19 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72 12.56 12.56 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.56 12.56 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className="text-md tracking-wide font-semibold">
                  (32) 98469-5201
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <form
            action="https://getform.io/f/bjjmvjyb"
            method="POST"
            className="p-6 flex flex-col max-w-[700px] bg-gray-800 rounded-xl"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-400 text-sm mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="text-gray-400 text-sm mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="message" className="text-gray-400 text-sm mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Digite sua mensagem"
                className="w-full h-40 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white resize-none focus:ring focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-32 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-6 rounded-lg mt-3 hover:opacity-80 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
