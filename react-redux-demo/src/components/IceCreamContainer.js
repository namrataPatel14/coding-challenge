import React from 'react'
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';

function IceCreamContainer(Props) {
    return (
        <div>
            <h2>Number of Icecream - {Props.numOfIcecream} </h2>
            <button onClick={Props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecream: state.iceCream.numOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(
mapStateToProps, 
mapDispatchToProps)
(IceCreamContainer)