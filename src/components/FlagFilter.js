import React from 'react';

class FlagFilter extends React.Component {

    state = {
        filter_population: 0
    }

    handleChange = (e) => {
        this.setState({
            filter_population: e.target.value
        })
        this.props.setfilter(e.target.value)
    }

    render() {

        return (
            <div>
                <p >Filter By Population<input type='number' placeholder='minimal population'
                    onChange={this.handleChange} style={{ marginTop: '7px' }} /></p>
            </div>
        )
    }
}

export default FlagFilter;