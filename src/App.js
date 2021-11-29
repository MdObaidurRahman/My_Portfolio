import About from "./About";
import "./App.css";
// import Blog from "./Blog";
// import Contact from "./Contact";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       {/* <Blog /> */}
       {/* <Contact /> */}
       <ContactMe/>
       <Footer />
    </div>
  );
}

export default App;
