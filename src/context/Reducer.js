export const cartReducer = (state,action) => {
    switch(action.type) {
        case "addToCart":
            return {...state, cart:[...state.cart, {...action.payload, qty:1}]};
        case "removeFromCart":
            return {...state,cart:state.cart.filter((product) => product.id !== action.payload.id)};

        case "changeCartQty":
            return {...state,cart:state.cart.filter((product) => product.id === action.payload.id ? product.qty = action.payload.qty : product.qty)};
        default:
            return state
    }
}