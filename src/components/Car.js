import React, { Component } from "react";

class Car extends Component {

    render() {
        //console.log(this.props);
        const { brand, modal, color, year, coast, deleteCar, addYear, id, update } = this.props
        return !update ?
            (<div style={{ color }}>
                <p>Brand : {brand}</p>
                <p>Color : {color}</p>
                <p>Modal : {modal}</p>
                <p>Year : {year} </p><button style={{ color }} onClick={() => { }}>add year</button>
                <p>Coast : {coast} </p>
                <button style={{ color: 'red' }} onClick={() => { deleteCar(id) }}>x</button>
                <button style={{ color: 'green' }} onClick={() => { this.props.start_update(id) }}>u</button>
                <hr></hr>
            </div>) :
            (<div style={{ color }}>
                <p>brand:<input type="text" name="brand" value={brand} placeholder="New Brand"/></p>
                <p >Modal: <input type="text" name="modal" value={modal} placeholder="New Modal"/></p>
                <p >Color:<input type="color" name="color" value={color} placeholder="New Color"/></p>
                <p >Year:<input type="number" name="year" value={year} placeholder="New year"/></p>
                <p>Coast:<input type="number" name="coast" value={coast} placeholder="New Coast"/></p>
                <button style={{ color: 'red' }} onClick={() => { deleteCar(id) }}>x</button>
                <button style={{ color: 'green' }} onClick={() => { this.props.finish_update(id) }}>v</button>
                <hr></hr>
            </div >)
    }
}
export default Car