import React from 'react'
import {Link } from 'react-router-dom'
import './Card.scss'

function Card(props) {

    return (

            <div className={props.visibility ? "card-wrapper":"card-wrapper black-out"}>
            {props.link ? <Link to={props.link}>
                    <div className={`card-container ${props.backgroundColor}`}>
                        <img src={props.image} alt={props.alt}></img>
                        <div className="card-info">
                            <p>{props.subtitle}</p>
                            <h3>{props.title}</h3>
                            <h4>{props.intro}</h4>
                            <button type="button">View Project</button>
                        </div>
                    </div>
                </Link>:
                <a href={props.tempLink} rel="noopener noreferrer" target="_blank">
                <div className={`card-container ${props.backgroundColor}`}>
                        <img src={props.image} alt={props.alt}></img>
                        <div className="card-info">
                            <p>{props.subtitle}</p>
                            <h3>{props.title}</h3>
                            <h4>{props.intro}</h4>
                            <button type="button">View Project</button>
                        </div>
                    </div>
                </a>}
                
            </div>

    )


}

export default Card