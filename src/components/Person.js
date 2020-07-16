import React from 'react';
import Icon from './core/Icon.js';

const iconStyle ={
        fontSize: 100,
        color: "black"
    }

class Person extends React.Component{
    render(){
        return(
            <div>
                <div className="box2 col-md-2 col-6">
                    {/* <span className="material-icons" style={iconStyle}>directions_walk</span> */}
                    <Icon styleIcon={iconStyle} name="directions_walk" />
                </div>
            </div>
        );
    }
}

export default Person;