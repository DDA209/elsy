import React from 'react';
import RCSlider from 'rc-slider';

class Slider extends React.Component {
    render() {
        return(
           
            <div>
                <RCSlider 
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.value}
                /> {/* Attributs max, min onChange et value avec les propriétés du même */}
            </div>
        );
    }
}

export default Slider;