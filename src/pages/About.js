import React from 'react';
import Grand from "../components/Grand";
import ServicesSection from "../components/Services";
import ImageSection from '../components/ImageSection';
import design from '../imgs/design.svg';
import intelligence from '../imgs/intelligence.svg';
import gamedev from '../imgs/game-dev.svg';
import about from '../imgs/header.jpg'
import TimelineData from "../components/TimelineData";
import TimelineItem from "../components/TimelineItem";

function About(){
	return(
        <>
		    <div classname="About">
			  <Grand title={'About Me'} span={'About Me'} />
			  <ImageSection />
            <section id="skills">
                <Grand title={'Services'} span={'Services'} />
                <div className="servives-container">
                    <ServicesSection image={design} title={'Web design'} 
                    text={'Skilled in developing websites using React and Bootstrap.'}
                    />
                    <ServicesSection image={intelligence} title={'Deep Learning '} 
                    text={'Computer Vision & MMerging state-of-the-art research with industry.'}
                    />
                    <ServicesSection image={gamedev} title={'Data Science'} 
                    text={'Love exploring the field with some interesting projects on hand.'}
                    />
                </div>
            </section>
            <br />
            <br />  
            <br />
            <br />
            </div>
            <section id="exp">
                <div className="title">
                    <Grand title={'Experience'} span={'Experience'} />
                </div>
                <div className="timeline-container">
                        {TimelineData.map((data, idx) => (
                            <TimelineItem data={data} key={idx} />
                        ))}
                </div>  
            </section>
		</>
	)
}

export default About;
