
import "./index.css"
import './app.css'
import Navbar from "./pages/navbar/components/Navbar";
// import AnimCursor from "./components/AnimCursor";
import bgImage from './assets/bg.jpg';
import Hero from "./pages/hero/components/Hero";
import About from "./pages/about/components/About";
import Skils from "./pages/skils/components/skils";
import Project from "./pages/projects/components/project";
import Contact from "./pages/contact/components/contact";
import Service from "./pages/service/components/service";





function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <>
      <div style={backgroundStyle}>
        {/* <AnimCursor /> */}
        <Navbar />
        <div id="home">
          <Hero />
        </div>

      </div>
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skils />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}


export default App;




