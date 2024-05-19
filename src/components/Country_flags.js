import React from 'react';
import Flag from './Flag';


class Flags extends React.Component{
    render(){
       console.log(this.props);

        const flags_list = this.props.flags.filter(flag => flag.population >= this.props.filter_population)
        .map(flag => 
            <Flag country_name={flag.country_name} population = {flag.population} continent={flag.continent} 
                  capital={flag.capital} image={flag.image} id={flag.id} key = {flag.id} delete_contry={this.props.delete_contry}/>
        )
        return(
            <div>
            {flags_list}
            </div>
        )
    }
}

export default Flags;