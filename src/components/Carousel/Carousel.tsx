import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopCarousel from "./pages/DesktopCarousel";

const Simple = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

    return (
        <div>
            {isDesktopOrLaptop && <DesktopCarousel />}
            {isMobile && <p>You are a mobile phone</p>}
            {isTablet && <p>You are a tablet</p>}
        </div>
    );
};

export default Simple