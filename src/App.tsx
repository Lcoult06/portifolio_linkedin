import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
