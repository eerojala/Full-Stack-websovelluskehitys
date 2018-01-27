import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            feedback: [0, 0, 0]
        }
    }

    giveFeedback = (i) => {
        return () => {
            let incrementedValue = this.state.feedback[i] + 1
            let arrayCopy = this.state.feedback.slice()
            arrayCopy[i] = incrementedValue
            
            this.setState({ 
                feedback: arrayCopy
            })
        }    
    }
    
    render() {
        return (
            <div>
                <FeedbackInput handleClick={this.giveFeedback} />
                <Statistics feedback={this.state.feedback} />
            </div>
        )
    }
}

const FeedbackInput = ({ handleClick }) => {
    return (
        <div>
            <h1>Anna palautetta</h1>
            <Button handleClick={handleClick(0)} text="Hyvä" />
            <Button handleClick={handleClick(1)} text="Neutraali" />
            <Button handleClick={handleClick(2)} text="Huono" />
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ feedback }) => {
    return (
        <div>
            <h1>Statistiikka</h1>
            <p>Hyvä {feedback[0]}</p>
            <p>Neutraali {feedback[1]}</p>
            <p>Huono {feedback[2]}</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
