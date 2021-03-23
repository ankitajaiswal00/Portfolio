import React from 'react';
import Grand from "../components/Grand";
import ServicesSection from "../components/Services";
import ImageSection from '../components/ImageSection';
import design from '../imgs/design.svg';
import intelligence from '../imgs/intelligence.svg';
import gamedev from '../imgs/game-dev.svg';
import about from '../imgs/header.jpg'

function About(){
	return(
		<div classname="About">
			  <Grand title={'About Me'} span={'About Me'} />
			  <ImageSection />
            <section id="skills">
                <Grand title={'Services'} span={'Services'} />
                <div className="servives-container">
                    <ServicesSection image={design} title={'Web design'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                    <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                    <ServicesSection image={gamedev} title={'Game Development'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                </div>
            </section>
            <br />
            <br />    
		</div>
	)
}

export default About;