import React from 'react';

class Card extends React.Component {

    render() {
        return(
            <div className="text-center">
                
                    
             <img src={this.props.flag}/>
             
            <h1>Country: {this.props.name}</h1>
            <h2> Capital: {this.props.capital}</h2>
            <h3> Region: {this.props.region}</h3>
            <h3> Population: {this.props.population}</h3>
            
           
            </div>
        );
    }
}
export default Card;