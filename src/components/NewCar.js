import React, { Component } from "react";

class NewCar extends Component {

    state = {
        car_from_input: {
            brand: '',
            modal: '',
            color: '',
            year: '',
            coast: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.car_from_input);
        this.props.addCar(this.state.car_from_input)
    }

    handleChange = (e) => {
        //console.log(e.target.name);
        this.setState({
            car_from_input: {
                ...this.state.car_from_input,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Add new car:</h2>
                <form onSubmit={this.handleSubmit}>
                    <p style={{color : this.state.car_from_input.color}}>Brand: <input type="text" name="brand" placeholder="New Brand"
                        onChange={this.handleChange} required /></p>
                    <p style={{color : this.state.car_from_input.color}}>Modal: <input type="text" name="modal" placeholder="New Modal"
                        onChange={this.handleChange} required /></p>
                    <p style={{color : this.state.car_from_input.color}}>Color:<input type="color" name="color" placeholder="New Color"
                        onChange={this.handleChange} required /></p>
                    <p style={{color : this.state.car_from_input.color}}>Year:<input type="number" name="year" placeholder="New year"
                        onChange={this.handleChange} required /></p>
                    <p style={{color : this.state.car_from_input.color}}>Coast:<input type="number" name="coast" placeholder="New Coast"
                        onChange={this.handleChange} required /></p>
                    <button style={{color : this.state.car_from_input.color}} type="submit">add new car</button>
                </form>
            </div>
        )
    }
}
export default NewCar