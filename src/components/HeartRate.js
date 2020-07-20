import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider.js';

// constructeur
const iconStyle ={
        color: "red"
    }

class HeartRate extends React.Component{
    render(){
        console.log('HeartRate#iconStyle', iconStyle)
        return(
            <div>
                <div className="box1 col-md-2 col-6">
                    {/* <span className="material-icons" style={iconStyle}>favorite</span> */}
                    <Icon styleIcon={iconStyle} name="favorite" /> {/* mise en place de la propriété "styleIcone" pour le tyle deu composant Icone */}
                    <Slider
                        max={this.props.max}
                        min={this.props.min}
                        onChange={this.props.onChange}
                        value={this.props.heart}
                    />
                </div>
            </div>
        );
    }
}

export default HeartRate;