import React from 'react';

class FlagFilter extends React.Component {

    state={
        filter_population : 0
    }

    handleChange = (e) =>{
        this.setState({
            filter_population : e.target.value
        })
        this.props.setfilter(e.target.value)
    }

    render() {

        return (
            <div>
            <p>Filter:
            <input type='number' placeholder='minimal population' onChange={this.handleChange}/>
            </p>
            </div>
        )
    }
}

export default FlagFilter;