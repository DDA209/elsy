import React from 'react';
import Icon from './core/Icon.js';

const iconStyle ={
        fontSize: 100,
        color: "black"
    },
    iconPic = "directions_walk";

class Person extends React.Component{
    render(){
        return(
            <div>
                <div className="box col-md-2 col-6">
                    {/* <span className="material-icons" style={iconStyle}>directions_walk</span> */}
                    <Icon styleIcon={iconStyle} name={iconPic} />
                </div>
            </div>
        );
    }
}

export default Person;