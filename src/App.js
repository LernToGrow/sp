import About from "./About";
import "./App.css";
import Details from "./Details";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Skills />
       <Project />
       <Details />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
