import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Work from "./components/Work";
import GoToBack from "./components/GoToBack";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Welcome />
        <Work />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Career />
        <Contact />
        <GoToBack />
      </main>
    </>
  )
}

export default App
