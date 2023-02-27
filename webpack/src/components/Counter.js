import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from '../action';

class Counter extends Component {

    handleInc =() =>{
        this.props.onInc(2);
    }
    handleDec =() =>{
        this.props.onDec(2);
    }

    render() {
        return (
            <>
                {this.props.count}
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return { count: state.count };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (val) => dispatch(onIncrement(val)),
        onDec: (val) => dispatch(onDecrement(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);