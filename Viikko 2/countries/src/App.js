import React from 'react';
import axios from 'axios'
import CountryDisplay from './components/CountryDisplay'
import Filter from './components/Filter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({ countries: response.data })
        console.log(this.state.countries[0])
      })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }
  
  render() {
    return (
      <div>
        <Filter 
          filter={this.state.filter} 
          handleFilterChange={this.handleFilterChange}
        />
        <CountryDisplay 
          countries={this.state.countries}
          filter={this.state.filter}
        />
      </div> 
    )
  }
}

export default App;
