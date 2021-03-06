import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) => {
    const handleCheckout = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }
    
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    ) : (
                        <span className="empty-message">Your cart is empty</span>
                    ) 
                }
            </div>
            <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
