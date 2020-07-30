import React from 'react';

class Button extends React.Component {

    render() {
        return(
            
            
            
            <button 
            type="button"
            className="btn btn-primary btn-lg m-3"
            

            onClick = {this.props.onClickFn}>
            
                {this.props.children}
            </button>
           
        );
    }
}
export default Button;