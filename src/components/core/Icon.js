import React from 'react';

const iconStyle ={
    fontSize: 100
}

class Icon extends React.Component{
    render(){

        // console.log('component/core/Icon#render this.props.name', this.props.name);

        return(
            <span style={{...this.props.color, ...iconStyle}} className="material-icons">
                {this.props.name}
            </span>
        );
    }
}

export default Icon;