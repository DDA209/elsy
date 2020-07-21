import React, { Component } from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider.js';

// const iconStyle ={  // mauvais endroit
//     color: "orange"
// }

class Person extends Component{
    render(){
        const iconStyle ={
            color: "yellow"
        }

        // console.log('Person#iconStyle', iconStyle)
        // console.log('component/Temperature#render this.props', this.props);
        return(
            <div className="box col-md-2 col-6">
                {/* <span className="material-icons" style={iconStyle}>directions_walk</span> */}
                <Icon color={iconStyle} name="wb_sunny" />
                <p>{this.props.temperature}°C</p>
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.temperature}
                />
            </div>
        );
    }
}

export default Person;