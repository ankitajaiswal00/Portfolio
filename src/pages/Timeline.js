import React from 'react';
import TimelineData from "../components/TimelineData";
import TimelineItem from "../components/TimelineItem";
import Grand from '../components/Grand';


const Timeline = () =>
	<>
	<div className="title">
                <Grand title={'Portfolios'} span={'portfolios'} />
    </div>
    <div className="timeline-container">
            {TimelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
    </div>
    
    </>

export default Timeline;

