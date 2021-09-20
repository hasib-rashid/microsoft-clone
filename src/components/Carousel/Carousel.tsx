import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from 'react-responsive'

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
const Simple = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1224px) and (min-width: 769px)'
    })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div>
            <h1>Device Test!</h1>
            {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
            {isMobile && <p>You are a mobile phone</p>}
            {isTablet && <p>You are a tablet</p>}
        </div>
    );
};

export default Simple