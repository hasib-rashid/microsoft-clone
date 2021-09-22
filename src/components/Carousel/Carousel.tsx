import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopCarousel from "./pages/DesktopCarousel";
import TabletCarousel from './pages/TabletCarousel';

const Simple = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

    return (
        <div>
            {isDesktopOrLaptop && <DesktopCarousel />}
            {isTablet && <TabletCarousel />}
            {isMobile && <p>You are a mobile phone</p>}
        </div>
    );
};

export default Simple