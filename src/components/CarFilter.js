import React, { Component } from "react";

class CarFilter extends Component {
    
state ={
    filter_by_year :0
}

handleChange = (e) =>{
    this.setState({
        filter_by_year: e.target.value
    })
    this.props.setFilter(e.target.value)
}
    render() {
        return (
            <div>
            <p>Filter by year: 
            <input type="number" name="filter" value={this.state.filter_by_year} onChange={this.handleChange}/>
            </p>
            </div>
           
        )
    }
}
export default CarFilter