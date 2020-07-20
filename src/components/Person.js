import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider.js';

const iconStyle ={
        color: "orange"
    }

class Person extends React.Component{
    
    render(){
        console.log('Person#iconStyle', iconStyle)
        return(
            <div>
                <div className="box2 col-md-2 col-6">
                    {/* <span className="material-icons" style={iconStyle}>directions_walk</span> */}
                    <Icon styleIcon={iconStyle} name="directions_walk" />
                    <Slider
                        max={this.props.max}
                        min={this.props.min}
                        onChange={this.props.onChange}
                        value={this.props.person}
                    />
                </div>
            </div>
        );
    }
}

export default Person;