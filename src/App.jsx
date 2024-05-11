import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/Intro";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
