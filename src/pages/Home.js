import { CartState } from "../context/Context";
const Home = () => {
    const {state: {products}} = CartState();
    const {state: {cart},dispatch } = CartState();
    console.log(cart)
    return (
        <>
         <div  className="flex">
            {products && products.map((product) => {
                const {id,name,price,image} = product;
                return (
                    <div className="productContainer" key={id}> 
                    <div>
                        <img src={image} className="image" alt={name}/>
                         <div className="productDescription">
                            <h4 className="productTitle">{name.substring(20,0)}</h4>
                            <h3 className="productPrice">Price: ${price}</h3>
                        </div>
                         <div className="productButton">
                             <button className="button" onClick={() => 
                             {dispatch({type:"addToCart",payload:product});
                            }}>Buy Now</button>
                        </div>
    
                    </div>
                   </div>

                )
             })}
        </div>
         </>
    )
}
export default Home;