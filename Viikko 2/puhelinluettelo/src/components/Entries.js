import React from 'react'
import Entry from './Entry'

const Entries = ({ persons }) => {
    const entries = () => persons.map(person => 
        <Entry key={person.number} person={person} />
    )

    return (
        <div>
            <h2>Numerot</h2>
            <table cellSpacing="0" cellPadding="8">
                <tbody>
                    {entries()}
                </tbody>
            </table>
        </div>
    )
}

export default Entries