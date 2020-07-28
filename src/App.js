import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: 0,
      region: '',
    };
    
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      // code
      this.setState({
        name: '',
        capital: '',
        flag: '',
        population: 0,
        region: '',
      })
    });
  }

  render() {
    return(
      <div className='container-fluid'>
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