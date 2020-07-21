import React from 'react';
import RCSlider from 'rc-slider';

class Slider extends React.Component {
    render() {
        return(
           
            <div>
                <RCSlider 
                    max={this.props.max}
                    min={this.props.min}
                    value={this.props.value}
                    onChange={this.props.onChange} // Event listner qui attends une fonction callback
                /> {/* Attributs max, min onChange et value avec les propriétés du même nom */}
            </div>
        );
    }
}

export default Slider;