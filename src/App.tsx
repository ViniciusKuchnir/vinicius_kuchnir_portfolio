import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Work from "./components/Work";

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
      </main>
    </>
  )
}

export default App
