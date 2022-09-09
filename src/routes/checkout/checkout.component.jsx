import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            {cartItems.length > 0
                ? (<>
                    <div className="checkout-header">
                        <div className="header-block">
                            <span>Product</span>
                        </div>
                        <div className="header-block">
                            <span>Description</span>
                        </div>
                        <div className="header-block">
                            <span>Quantity</span>
                        </div>
                        <div className="header-block">
                            <span>Price</span>
                        </div>
                        <div className="header-block">
                            <span>Remove</span>
                        </div>
                    </div>
                    {cartItems.map((cartItem) => (
                        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
                    ))}
                    <div className="total">TOTAL : $ {cartTotal}</div>
                </>)
                : (<div className='empty-message'>
                    <h2>Your cart is empty</h2>
                </div>
                )
            }

        </div>
    )
}

export default Checkout;