import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <section>
      <Showcase />
      <Skills />
      <About />
      <Projects />
    </section>
  );
};

export default HomePage;
