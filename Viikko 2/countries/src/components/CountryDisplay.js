import React from 'react'
import CountrySimple from './CountrySimple'
import CountryDetailed from './CountryDetailed'

const CountryDisplay = ({countries, filter}) => {
    const filterByName = (country) => {
        return country.name.toUpperCase().includes(filter.toUpperCase())
    }

    const display = () => {
        const filteredCountries = countries.filter(filterByName)

        if (filteredCountries.length >= 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (filteredCountries.length === 1) {
            return <CountryDetailed country={filteredCountries[0]} />
        } else {
            return (
                filteredCountries.map(country => 
                    <CountrySimple 
                        key={country.alpha3Code}
                        country={country}
                    />
                )
            )
        }
    }

    return (
        <div>{display()}</div>
    )
}

export default CountryDisplay