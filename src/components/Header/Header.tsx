import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-around">
            <div className="flex h-11 justify-center items-center">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className="h-7" alt="Microsoft Logo" />

                <nav>
                    <ul className="flex text-sm ml-10 lg:container">
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Microsoft 365</li>
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Office</li>
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Windows</li>
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Surface</li>
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Xbox</li>
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Deals</li>
                        <li className="mx-2 hover:border-black border-transparent border-b-2 hover:border-current">Support</li>
                    </ul>
                </nav>
            </div>

            <div className="">Right</div>
        </header>
    )
}

export default Header
