import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    items: [],
    total: 0
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (existingItemIndex > -1) {
                const updatedItems = state.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + action.payload.price
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
                total: state.total + action.payload.price
            };
        }

        case "REMOVE_ITEM": {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem.quantity === 1) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id),
                    total: state.total - action.payload.price
                };
            }

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                total: state.total - action.payload.price
            };
        }

        case "CLEAR_CART":
            return initialState;

        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
    };

    const removeFromCart = (product) => {
        dispatch({ type: "REMOVE_ITEM", payload: product });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const value = {
        items: state.items,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}