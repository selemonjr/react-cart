import { CartState } from "../context/Context";
const Cart = () => {
    const {state: {cart}, dispatch} = CartState();
    const totalPrice = cart.reduce(((val,item) => val + item.qty * item.price),0)
    return (
        <>
        <div>
        <div className="flex">
            {cart && cart.map((product) => {
                const {id,name,price,image,qty} = product;
                return (
                    <div className="cartContainer" key={id}> 
                    <div >
                        <img src={image} className="image" alt={name}/>
                         <div className="productDescription">
                            <h4 className="productTitle">{name.substring(20,0)}</h4>
                            <div className="inputFlex">
                            <input type="number" className="inputQty" value={qty} onChange={(e) => dispatch({
                                type:"changeCartQty",
                                payload: {
                                    id: id,
                                    qty: e.target.value,
                                }
                            })}/> 
                            </div>
                            <h3 className="productPrice">Price: ${price}</h3>
                        </div>
                         <div className="productButton">
                             <button className="removeButton" onClick={() => 
                             {dispatch({type:"removeFromCart",payload:product});
                            }}>Remove From Cart</button>
                        </div>
    
                    </div>
                   </div>

                )
             })}
        </div>
        {cart.length === 0 ? (<div className="yourCart"><h2>Your Cart Is Empty</h2></div>) : (<h3 className="total">Total Price : ${totalPrice.toFixed(2)}</h3>)}
        </div>
        </>
    )
}
export default Cart;