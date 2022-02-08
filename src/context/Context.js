import {createContext,useReducer,useContext} from "react";
import {data} from "../data";
import {cartReducer} from "../context/Reducer";
const Cart = createContext();
const Context = ({children}) => {
    const products = data.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.image,
    }));
    const [state,dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    })
    return <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
}
export default Context;

export const CartState = () => {
    return useContext(Cart)
}