import React from 'react';

function Experience(props) {
    return(
        <div className='card-wrapper'>
            <div className='experience-img'>
                <a href={props.link} target="_blank">
                    <img src={props.image}></img>
                </a>
            </div>
            <div className='experience-desc'>
                <h2 className=''>{props.position}</h2>
                <h3 className='inline'>  {props.company}</h3>
                <p className='inline light-grey unbold'>{props.date}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Experience;