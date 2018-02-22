import React from 'react'
import actionFor from '../actionCreators'
import Anecdote from './Anecdote'

class Anecdotes extends React.Component {
    vote = (id) => () => { this.props.store.dispatch(actionFor.vote(id)) }

    render() {
        const anecdotes = this.props.store.getState()
        anecdotes.sort( (a, b) => { return b.votes - a.votes } )

        return(
            <div>
                <h2>Anecdotes</h2>
                {anecdotes.map(anecdote => 
                    <Anecdote
                        key={anecdote.id} 
                        anecdote={anecdote} 
                        handleClick={this.vote(anecdote.id)} 
                    />
                )}
            </div>
        )
    }
}

export default Anecdotes