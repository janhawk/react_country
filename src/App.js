import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './component/core/Button';
import Card from './component/Card';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'France',
      capital: 'Paris',
      flag: "https://restcountries.eu/data/fra.svg",
      population: 66710000,
      region: 'Europe',
    };
    
  }
  onClickFn() {
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
          <div className="row">
            <div class="col text-center">
              <h1>
                Country selector
              </h1>
            </div>
          </div>
        {/* check video caroline */}

        <div class="text-center">
        <div className="row">
         <div className='col-12'>
        <Button 
          onClickFn={() => {
            this.setState({
              flag: "https://restcountries.eu/data/fra.svg",
              name: 'France',
              capital: 'Paris',
              region: 'Europe',
              population: 66710000,
            });
          }}>France
        </Button>
        <Button 
          onClickFn={() => {
            this.setState({
              flag: "https://restcountries.eu/data/bra.svg",
              name: 'Brazil',
              capital: 'Brasilia',
              region: 'Americas',
              population: 206135893,
            });
          }}>Brazil
        </Button>
        <Button 
          onClickFn={() => {
            this.setState({
              flag: "https://restcountries.eu/data/hrv.svg",
              name: 'Crotia',
              capital: 'Zaghreb',
              region: 'Europe',
              population: 4190669,
            });
          }}>Croatia
        </Button >
        </div>
        </div>
        </div>
        <div className="text-center">
        <Card 
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region}>
        </Card>
        </div>
      </div>
    );
  }
}
export default App;