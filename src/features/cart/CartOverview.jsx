import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilis/helper";
import LinkButton from "../../ui/LinkButton";

const CartOverview = () =>{
    const totalQuantity= useSelector(getTotalCartQuantity);
    //in cartSlice , slice name is cart and array name is cart 
    const totalPrice = useSelector(getTotalCartPrice);

    if(!totalQuantity) return null;
    return(
        <div className="bg-stone-800 flex items-center justify-between uppercase text-sm text-stone-200 p-4 sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold sm:space-x-6">
                {/* space-x-* utilities to control the horizontal space between elements.
                 */}
                 
                <span>{totalQuantity} pizzas</span>
                <span>{formatCurrency(totalPrice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview;