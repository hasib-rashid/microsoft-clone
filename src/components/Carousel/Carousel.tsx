import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = () => {
    return (
        <div className="flex justify-center items-center">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={5000}
                // autoPlay
                keyBoardControl={true}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="w-11/12 height-carousel"
            >
                <div className="w-full h-full flex">
                    <span className="carousel-span h-full w-2/4">Hello</span>
                    <img className="w-2/4" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G1h6?ver=151f&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=800&y=224&s=1320&d=742&aim=true" alt="ligon deez" />
                </div>
                <div className="w-full h-full height-carousel flex">
                    <span className="carousel-span-2 h-full w-2/4">Hello</span>
                    <img className="w-2/4 height-carousel h-full" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3NR20?ver=7bd2&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=861&y=302&s=1119&d=629&aim=true" alt="ligon deez" />
                </div>
            </Carousel>
        </div>
    );
};

export default Simple