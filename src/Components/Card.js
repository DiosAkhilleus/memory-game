import React from 'react'

const Card = ({ name, letter, ind, onClick }) => {

    return (
        <div className='card' onClick={onClick}>
            <div className='card-letter'>
                {letter}
            </div>
            <div className='card-name'>
                {name}
            </div>
        </div>
    )
}

export default Card
