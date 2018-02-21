import React from 'react'
import ReactDOM from 'react-dom'

const Statistics = () => {
  const feedback = 0

  if (feedback === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td></td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td></td>
          </tr>
          <tr>
            <td>huono</td>
            <td></td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td></td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  click = (nappi) => () => {

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

export default App