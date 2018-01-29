import React from 'react';
import Entries from './components/Entries'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    let newPerson = {
      name: this.state.newName
    }

    const persons = this.state.persons.concat(newPerson)

    this.setState({ persons })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>
        <Entries persons={this.state.persons} />
      </div>
    )
  }
}

export default App;
