import React from "react"
import '../components/styles/navbar.css'
import cardimg1 from '../images/food.png'
import cardimg2 from '../images/portfolio.webp'
import cardimg3 from '../images/travel.jpg'
import { Link } from "react-router-dom"

function Projects(){
    return(
        <div>
            <section className="py-2" id="projects">
                <h2 className="text-center text-col py-4">PROJECTS</h2>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <div className="card">
                                <img src={cardimg1} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Food Blog - Svaadisht</h5>
                                    <p className="card-text">
                                        Designed and Developed a blog on food using <span><b>MERN</b></span> Stack.
                                        It consists of a review system and stores the critics data in <span><b>MongoDB</b></span>.
                                    </p>
                                    <Link to="https://github.com/mvsanup17/food-blog" class="card-link" target="_blank">Git link</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={cardimg2} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Personal Portfolio</h5>
                                    <p className="card-text">I have developed a personal portfolio using <span><b>React</b></span> that 
                                    provides details about my background and expertise.</p>
                                    <Link to="https://github.com/mvsanup17/project-portfolio" class="card-link" target="_blank">Git link</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={cardimg3} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Travel Blog - Trip</h5>
                                    <p className="card-text">
                                        I have developed a travel blog with a focus on exceptional user interface
                                        <span><b>(UI)</b></span> and user experience <span><b>(UX)</b></span> design.
                                    </p>
                                    <Link to="https://github.com/mvsanup17/trip" class="card-link" target="_blank">Git link</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Projects