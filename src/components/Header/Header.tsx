import React from 'react'

// Icons
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import { Avatar } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 768px) and (min-width: 427px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

    return (
        <main>
            {isDesktopOrLaptop && <header className="w-screen flex justify-around mx-16">
                <div className="flex h-14 justify-center items-center">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className="h-7" alt="Microsoft Logo" />

                    <nav>
                        <ul className="flex text-sm ml-10">
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

                <div>
                    <nav>
                        <ul className="flex h-14 justify-center items-center">
                            <li className="mx-4 hover:border-black border-transparent border-b-2 hover:border-current text-sm">All Microsoft</li>
                            <li className="mx-4"><SearchIcon /></li>
                            <li className="mx-4"><LocalGroceryStoreOutlinedIcon /></li>
                            <li className="mx-4"><Avatar className="avatar" /></li>
                        </ul>
                    </nav>
                </div>
            </header>}

            {isTablet && <div className="flex justify-center items-center"><header className="w-11/12 text-center flex justify-between">
                <div className="h-14 flex justify-center items-center">
                    <MenuIcon className="mr-4" />
                    <SearchIcon />
                </div>

                <div className="flex h-14 justify-center items-center">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className="h-7" alt="Microsoft Logo" />
                </div>

                <nav>
                    <ul className="flex h-14 justify-center items-center">
                        <li className="mx-4"><LocalGroceryStoreOutlinedIcon /></li>
                        <li className="mx-4"><Avatar className="avatar" /></li>
                    </ul>
                </nav>
            </header>
            </div>}

            {isMobile && <div className="flex justify-center items-center"><header className="w-11/12 text-center flex justify-between">
                <div className="h-14 flex justify-center items-center">
                    <MenuIcon className="mr-1" />
                    <SearchIcon />
                </div>

                <div className="flex h-14 justify-center items-center">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className="h-7" alt="Microsoft Logo" />
                </div>

                <nav>
                    <ul className="flex h-14 justify-center items-center">
                        <li className="mx-1"><LocalGroceryStoreOutlinedIcon /></li>
                        <li className="mx-1"><Avatar className="avatar" /></li>
                    </ul>
                </nav>
            </header>
            </div>}
        </main>
    )
}

export default Header
