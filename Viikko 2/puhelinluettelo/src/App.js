import React from 'react';
import Entries from './components/Entries'
import EntryForm from './components/EntryForm'
import Filter from './components/Filter'
import personService from './services/persons'


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
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response })
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    let found = this.state.persons.find(person => person.name === this.state.newName)

    if (!found) {
      let personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }
  
      personService
        .create(personObject)
        .then(newPerson => {
          this.setState({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newNumber: ''
          })
        })
    }
  }

  removePerson = (id) => {
    return () => {
      const person = this.state.persons.find(person => person.id === id)

      if (window.confirm(`Poistetaanko ${person.name}?`)) {
        personService
          .remove(id)
          .then(response => {
          const persons = this.state.persons.filter(person => person.id !== id)
            this.setState({
              persons
            })
          })
      }
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
          removePerson={this.removePerson}  
        />
      </div>
    )
  }
}

export default App;
