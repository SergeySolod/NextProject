import React from 'react'
import {compose} from "redux";
import {connect} from 'react-redux'

const About = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.isFalse}</p>
        </div>
    );
}

let mapStateToProps = (state) => {
    return (
        {
            isFalse: state.cities.isFetching
        }
    )
}

export default compose(
    connect(mapStateToProps, {})
)(About);