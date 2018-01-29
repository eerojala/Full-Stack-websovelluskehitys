import React from 'react'
import Entry from './Entry'

const Entries = ({ persons, filter }) => {
    const filterByName = (person) => {
        return person.name.toUpperCase().includes(filter.toUpperCase())
    }
    
    const filteredPersons = persons.filter(filterByName)

    const entryElements = () => filteredPersons.map(person => 
        <Entry key={person.name} person={person} />
    )

    return (
        <div>
            <h2>Numerot</h2>
            <table cellSpacing="0" cellPadding="8">
                <tbody>
                    {entryElements()}
                </tbody>
            </table>
        </div>
    )
}

export default Entries