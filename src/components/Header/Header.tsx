import React from 'react'

// Icons
import SearchIcon from '@material-ui/icons/Search';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import { Avatar } from '@material-ui/core'

const Header = () => {
    return (
        <header className="flex justify-around">
            <div className="flex h-14 justify-center items-center">
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

            <div>
                <nav>
                    <ul className="flex h-14 justify-center items-center">
                        <li className="mx-4 text-sm">All Microsoft</li>
                        <li className="mx-4"><SearchIcon /></li>
                        <li className="mx-4"><LocalGroceryStoreOutlinedIcon /></li>
                        <li className="mx-4"><Avatar className="avatar" /></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
