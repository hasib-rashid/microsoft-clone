import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Item from './Item/Item'

const Items = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
    return (
        <div>
            {isDesktopOrLaptop && <div className="flex justify-center items-center h-72">
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Choose your Microsoft 365" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pndL?ver=5217&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Shop Surface Devices" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pxBu?ver=eae5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Buy Xbox games and consoles" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvE?ver=d8fc&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Get Windows 10" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvg?ver=0c4c&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Find your next PC" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rriw?ver=b2d5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Shop Business" />
            </div>
            }
            {isTablet && <div className="flex flex-col justify-center items-center h-5/6 p-10">
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Choose your Microsoft 365" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pndL?ver=5217&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Shop Surface Devices" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pxBu?ver=eae5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Buy Xbox games and consoles" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvE?ver=d8fc&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Get Windows 10" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvg?ver=0c4c&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Find your next PC" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rriw?ver=b2d5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Shop Business" />
            </div>
            }
            {isMobile && <div className="flex flex-col justify-center items-center h-5/6 p-10">
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Choose your Microsoft 365" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pndL?ver=5217&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Shop Surface Devices" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pxBu?ver=eae5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Buy Xbox games and consoles" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvE?ver=d8fc&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Get Windows 10" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvg?ver=0c4c&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Find your next PC" />
                <Item img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rriw?ver=b2d5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" description="Shop Business" />
            </div>
            }
        </div>
    )
}

export default Items
