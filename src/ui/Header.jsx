import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder";

import Username from "../features/user/Username"

const Header = () =>{
    return(
        <header className="bg-yellow-400 flex items-center justify-between p-2 border-b border-stone-200 uppercase sm:px-6">
            <Link to="/" className="tracking-widest">
            Fast React Pizza Co.</Link>
                <SearchOrder/>
                <Username/>
        </header>
    )
}

export default Header;