import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import feedbackReducer from './feedbackReducer'

const store = createStore(feedbackReducer)

const Statistics = () => {
  const state = store.getState()
  const feedbackAmount = state.good + state.ok + state.bad
  const average = Math.round((state.good + (-1 * state.bad)) / feedbackAmount * 10) / 10
  const positiveRatio = Math.round((state.good / feedbackAmount) * 1000) / 10

  if (feedbackAmount === 0) {
    return (
      <div>
        <h2>Statistiikka</h2>
        <div>Ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>Hyvä</td>
            <td>{state.good}</td>
          </tr>
          <tr>
            <td>Neutraali</td>
            <td>{state.ok}</td>
          </tr>
          <tr>
            <td>Huono</td>
            <td>{state.bad}</td>
          </tr>
          <tr>
            <td>Keskiarvo</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positiivisia</td>
            <td>{positiveRatio}%</td>
          </tr>
        </tbody>
      </table>

      <button onClick={e => store.dispatch({ type: 'ZERO' })}>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {

  click = (button) => () => {
    store.dispatch({ type: button })
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.click('GOOD')}>hyvä</button>
        <button onClick={this.click('OK')}>neutraali</button>
        <button onClick={this.click('BAD')}>huono</button>
        <Statistics />
      </div>
    )
  }
}


const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

store.subscribe(render)

export default App