import React from 'react';
import Icon from './core/Icon.js';

const iconStyle ={
        fontSize: 100,
        color: "red"
    }

class HeartRate extends React.Component{
    render(){
        return(
            <div>
                <div className="box1 col-md-2 col-6">
                    {/* <span className="material-icons" style={iconStyle}>favorite</span> */}
                    <Icon styleIcon={iconStyle} name="favorite" />
                    <p>
                        {this.props.heart}
                    </p>
                </div>
            </div>
        );
    }
}

export default HeartRate;