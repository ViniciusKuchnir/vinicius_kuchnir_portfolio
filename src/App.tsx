import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Work from "./components/Work";
import GoToBack from "./components/GoToBack";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Padding to distance element due to Navbar */}
      <main className="w-full pt-14">
        <Welcome />
        <Work />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Career />
        <Contact />
        <GoToBack />
      </main>
      <Footer />
    </>
  )
}

export default App
