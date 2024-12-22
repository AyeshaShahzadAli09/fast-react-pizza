import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity , increaseItemQuantity } from "./cartSlice";

const UpdateQuantity = ({ pizzaId, currentQuantity }) =>{
    const dispatch = useDispatch();
    return(
       <div className="flex items-center justify-betweengap-2 md:gap-3">
        <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        <span className="text-sm font-medium">{currentQuantity}</span>
        <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
       </div>
    )
}

export default UpdateQuantity;