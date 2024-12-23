// actions/CartActions.js

export const addToCart = (item) => {
  // Log the item being added
  console.log('Dispatching ADD_TO_CART with item:', item);

  // Check if the item is valid
  if (!item || !item.id) {
    console.error('Invalid item:', item);
    return { type: 'INVALID_ITEM' }; // Handle invalid item case
  }

  // Return the action to add item to cart
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  // Log the item ID being removed
  console.log('Dispatching REMOVE_FROM_CART with itemId:', itemId);

  // Return the action to remove item from cart
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId, // The ID is being used here
  };
};