import React from 'react'

const EntryForm = (props) => {
    return(
        <form onSubmit={props.addPerson}>
            <div>
                Nimi: <input 
                value={props.newName}
                onChange={props.handleNameChange}
                />
            </div>
            <div>
                Numero: <input 
                value={props.newNumber}
                onChange={props.handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">Lisää</button>
            </div>
        </form>
    )
}

export default EntryForm