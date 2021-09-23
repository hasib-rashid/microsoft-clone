import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
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
const TabletCarousel = () => {
    return (
        <div className="flex justify-center items-center">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={5000}
                autoPlay
                keyBoardControl={true}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="w-11/12 height-carousel"
            >
                <div className="w-full h-full flex flex-col">
                    <img className="w-screen pointer-events-none" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G1h6?ver=151f&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=800&y=224&s=1320&d=742&aim=true" alt="ligon deez" />
                    <span className="carousel-span h-5/6 w-screen flex flex-col justify-center items-center">
                        <div className="m-4">
                            <h2 className="text-2xl font-semibold">Surface Laptop Go</h2>
                            <p>Make the most of every day with our lightest Surface laptop</p>
                            <button className="button-carousel flex bg-black text-white my-4 px-5 py-2">
                                <p>Shop Now</p>
                                <KeyboardArrowRightIcon />
                            </button>
                            <br></br>
                        </div>
                    </span>
                </div>
                <div className="w-full h-full flex flex-col">
                    <img className="w-screen pointer-events-none" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3NR20?ver=7bd2&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=861&y=302&s=1119&d=629&aim=true" alt="ligon deez" />
                    <span className="carousel-span-2 h-full w-screen flex flex-col justify-center items-center">
                        <div className="m-4">
                            <h2 className="text-2xl font-semibold">Surface Laptop Go</h2>
                            <p>Make the most of every day with our lightest Surface laptop</p>
                            <button className="button-carousel flex bg-black text-white my-4 px-5 py-2">
                                <p>Shop Now</p>
                                <KeyboardArrowRightIcon className="" />
                            </button>
                        </div>
                    </span>
                </div>
            </Carousel>
        </div>
    );
};

export default TabletCarousel