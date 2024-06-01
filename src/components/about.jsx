import React from "react";
import img from '../images/21A91A6117.jpg'
import '../components/styles/navbar.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function About(){

    const [text] = useTypewriter({
        words : ['Full Stack Developer', 'UI/UX Designer'],
        loop : true
    });

    return(
        <div>
            <section className="about py-2" id="about">
                <div className="container-lg">
                    <div className="row min-vh-100 align-items-center align-content-center">
                        <div className="col-lg-6">
                            <div className="home-img text-center">
                                <img src={img} className="rounded-circle mw-100" alt="profile img" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="home-text">
                                <p className="text-muted mb-1">Hello I'm</p>
                                <h1 className="fs-2">Malleswarapu Venkata Surya Anup</h1>
                                <h2 className="text-danger text-uppercase fs-3 fw-bold">
                                    {text}
                                    <Cursor/>
                                </h2>
                                <h6>  Welcome to my page!!</h6>
                                <p>
                                    I am Anup, currently pursuing my 3rd year of B.Tech at Aditya Engineering College. 
                                    As a trainee in Full Stack development, I've developed a strong passion for UI/UX design and related technologies.
                                    My enthusiasm for technology drives me to continually take on new challenges and acquire new skills.
                                </p>
                                <p> 
                                    I thrive on challenges that push me out of my comfort zone. 
                                    My ultimate goal is to continuously enhance my potential and create a trajectory for my personal and professional growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About