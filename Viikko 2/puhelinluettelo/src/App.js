import React from 'react';
import Entries from './components/Entries'
import EntryForm from './components/EntryForm'
import Filter from './components/Filter'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    let found = this.state.persons.find(person => person.name === this.state.newName)

    if (!found) {
      let newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      }
  
      const persons = this.state.persons.concat(newPerson)
  
      this.setState({ 
        persons,
        newName: '',
        newNumber: '', 
      })
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter 
          filter={this.state.filter} 
          handleFilterChange={this.handleFilterChange}
        />
        <EntryForm 
          addPerson={this.addPerson}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
          newName={this.state.newName}
          newNumber={this.state.newNumber}
        />
        <Entries 
          persons={this.state.persons}
          filter={this.state.filter}  
        />
      </div>
    )
  }
}

export default App;
