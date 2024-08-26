import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProductIds, setCartProductIds] = useState([]);

    const addProductToCart = (productId) => {
        setCartProductIds((prevIds) => [...prevIds, productId]);
    };

    const removeProductFromCart = (id, removeCompletely = false) => {
        if (removeCompletely) {
          setCartProductIds(prevIds => prevIds.filter(productId => productId !== id));
        } else {
          setCartProductIds(prevIds => {
            const index = prevIds.indexOf(id);
            if (index > -1) {
              return [...prevIds.slice(0, index), ...prevIds.slice(index + 1)];
            }
            return prevIds;
          });
        }
      };

    return (
        <CartContext.Provider value={{ cartProductIds, addProductToCart, removeProductFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar o contexto
export const useCart = () => {
    return useContext(CartContext);
};