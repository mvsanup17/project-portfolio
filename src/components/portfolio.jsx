import Navbar from "./navbar";
import About from "./about";
import Skills from "./skills";
import Work from "./work";
import Projects from "./projects";
import Certificates from "./certificates";
import Footer from "./footer";

function Portfolio(){
    return(
        <div>
            <Navbar/>
            <br/>
            <About/>
            <br/>
            <Skills/>
            <br/><br/>
            <Work/>
            <br/><br/>
            <Projects/>
            <br/><br/>
            <Certificates/>
            <br/><br/>
            <Footer/>
        </div>
    )
}
export default Portfolio
