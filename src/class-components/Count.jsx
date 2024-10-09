import React from 'react';

export class Count extends React.Component {
    state = {
        count: 1,    
    }

    handelClick = () => {
        this.setState({count: this.state.count + 1 })
    }

    render() {
        
        return <>
            <p>Count state: {this.state.count}</p>
            <p>Count props: {this.props.count}</p>
            <button type='button' onClick={this.handelClick}>Click</button>
            
        </>
    }
}