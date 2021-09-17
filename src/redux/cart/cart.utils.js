export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cart => cart.id === cartItemToAdd.id);
    if (existingCartItem) { // item already in cart; find it and increment the count
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [{...cartItemToAdd, quantity: 1}];
};