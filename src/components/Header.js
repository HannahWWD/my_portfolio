import React from 'react'
import './Header.scss'

function Header(props){
    return(
        <header>
            <div>
                <h1>{props.title}</h1>
                <span>{props.subtitle}</span>
            </div>
            <p>{props.body}</p>
        </header>

    )
}

export default Header