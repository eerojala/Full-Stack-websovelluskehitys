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
            
            this.setState({ feedback: arrayCopy })
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
    const average = () => {
        let amount = feedbackAmount()
        if (amount === 0) return 0

        let average = (feedback[0] + feedback[2] * -1) / amount
        return Math.round(average * 10) / 10
    }

    const feedbackAmount = () => {
        return feedback[0] + feedback[1] + feedback[2]
    }

    const positiveRatio = () => {
        let amount = feedbackAmount()
        if (amount === 0) return 0

        return Math.round(feedback[0] / amount * 1000) / 10 
    }

    if (feedbackAmount() === 0) {
        return (
            <div>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    } else {
        return (     
            <div>
                <h1>Statistiikka</h1>
                <Statistic title="Hyvä" value={feedback[0]} />
                <Statistic title="Neutraali" value={feedback[1]} />
                <Statistic title="Huono" value={feedback[2]} />
                <Statistic title="Keskiarvo" value={average()} />
                <Statistic title="Positiivisia" value={positiveRatio() + "%"} />
            </div>
        )
    }
}

const Statistic = ({ title, value }) => {
    return (
        <p>{title} {value}</p>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
