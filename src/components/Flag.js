import React from 'react';
import './flag.css'
import { HiArchiveBoxXMark } from "react-icons/hi2";

class Flag extends React.Component {

    render() {
        //console.log(this.props);

        const { country_name, population, continent, capital,image, id ,delete_contry } = this.props
        return (
            <div className='container'>
            <div className='uniqe'>
                <p><img className='img' src={image} alt='img'/></p>
                <hr></hr>
                <p>Country Name: {country_name}</p>
                <p>Population: {population}</p>
                <p>Continent: {continent}</p>
                <p>Capital: {capital}</p>
                <button className='bttn' onClick={() => { delete_contry(id) }}><HiArchiveBoxXMark className='icon'/></button>
                </div>
            </div>
        )
    }
}

export default Flag;