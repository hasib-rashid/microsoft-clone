import React from 'react'

interface CardInterface {
    image: string,
    toptext: string,
    title: string,
    description: string
}

const Card = ({ image, toptext, title, description }: CardInterface) => {
    return (
        <div>
            <img src={image} alt="card-img" />
            <p>{toptext}</p>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Card
