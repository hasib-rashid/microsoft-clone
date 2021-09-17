import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-around">
            <div className="flex h-11 justify-center items-center">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className="h-7" alt="Microsoft Logo" />

                <nav>
                    <ul className="flex text-sm ml-10">
                        <li className="mx-2">Microsoft 365</li>
                        <li className="mx-2">Office</li>
                        <li className="mx-2">Windows</li>
                        <li className="mx-2">Surface</li>
                        <li className="mx-2">Xbox</li>
                        <li className="mx-2">Deals</li>
                        <li className="mx-2">Support</li>
                    </ul>
                </nav>
            </div>

            <div className="">Right</div>
        </header>
    )
}

export default Header
