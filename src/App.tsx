import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-full p-4">
        <Welcome />
      </main>
    </>
  )
}

export default App
