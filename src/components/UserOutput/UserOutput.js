import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
return (
    <div className="UserOutput">
        <p>{props.userName} is a plumber.</p>
        <p>I know that {props.userName} knows karate.</p>
        <p>If your name is {props.userName} then your Norwegian name must be {props.userName}sson.</p>
    </div>
)
}

export default userOutput;