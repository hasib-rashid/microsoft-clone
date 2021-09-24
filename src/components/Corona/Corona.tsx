import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Corona = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <article className="bg-gray-200 w-11/12 flex flex-col justify-center items-center mt-20 p-10">
                <h1 className="text-3xl font-semibold">Microsoft's response to COVID-19</h1>
                <p className="mt-4">Read how we’re responding to the COVID-19 outbreak, and get resources to help.</p>
                <button className="flex mt-2 font-semibold">
                    <p>Learn More</p>
                    <KeyboardArrowRightIcon />
                </button>
            </article>
        </main>
    )
}

export default Corona
