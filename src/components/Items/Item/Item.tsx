import { useMediaQuery } from 'react-responsive'
import React from 'react'

interface Props {
    img: string;
    description: string;
}

const Item = ({ img, description }: Props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

    return (
        <article>
            {isDesktopOrLaptop && <button className="item flex flex-col justify-center items-center focus:bg-blue-100 px-7 py-4">
                <img src={img} alt="tiny images" />
                <p className="text-center font-semibold" > {description}</p>
            </button>}
            {isTablet && <button className="w-screen flex focus:bg-blue-100 px-7 py-4">
                <div className="flex justify-center items-center ml-4">
                    <img src={img} className="w-8" alt="tiny images" />
                    <p className="text-center font- mx-5 semibold" >{description}</p>
                </div>
            </button>}
            {isMobile && <button className="w-screen flex focus:bg-blue-100 px-7 py-4">
                <div className="flex justify-center items-center ml-4">
                    <img src={img} className="w-8" alt="tiny images" />
                    <p className="text-center font-semibold mx-5">{description}</p>
                </div>
            </button>}
        </article>
    )
}

export default Item
