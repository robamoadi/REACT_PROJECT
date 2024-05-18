import React, { Component } from "react";

class CarFilter extends Component {
    
state ={
    filter_by_year :0
}

handleChange = (e) =>{
    //console.log(e.target.value);
    this.setState({
        filter_by_year: e.target.value
    })
    this.props.setFilter(e.target.value)
}
    render() {
        return (
            <div>
            <p>Filter by year: 
            <input type="number" name="filter" placeholder="year" onChange={this.handleChange}/>
            </p>
            </div>
           
        )
    }
}
export default CarFilter