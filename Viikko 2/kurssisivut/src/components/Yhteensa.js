import React from 'react'

const Yhteensa = ({ kurssi }) => {
    let summa = kurssi.osat.reduce(function (a, b) {
        return a + b.tehtavia
    }, 0)

    return (
        <p>yhteensä {summa} tehtävää</p>
    )
} 

export default Yhteensa