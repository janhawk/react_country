import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './component/core/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'France',
      capital: 'Paris',
      flag: 'https://restcountries.eu/data/fra.svg',
      population: 66710000,
      region: 'Europe',
    };
    
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      // code
      this.setState({
        name: json[0].name,
        capital: json[0].capital,
        flag: json[0].flag,
        population: json[0].population,
        region: json[0].region,
      })
    });
  }

  render() {
    return(
      <div className='container-fluid'>
        
        <h1>
          Country selector
        </h1>
        {/* check video caroline */}
        <Button

        onClickFn={() => {
          this.setState({
            name: 'France'
          });
        }}>France

        </Button>
        <Button 
        onClickFn={() => {
          this.setState({
            name: 'Brazil'
          });
        }}>Brazil

        </Button>
        <Button 
        onClickFn={() => {
          this.setState({
            name: 'Crotia'
            
          });
        }}>Croatia

        </Button>
        
        
        {this.state.name}
        {this.state.capital}
        {this.state.flag}
        {this.state.population}
        {this.state.region}
      </div>
    );
  }
}
export default App;