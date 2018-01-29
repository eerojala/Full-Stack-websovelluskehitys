import React from 'react'

const Yhteensa = ({ kurssi }) => {
    return (
        <p>yhteensä {kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} tehtävää</p>
    )
} 

export default Yhteensa