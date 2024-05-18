import React from 'react';


class AddCountry extends React.Component {

    state = {
        country_by_input: {
            country_name: '',
            population: '',
            continent: '',
            capital: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.country_by_input);
        this.props.addCountry(this.state.country_by_input)
    }

    handleChange = (e) => {
        this.setState({
            country_by_input: {
                ...this.state.country_by_input,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Add Country:</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>country_name:<input type='text' name='country_name' placeholder='new country name'
                        onChange={this.handleChange} required /></p>
                    <p>population:<input type='number' name='population' placeholder='new population'
                        onChange={this.handleChange} required /></p>
                    <p>continent:<input type='text' name='continent' placeholder='new continent'
                        onChange={this.handleChange} required /></p>
                    <p>capital:<input type='text' name='capital' placeholder='new capital'
                        onChange={this.handleChange} required /></p>
                    <button type='submit'>Add Country</button>
                </form>
            </div>
        )
    }
}

export default AddCountry;