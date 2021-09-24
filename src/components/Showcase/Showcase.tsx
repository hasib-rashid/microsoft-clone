import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Showcase = () => {
    return (
        <article>
            <section className="">
                <h1>Microsoft 365</h1>
                <p>Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription</p>
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
            </section>
            <section className="">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1129&y=917&s=767&d=431&aim=true" alt="showcase pic" />
            </section>
        </article>
    )
}

export default Showcase
