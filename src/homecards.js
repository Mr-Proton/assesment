import React from 'react'
// import { Link } from 'react-router-dom'

export default function homecards(props){
    return(
        
        <div className="card-body">
            {/* <Link to={props.id}> */}
                <div className="heading">{props.company.name}</div>
                <div className="card-texts">
                    <h3>{props.name}</h3>
                    <h6>{props.username}</h6>
                    <h6>{props.email}</h6>
                </div>
            {/* </Link> */}
        </div>
        
    )
}