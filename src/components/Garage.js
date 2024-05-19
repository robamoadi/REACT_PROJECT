import React , {Component} from "react";
import Car from './Car'

class Garage extends Component{
render(){
   console.log(this.props);

    const car_list = this.props.cars.filter(car => car.year >= this.props.filte_by_year && car.coast >= this.props.filter_by_coast)
    .map(car => 
        <Car id={car.id} brand = {car.brand} modal = {car.modal}
           color = {car.color} year={car.year} coast={car.coast} key={car.id} 
           deleteCar = {this.props.deleteCar} addYear = {this.props.addYear} />
           
    )
    console.log(car_list);
    return(
        <div>
        {car_list}
        </div>
    )
}
}

export default Garage