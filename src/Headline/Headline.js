import React from 'react'
import './Headline.css'


export default function Headline(props) {

    return (
        <div className="card">
            <img src={props.image} className="card-image" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>

        </div>
    )
}

