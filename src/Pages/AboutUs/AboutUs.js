import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-12 about-us-image">
                    <h2 className="text-center text-white text-uppercase">About Us</h2>
                </div>
                <div className="col-md-6 mx-auto pt-4 pb-4">
                    <p className="text-justify">Welcome to Therapy Care Point, your number one source for all things are the best. We're dedicated to giving you the very best of all others, with a focus on you the best service, caring. <br /><br/> Founded in 2004 by John Smith, Therapy Care Point has come a long way from its beginnings in [starting location]. When John Smith first started out, his passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to [action: quit day job, do tons of research, etc.]  <br /><br/> so that Therapy Care Point can offer you [competitive differentiator - e.g. "the world's most advanced toothbrush"]. We now serve customers all over [place - town, country, the world], and are thrilled that we're able to turn our passion into [my/our] own website.  <br /><br/> [I/we] hope you enjoy [my/our] products as much as [I/we] enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact [me/us].</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;