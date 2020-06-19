import React from 'react';

const userInput = (props) => {
return (
    <div className="UserInput">
        <input type="text"  onChange={props.changed}  value={props.userName}/>
    </div>
)
}

export default userInput;