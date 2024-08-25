import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

// Criação do contexto
const CartContext = createContext();

// Criação do provider
export const CartProvider = ({ children }) => {
    // Estado que mantém os IDs dos produtos no carrinho
    const [cartProductIds, setCartProductIds] = useState([]);

    // Função para adicionar um ID ao carrinho
    const addProductToCart = (productId) => {
        setCartProductIds((prevIds) => [...prevIds, productId]);
    };

    // Função para remover um ID do carrinho
    const removeProductFromCart = (productId) => {
        setCartProductIds((prevIds) => prevIds.filter((id) => id !== productId));
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