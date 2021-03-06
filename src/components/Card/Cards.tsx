import { useMediaQuery } from 'react-responsive'
import React from 'react'
import Card from './Card'

const Cards = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
    return (
        <article>
            {isDesktopOrLaptop && <div className="flex justify-center items-center w-screen">
                <Card title="Surface Laptop Studio" description="Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKCAh?ver=8ec7&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                <Card title="Surface Pro X" description="Keep up anywhere, at any angle, with a detachable Keyboard with built-in Slim Pen storage and charging. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKAPX?ver=033f&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="See what's updated" />
                <Card title="Surface Go 3" description="The most portable Surface 2-in-1 is perfect for your everyday tasks, homework, and play. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKCAc?ver=a02d&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                <Card title="Surface Duo 2" description="Open two screens and discover limitless possibilities for apps, email, meetings, and calls." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKAQg?ver=7446&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
            </div>}

            {isTablet && <div className="flex flex-col justify-center items-center w-screen">
                <div className="flex">
                    <Card title="Surface Laptop Studio" description="Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKCAh?ver=8ec7&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                    <Card title="Surface Pro X" description="Keep up anywhere, at any angle, with a detachable Keyboard with built-in Slim Pen storage and charging. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKAPX?ver=033f&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="See what's updated" />
                </div>
                <div className="flex">
                    <Card title="Surface Go 3" description="The most portable Surface 2-in-1 is perfect for your everyday tasks, homework, and play. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKCAc?ver=a02d&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                    <Card title="Surface Duo 2" description="Open two screens and discover limitless possibilities for apps, email, meetings, and calls." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKAQg?ver=7446&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                </div>
            </div>}

            {isMobile && <div className="flex flex-col justify-center items-center w-screen">
                <Card title="Surface Laptop Studio" description="Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKCAh?ver=8ec7&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                <Card title="Surface Pro X" description="Keep up anywhere, at any angle, with a detachable Keyboard with built-in Slim Pen storage and charging. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKAPX?ver=033f&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="See what's updated" />
                <Card title="Surface Go 3" description="The most portable Surface 2-in-1 is perfect for your everyday tasks, homework, and play. Now available with Windows 11." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKCAc?ver=a02d&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
                <Card title="Surface Duo 2" description="Open two screens and discover limitless possibilities for apps, email, meetings, and calls." image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWKAQg?ver=7446&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" toptext="New" />
            </div>}
        </article>
    )
}

export default Cards
