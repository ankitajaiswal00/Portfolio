import React from 'react';
import about from '../imgs/profile_image.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Ankita Jaiswal,</span> </h4>
                <p className="about-text">
                    a pre-final year student at IIT ISM Dhanbad, India, pursuing Integrated Masters of Technology in Applied Geophysics.
                    I am a Machine Learning enthusiast and an Open Source Contributor who loves to work on diverse projects having a blend of software development and ML. 
                    I believe in creating great web and android applications that have a strong machine learning foundation from enhancing productivity to creating solid solutions. The belief that motivates me to code and contribute to the community is that my solutions would directly affect society in some way and might help in making it a better place to live.
                </p>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
