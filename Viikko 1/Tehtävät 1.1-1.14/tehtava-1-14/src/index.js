import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  setSelected = (value) => {
    return () => {
        this.setState({ selected: value })
    }
  }

  voteSelected = () => {
      return () => {
        let votesCopy = this.state.votes
        votesCopy[this.state.selected] += 1
        this.setState({ votes: votesCopy })
      }
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>Has {this.state.votes[this.state.selected]} votes</p>
        <Button handleClick={this.voteSelected()} text="Vote anecdote" />
        <Button 
            handleClick={this.setSelected(randomNumberGenerator())} 
            text="Next anecdote" /> 
        <MostVotes votes={this.state.votes} />
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const randomNumberGenerator = function() {
    return Math.floor(Math.random() * Math.floor(anecdotes.length))
}

const MostVotes = ({ votes }) => {
    let mostVotes = Math.max.apply(Math, votes)
    let i = votes.indexOf(mostVotes)

    return (
        <div>
            <h2>Anecdote with most votes:</h2>
            <p>{anecdotes[i]}</p>
            <p>Has {mostVotes} votes</p>
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)