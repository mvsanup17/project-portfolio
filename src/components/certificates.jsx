import React from "react"
import '../components/styles/navbar.css'
import cardimg1 from '../images/images.png'
import cardimg2 from '../images/cisco.png'
import cardimg3 from '../images/certiport.png'

function Certificates(){
    return(
        <div>
            <section className="py-2" id="certifications">
                <h2 className="text-center text-col py-4">CERTIFICATIONS</h2>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            <div className="card">
                                <img src={cardimg1} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Red Hat</h5>
                                    <p className="card-text">
                                        Certified as a Red Hat Certified System Administrator <span><b>(RHCSA)</b></span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={cardimg2} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Cisco</h5>
                                    <p className="card-text">
                                        Did some certifications in <span><b>CISCO</b></span> on 
                                        <span><b>Python</b></span> and <span><b>Networking</b></span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="card">
                                <img src={cardimg3} alt="img" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Certiport</h5>
                                    <p className="card-text">
                                        Did certifications in <span><b>Certiport</b></span> on <span><b>Python, HTML, CSS</b></span>
                                        and <span><b>JavaScript</b></span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Certificates