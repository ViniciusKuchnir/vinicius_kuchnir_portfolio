import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio";
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
      </main>
    </>
  )
}

export default App
