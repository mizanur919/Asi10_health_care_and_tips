import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className="choose-section py-5" id="choose">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="section-title text-center">
                        <h2 className="pb-4">Why Choose Us</h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="service-item shadow-sm p-4 rounded bg-white">
                            <div className="icon my-3 text-info fs-2">
                                <i class="fas fa-running"></i>
                            </div>
                            <h3 className="fs-5 py-2 text-capitalize">
                                take instant initiative
                            </h3>
                            <p className="text-muted">
                                On the other end of the spectrum, physical therapy for older patients is one of the most common types of therapy. Getting older means that some of the muscles will no longer work as they used to.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="service-item shadow-sm p-4 rounded bg-white">
                            <div className="icon my-3 text-info fs-2">
                                <i class="fas fa-stethoscope"></i>
                            </div>
                            <h3 className="fs-5 py-2 text-capitalize">
                                have the best doctors
                            </h3>
                            <p className="text-muted">
                                A more rare type of therapy is cardio and pulmonary physical therapy. This type of therapy benefits patients with severe heart or circulatory system problems. The goal of this kind of physical therapy is to increase.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="service-item shadow-sm p-4 rounded bg-white">
                            <div className="icon my-3 text-info fs-2">
                                <i class="fas fa-notes-medical"></i>
                            </div>
                            <h3 className="fs-5 py-2 text-capitalize">
                                caring is the first priority
                            </h3>
                            <p className="text-muted">
                                If you are looking for any therapy classes for your license, or if you want to do some independent therapy studies, we have the knowledge you need. Contact us today for more information!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;