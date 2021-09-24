import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Showcase = () => {
    return (
        <main className="flex justify-center items-center">
            <article className="flex w-11/12 h-96 justify-center items-center mt-10 bg-gray-200">
                <section className="w-2/4 flex justify-center items-center">
                    <div className="w-5/6 ml-20">
                        <h1 className="text-2xl font-medium">Microsoft 365</h1>
                        <p className="mt-5">Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription</p>
                        <div>
                            <button>
                                <p>For Up to 6 people</p>
                                <KeyboardArrowRightIcon />
                            </button>
                            <button>
                                <p>For 1 person</p>
                                <KeyboardArrowRightIcon />
                            </button>
                        </div>
                    </div>
                </section>
                <img className="w-2/4 h-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1129&y=917&s=767&d=431&aim=true" alt="showcase pic" />
            </article>
        </main>
    )
}

export default Showcase
