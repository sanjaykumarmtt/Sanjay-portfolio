import Heade from "./component/head";
import Hearo from "./component/Hero";
import About from "./component/About"
import Projects from "./component/projexts";
import Resum from "./component/Resume";
import Contact from "./component/contate";
import Footer from "./component/footer";
import AnimatedText from "./component/AnimatedText";
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <Heade/>
      <Hearo/>
      <About />
      <Projects />
      <Resum />
      <Contact />
      <Footer />
      {/* <AnimatedText/> */}
    </div>
  );
}
export default App;
