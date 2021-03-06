import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider.js';


class HeartRate extends React.Component{
    render(){
        // constantes
        const iconStyle ={
            color: "red"
        }

        // console.log('HeartRate#iconStyle', iconStyle);
        // console.log('component/HeartRate#render this.props', this.props);
        return(
            <div className="box col-md-2 col-6">
                {/* <span className="material-icons" style={iconStyle}>favorite</span> */}
                <Icon
                    color={iconStyle}
                    name="favorite" /> {/* mise en place de la propriété "styleIcone" pour le style du composant Icone */}
                <p>{this.props.heart} BPM</p>
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    value={this.props.heart}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default HeartRate;