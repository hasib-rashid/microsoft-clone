import React from 'react'

interface Props {
    img: string;
    description: string;
}

const Item = ({ img, description }: Props) => {
    return (
        <button className="item flex justify-center items-center flex-col focus:bg-blue-100 px-7 py-4">
            <img src={img} alt="tiny images" />
            <p className="text-center font-semibold" > {description}</p>
        </button>
    )
}

export default Item
