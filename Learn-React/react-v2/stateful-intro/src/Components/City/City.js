import React from 'react'
import './City.css'

function City(props) {

    return (
        <div className='City'>
        <img src={props.user} alt='image' />
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.city}</p>
        </div>
    )
}

export default City