import {Link} from "react-router-dom";
import { CartState } from "../context/Context";
const Navigation = () => {
    const {state: {cart}} = CartState();
    const productItems = cart.length;
    return (
    <>
    <header>
        <nav>
            <div className="logo">
               <Link to="/"><h2>Shopping Cart</h2></Link>
            </div>
            <div className="cart_icon">
                <div className="itemsCount">
                    <p>{productItems}</p>
                </div>
               <Link to="/cart"> <h4 className="icon"><i class='bx bx-shopping-bag'></i></h4></Link>
            </div>
        </nav>
    </header>
    </>
    )

}
export default Navigation;