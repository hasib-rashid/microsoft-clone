import React from 'react'

interface Props {
    img: string;
    description: string;
}

const Item = ({ img, description }: Props) => {
    return (
        <div>
            <img src={img} alt="tiny images" />
            <p>{description}</p>
        </div>
    )
}

export default Item
