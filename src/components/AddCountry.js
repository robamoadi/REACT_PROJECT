import React from 'react';
import './AddCountry.css'


class AddCountry extends React.Component {

    state = {
        country_by_input: {
            country_name: '',
            population: '',
            continent: '',
            capital: '',
            image: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.country_by_input);
        this.props.addCountry(this.state.country_by_input)
        document.querySelector(".form_container").style.display = "none"

    }

    handleChange = (e) => {
        this.setState({
            country_by_input: {
                ...this.state.country_by_input,
                [e.target.name]: e.target.value
            }
        })
    }

    showForm = () => {
        document.querySelector(".form_container").style.display = "flex"
    }

    render() {
        return (
            <div>
                <button className='show' onClick={this.showForm}>AddCountry</button>
                <div className='form_container'>
                    <form onSubmit={this.handleSubmit} className='edit_form'>
                        <h2 >Add Country:</h2>
                        <p>country_name:<input type='text' name='country_name' placeholder='new country name'
                            onChange={this.handleChange} required /></p>
                        <p>population:<input type='number' name='population' placeholder='new population'
                            onChange={this.handleChange} required /></p>
                        <p>continent:<input type='text' name='continent' placeholder='new continent'
                            onChange={this.handleChange} required /></p>
                        <p>capital:<input type='text' name='capital' placeholder='new capital'
                            onChange={this.handleChange} required /></p>
                        <p>Flag link:<input type='url' name='image' placeholder='new image'
                            onChange={this.handleChange} required /></p>
                        <button className='add' type='submit'>Add Country</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddCountry;