import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utilis/helper';
import DeleteItem from "./DeleteItem";
import UpdateQuantity from './UpdateQuantity';
import { getCurrentQuantityById } from './cartSlice';


const CartItem = ({item}) =>{
   
    const { name, quantity, totalPrice, pizzaId } = item;
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
    return(
        <li className="sm:flex sm:item-center sm:justify-between py-3">
            <p className="semi-bold mb-1 sm:mb-0">{quantity}&times; {name}</p>
            <div className="flex items-center  justify-between sm:gap-6">
                <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
                <UpdateQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
                <DeleteItem pizzaId={pizzaId}/>
            </div>
        </li>
    )
}

export default CartItem;