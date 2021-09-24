import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

interface CardInterface {
    image: string,
    toptext: string,
    title: string,
    description: string
}

const Card = ({ image, toptext, title, description }: CardInterface) => {
    return (
        <button className="w-72 h-96 mx-2 flex flex-col justify-start items-start">
            <img src={image} alt="card-img" />
            <br />
            <p className="bg-yellow-400 px-4 flex justify-center items-center">{toptext}</p>
            <h1 className="text-lg font-medium pt-1">{title}</h1>
            <p className="text-left">{description}</p>
            <div className="text-blue-900">
                <button>Pre-order now</button>
                <KeyboardArrowRightIcon />
            </div>
        </button>
    )
}

export default Card
