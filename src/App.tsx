import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar"
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
      </main>
    </>
  )
}

export default App
