import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useMediaQuery } from 'react-responsive';

const Showcase = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
    return (
        <article>
            {isDesktopOrLaptop && <main className="flex justify-center items-center">
                <article className="flex w-11/12 h-96 justify-center items-center mt-10 bg-gray-200">
                    <section className="w-2/4 flex justify-center items-center">
                        <div className="w-5/6 ml-12">
                            <h1 className="text-2xl font-medium">Microsoft 365</h1>
                            <p className="mt-5">Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription</p>
                            <div className="mt-6 flex">
                                <button className="bg-black text-white flex justify-center items-center px-4 h-9">
                                    <p>For Up to 6 people</p>
                                    <KeyboardArrowRightIcon />
                                </button>
                                <button className="bg-transparent text-black font-semibold flex justify-center items-center px-4 h-9 ml-4">
                                    <p>For 1 person</p>
                                    <KeyboardArrowRightIcon />
                                </button>
                            </div>
                        </div>
                    </section>
                    <img className="w-2/4 h-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1129&y=917&s=767&d=431&aim=true" alt="showcase pic" />
                </article>
            </main>}

            {isTablet && <main className="flex justify-center items-center">
                <article className="flex flex-col w-11/12 justify-center items-center mt-10 bg-gray-200">
                    <img className="w-full h-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1129&y=917&s=767&d=431&aim=true" alt="showcase pic" />
                    <section className="w-full py-10 flex justify-center items-center">
                        <div className="w-5/6 ml-12">
                            <h1 className="text-2xl font-medium">Microsoft 365</h1>
                            <p className="mt-5">Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription</p>
                            <div className="mt-6 flex">
                                <button className="bg-black text-white flex justify-center items-center px-4 h-9">
                                    <p>For Up to 6 people</p>
                                    <KeyboardArrowRightIcon />
                                </button>
                                <button className="bg-transparent text-black font-semibold flex justify-center items-center px-4 h-9 ml-4">
                                    <p>For 1 person</p>
                                    <KeyboardArrowRightIcon />
                                </button>
                            </div>
                        </div>
                    </section>
                </article>
            </main>}

            {isMobile && <main className="flex justify-center items-center">
                <article className="flex flex-col w-11/12 justify-center items-center mt-10 bg-gray-200">
                    <img className="w-full h-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1129&y=917&s=767&d=431&aim=true" alt="showcase pic" />
                    <section className="w-full py-10 flex justify-center items-center">
                        <div className="w-5/6 ml-12">
                            <h1 className="text-2xl font-medium">Microsoft 365</h1>
                            <p className="mt-5">Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription</p>
                            <div className="mt-6">
                                <button className="bg-black text-white flex justify-center items-center px-4 h-9">
                                    <p>For Up to 6 people</p>
                                    <KeyboardArrowRightIcon />
                                </button>
                                <button className="bg-transparent text-black font-semibold flex justify-center items-center px-4 h-9 ml-4 pt-5">
                                    <p>For 1 person</p>
                                    <KeyboardArrowRightIcon />
                                </button>
                            </div>
                        </div>
                    </section>
                </article>
            </main>}
        </article>
    )
}

export default Showcase
