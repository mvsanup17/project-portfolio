import React from "react"
import '../components/styles/navbar.css'


function Skills(){
    return(
        <div>
            <section className="skills" id="skills">
                <h2 className="text-center py-4 text-col">SKILLS</h2>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">Python</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar pb-col" style={{width: "75%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">HTML</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "85%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">CSS</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "50%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">JavaScript</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "65%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">Bootstrap</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "65%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">React</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar pb-col" style={{width: "75%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">MongoDB</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "70%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">Express.js</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "50%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">Node.js</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "65%"}}></div>
                                </div>
                            </div>
                            <div className="skill-item mb-3">
                                <h3 className="fs-4">Figma</h3>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar pb-col" style={{width: "85%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skills