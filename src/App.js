import React from "react";
import './styles.css';
import Navbar from "./Components/Navbar";
import Masthead from "./Components/Masthead";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Copyright from "./Components/Copyright";

const App = () => {
    return(
        <div>
            <Navbar />
            <Masthead />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;