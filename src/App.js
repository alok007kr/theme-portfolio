import Navbar from "./Components/Navbar/Navbar.js"
import './App.css';
import Intro from "./Components/Intro/Intro.js";
import Services from "./Components/Services/Services.js";
import Experience from "./Components/Experience/Experience.js";
import Works from "./Components/Works/Works.js";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import {themeContext} from './Context.jsx';
import {useContext} from 'react';
function App() {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;



  return (    
    <div className="App"
    
    style={{
      background: darkMode? 'black' :  '',
      color: darkMode? 'white' : ''
    }}

    >
      <Navbar/>
      <Intro/>
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
