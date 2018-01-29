import React from 'react'
import Entry from './Entry'

const Entries = ({ persons }) => {
    const entries = () => persons.map(person => 
        <Entry key={person.number} entry={person} />
    )

    return (
        <div>
            <h2>Numerot</h2>
            {entries()}
        </div>
    )
}

export default Entries