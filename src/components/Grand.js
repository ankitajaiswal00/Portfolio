import React from 'react';

function Grand({title, span}) {
    return (
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )
}

export default Grand;