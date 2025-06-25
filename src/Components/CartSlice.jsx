import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart (state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)

            if (existingItem) {
                existingItem.quantity += 1
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1})
            }
        },
        
        removeItemFromCart (state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        
        clearCart (state) {
            state.cartItems = []
        },

        increaseItemQuantity (state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload)
            if (itemToIncrease) {
                itemToIncrease.quantity += 1
            }
        },
        decreaseItemQuantity (state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload)
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1
            }
            else {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            }
        },
        calculateSuperCoins (state) {
            const totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            
            if (totalAmount >= 100 && totalAmount < 200) {
                state.superCoins = 10;
            } else if (totalAmount >= 200 && totalAmount < 300) {
                state.superCoins = 20;
            } else if (totalAmount >= 300) {
                state.superCoins = 30;
            } else {
                state.superCoins = 0;
            }
        },
    }

});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    calculateSuperCoins
} = CartSlice.actions;

export default CartSlice.reducer;



