import React from 'react'
import {Link } from 'react-router-dom'
import './Card.scss'
import ProgressiveImage from 'react-progressive-image'

function Card(props) {
    // const tags = props.tag.join(", ")

    return (

            <div className= {props.visibility !== "placeholder"? "card-wrapper":"card-wrapper black-out"}>
            {props.link ? <Link to={props.link}>
                    <div className={`card-container ${props.backgroundColor}`}>
                    <ProgressiveImage src={props.image} placeholder={props.placeholderImg}>
                        {src => <img className="progressive" src={src} alt={props.alt} />}
                    </ProgressiveImage>
                        <div className="card-info">
                            <p>{props.subtitle}</p>
                            <h3>{props.title}</h3>
                            <h4>{props.intro}</h4>
                            <button type="button">View Project</button>
                            {/* <p className="card-tag">keyword: {tags} </p> */}
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
                            {/* <p className="card-tag">keyword: {tags} </p> */}
                        </div>
                    </div>
                </a>}
                
            </div>

    )


}

export default Card