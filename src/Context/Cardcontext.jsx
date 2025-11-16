// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

// Optionally export context for direct use (rarely needed):
// export { CartContext };

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return [];
    }
  });

  // Persist to localStorage when cartItems change
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to localStorage:", error);
    }
  }, [cartItems]);

  // Add item (with quantity) to cart
  const addToCart = useCallback((item, quantity = 1) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(ci => ci.id === item.id);
      if (existing) {
        return prevItems.map(ci =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      // add new with quantity
      return [...prevItems, { ...item, quantity }];
    });
  }, []);

  // Remove an item entirely from cart
  const removeFromCart = useCallback((itemId) => {
    setCartItems(prevItems => prevItems.filter(ci => ci.id !== itemId));
  }, []);

  // Update the quantity of an item (set to exactly quantity)
  const updateItemQuantity = useCallback((itemId, quantity) => {
    setCartItems(prevItems => 
      prevItems
        .map(ci => (ci.id === itemId ? { ...ci, quantity } : ci))
        .filter(ci => ci.quantity > 0)  // remove if quantity zero
    );
  }, []);

  // Clear the entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Get total price
  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((sum, ci) => sum + (ci.price * (ci.quantity || 1)), 0);
  }, [cartItems]);

  // Get total count of items (sum of quantities)
  const getTotalCount = useCallback(() => {
    return cartItems.reduce((sum, ci) => sum + (ci.quantity || 1), 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
    getTotalCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for ease of use
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};