import React from 'react';
import './flag.css'

class Flag extends React.Component {

    render() {
        //console.log(this.props);

        const { country_name, population, continent, capital, id ,delete_contry } = this.props
        return (
            <div>
            <div className='uniqe'>
                <p>Country Name: {country_name}</p>
                <p>Population: {population}</p>
                <p>Continent: {continent}</p>
                <p>Capital: {capital}</p>
                <button style={{ color: 'red' }} onClick={() => { delete_contry(id) }}>X</button>
                <hr></hr>
                </div>
            </div>
        )
    }
}

export default Flag;