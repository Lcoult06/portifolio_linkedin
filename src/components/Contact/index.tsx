const Contact = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center my-5 h-full sm:h-auto items-center px-4"
      id="contact"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seção de Contatos */}
          <div className="p-6 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500">
              Meus Contatos
            </h1>

            <div className="space-y-4 text-gray-400">
              <p className="text-lg mt-5">📬 Entre em Contato</p>

              {/* E-mail */}
              <div className="flex items-center gap-3">
                <a
                  href="mailto:coutinhofleonardo98@gmail.com"
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
          <form className="p-6 flex flex-col max-w-[700px] bg-gray-800 rounded-xl">
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

// const Contact = () => {
//   return (
//     <div
//       className="w-full min-h-screen flex justify-center my-5 h-full sm:h-[70vh] items-center"
//       id="contact"
//     >
//       <div className="max-w-[1240px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Seção de Contatos */}
//           <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col  justify-around">
//             <h1 className="text-4xl sm:text-5xl  font-bold bg-gradient-to-r from-blue-600 to-purple-500">
//               Meus Contatos
//             </h1>

//             <div className="space-y-4 text-gray-400">
//               <p className="text-lg text-gray-400 mt-5">📬 Entre em Contato</p>
//               {/* E-mail */}
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-mail"
//                   aria-label="E-mail"
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2" />
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                 </svg>
//                 <p className="ml-4 text-md tracking-wide font-semibold">
//                   coutinhofleonardo98@gmail.com
//                 </p>
//               </div>

//               {/* Telefone */}
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-phone"
//                   aria-label="Telefone"
//                 >
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.19 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72 12.56 12.56 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.56 12.56 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                 </svg>
//                 <p className="ml-4 text-md tracking-wide font-semibold">
//                   (32) 98469-5201
//                 </p>
//               </div>

//               {/* LinkedIn */}
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-linkedin"
//                   aria-label="LinkedIn"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7H9v-7a6 6 0 0 1 6-6z" />
//                   <rect width="4" height="12" x="2" y="9" />
//                   <circle cx="4" cy="4" r="2" />
//                 </svg>
//                 <p className="ml-4 text-md tracking-wide font-semibold">
//                   www.linkedin.com/in/leonardo-f-coutinho
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Formulário de Contato */}
//           <form className="p-6 flex flex-col  max-w-[700px] bg-gray-800 rounded-xp-6 mr-2 rounded-xl  justify-around">
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-gray-400 text-sm mb-1">
//                 Nome Completo
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Digite seu nome"
//                 className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
//               />
//             </div>

//             <div className="flex flex-col mt-3">
//               <label htmlFor="email" className="text-gray-400 text-sm mb-1">
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Digite seu e-mail"
//                 className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
//               />
//             </div>

//             <div className="flex flex-col mt-3">
//               <label htmlFor="message" className="text-gray-400 text-sm mb-1">
//                 Mensagem
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Digite sua mensagem"
//                 className="w-full h-40 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="md:w-32 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-6 rounded-lg mt-3 hover:opacity-80 transition"
//             >
//               Enviar
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// const Contact = () => {
//   return (
//     <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center">
//       <div className="max-w-[1200px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div className="p-6 mr-2 bg-gray-800 rounded-x1 flex flex-col justify-around">
//             <h1 className="text-4xl sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-500">
//               Meus Contatos
//             </h1>
//             <p className="text-normal text-lg text-gray-400 ">
//               📬 Entre em Contato
//             </p>
//             <div className="block items-center text-gray-400">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <div className=" ml-4 text-md tracking-wide font-semibold w-40">
//                 <p>Leonardo Coutinho</p>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                 <p>Leonardo Coutinho</p>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                 <p>Leonardo Coutinho</p>
//               </div>
//             </div>
//           </div>

//           <form
//             action=""
//             method="post"
//             className="p-6 flex flex-col justify-center max-w-[700px]"
//           >
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Nome Completo"
//                 className=" w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border-gray-700 text-white"
//               />
//             </div>
//             <div className="flex flex-col mt-2">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email"
//                 className=" w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border-gray-700 text-white"
//               />
//             </div>
//             <div className="flex flex-col mt-2">
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Sua mensagem"
//                 className=" w-100 h-40 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border-gray-700 text-white resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="md:w-32 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-6 rounded-lg mt-3"
//             >
//               Enviar
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// const Contact = () => {
//   return (
//     <div
//       className="w-full min-h-screen flex justify-center my-5 h-full sm:h-[70vh] items-center"
//       id="contact"
//     >
//       <div className="max-w-[1240px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Seção de Contatos */}
//           <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col  justify-around">
//             <h1 className="text-4xl sm:text-5xl  font-bold bg-gradient-to-r from-blue-600 to-purple-500">
//               Meus Contatos
//             </h1>

//             <div className="space-y-4 text-gray-400">
//               <p className="text-lg text-gray-400 mt-5">📬 Entre em Contato</p>
//               {/* E-mail */}
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-mail"
//                   aria-label="E-mail"
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2" />
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                 </svg>
//                 <p className="ml-4 text-md tracking-wide font-semibold">
//                   coutinhofleonardo98@gmail.com
//                 </p>
//               </div>

//               {/* Telefone */}
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-phone"
//                   aria-label="Telefone"
//                 >
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.19 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72 12.56 12.56 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.56 12.56 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                 </svg>
//                 <p className="ml-4 text-md tracking-wide font-semibold">
//                   (32) 98469-5201
//                 </p>
//               </div>

//               {/* LinkedIn */}
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-linkedin"
//                   aria-label="LinkedIn"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7H9v-7a6 6 0 0 1 6-6z" />
//                   <rect width="4" height="12" x="2" y="9" />
//                   <circle cx="4" cy="4" r="2" />
//                 </svg>
//                 <p className="ml-4 text-md tracking-wide font-semibold">
//                   www.linkedin.com/in/leonardo-f-coutinho
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Formulário de Contato */}
//           <form className="p-6 flex flex-col  max-w-[700px] bg-gray-800 rounded-xp-6 mr-2 rounded-xl  justify-around">
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-gray-400 text-sm mb-1">
//                 Nome Completo
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Digite seu nome"
//                 className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
//               />
//             </div>

//             <div className="flex flex-col mt-3">
//               <label htmlFor="email" className="text-gray-400 text-sm mb-1">
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Digite seu e-mail"
//                 className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
//               />
//             </div>

//             <div className="flex flex-col mt-3">
//               <label htmlFor="message" className="text-gray-400 text-sm mb-1">
//                 Mensagem
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Digite sua mensagem"
//                 className="w-full h-40 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="md:w-32 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-6 rounded-lg mt-3 hover:opacity-80 transition"
//             >
//               Enviar
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// const Contact = () => {
//   return (
//     <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center">
//       <div className="max-w-[1200px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div className="p-6 mr-2 bg-gray-800 rounded-x1 flex flex-col justify-around">
//             <h1 className="text-4xl sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-500">
//               Meus Contatos
//             </h1>
//             <p className="text-normal text-lg text-gray-400 ">
//               📬 Entre em Contato
//             </p>
//             <div className="block items-center text-gray-400">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <div className=" ml-4 text-md tracking-wide font-semibold w-40">
//                 <p>Leonardo Coutinho</p>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                 <p>Leonardo Coutinho</p>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-mail"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                 <p>Leonardo Coutinho</p>
//               </div>
//             </div>
//           </div>

//           <form
//             action=""
//             method="post"
//             className="p-6 flex flex-col justify-center max-w-[700px]"
//           >
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Nome Completo"
//                 className=" w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border-gray-700 text-white"
//               />
//             </div>
//             <div className="flex flex-col mt-2">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email"
//                 className=" w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border-gray-700 text-white"
//               />
//             </div>
//             <div className="flex flex-col mt-2">
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Sua mensagem"
//                 className=" w-100 h-40 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border-gray-700 text-white resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="md:w-32 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-6 rounded-lg mt-3"
//             >
//               Enviar
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
