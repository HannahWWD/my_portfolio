import React from 'react'
import {Link } from 'react-router-dom'
import './Card.scss'

function Card(props) {

    return (
            <div className="card-wrapper">
                <Link to={props.link}>
                    <div className={`card-container ${props.backgroundColor}`}>
                        <img src={props.image} alt={props.alt}></img>
                        <div className="card-info">
                            <p>{props.subtitle}</p>
                            <h3>{props.title}</h3>
                            <h4>{props.intro}</h4>
                            <button type="button">View Project</button>
                        </div>
                    </div>
                </Link>
            </div>

    )


}

export default Card