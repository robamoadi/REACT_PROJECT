import React, { Component } from "react";

class Car extends Component {
    
    render() {
        //console.log(this.props);
        const {brand , modal , color , year ,coast, deleteCar,addYear, id} = this.props
        return (
            <div style={{ color }}>
                <p>Brand : {brand}</p>
                <p>Color : {color}</p>
                <p>Modal : {modal}</p>
                <p>Year : {year} </p><button style={{color}} onClick={() => {addYear()}}>add year</button>
                <p>Coast : {coast} </p>
                <button style={{color: 'red'}} onClick={() => {deleteCar(id)}}>x</button>
            <hr></hr>
            </div>
           
        )
    }
}
export default Car