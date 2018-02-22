import React from 'react';
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <Anecdotes store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App