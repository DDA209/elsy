import React from 'react';

const iconStyle ={
    fontSize: 100
}

class Icon extends React.Component{
    render(){
        return(
            <span style={{...this.props.styleIcon, ...iconStyle}} className="material-icons">
                {this.props.name}
            </span>
        );
    }
}

export default Icon;