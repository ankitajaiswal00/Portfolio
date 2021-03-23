import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Particles from "react-particles-js";


function Home(){
return(
	<>
	<Particles 
       className="particles-canvas"
        params={{
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                }
              },
          particles: {
                color:"#ffe699",
                links: {
                  color: "",
                  distance: 150,
                  enable: true,
                  opacity: 0.6,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                  value: 70,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 6,
                    color:"#ffe699",
                  }
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
        }}
        />
	<section id="Home">
		<div className="Home">
			<header className="hero">
				<h1 className="hero-text">
					Hi, I am 
					<span> Ankita Jaiswal</span>
				</h1>
				<p className="h-sub-text">
					Welcome!
				</p>
				<div className="icons">
					<a href="https://www.github.com/JAZz-9/" className="icon-holder ">
						<FontAwesomeIcon icon={faGithub} className="icon gh"/>
					</a>
					<a href="https://www.github.com/JAZz-9/" className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} className="icon ln"/>
					</a>
					<a href="https://www.github.com/JAZz-9/" className="icon-holder">
						<FontAwesomeIcon icon={faYoutube} className="icon yt"/>
					</a>
				</div>
			</header>
		</div>
	</section>
	</>
	)

}

export default Home;