import React from 'react';

const Circuit = ({round, title, track, date}) => {
    return(
        <div>
            <h1 className="mt-3 display-4">Round {round}</h1>
            <h1><b>{title}</b></h1>
            <p><i>{track}</i></p>
            <p>{date}</p>
            <img src={require(`./assets/${round}.png`)} alt={`Round ${round}`}/>
        </div>
    )
}

export default Circuit; 