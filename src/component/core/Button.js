import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <button 
            type="button"
            class="btn btn-primary mr-3"
            onClick = {this.props.onClickFn}
            >
                {this.props.children}
                {this.props.name}
                {this.props.capital}
                {this.props.region}
                {this.props.population}
            </button>
        
        );
    }
}
export default Button;