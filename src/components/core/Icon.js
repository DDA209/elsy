import React from 'react';

const iconStyle ={
    fontSize: 100
}

class Icon extends React.Component{
    render(){
        return(
            <span className="material-icons" style={this.props.styleIcon}>
                {this.props.name}
            </span>
        );
    }
}

export default Icon;