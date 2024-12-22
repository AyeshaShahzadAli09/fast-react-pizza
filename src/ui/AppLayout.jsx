import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/cartOverview";
import Loader from "./Loader";
import Header from "./Header";

const AppLayout = () =>{
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';
    return(
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader/>}
           <Header/>
            <div>
            {/* <div above add this class className="overflow-scroll" */}
                <main className="mx-auto mx-w-3xl">
                    <Outlet/>
                </main>
            </div>
            <CartOverview/>
        </div>
    )
}

export default AppLayout;