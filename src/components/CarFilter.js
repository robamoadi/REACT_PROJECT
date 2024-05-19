import React, { Component } from "react";

class CarFilter extends Component {

    state = {
            filter_by_year: 0,
            filter_by_coast: 0
    }

    handleChange = (e) => {
        //console.log(e.target.value);
        this.setState({
            filter: {
                [e.target.name]: e.target.value
            }
        })
        this.props.setFilter({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <p>Filter by year:<input type="number" name="filter_by_year"
                    placeholder="year" onChange={this.handleChange} /></p>
                <p>filter price:<input type="number" name="filter_by_coast"
                    placeholder="coast" onChange={this.handleChange} /></p>
            </div>

        )
    }
}
export default CarFilter