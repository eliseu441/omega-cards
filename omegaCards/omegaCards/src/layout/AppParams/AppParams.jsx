import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

// Criação do contexto
const AppParamsContext = createContext();

// Criação do provider
export const AppParamsProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [perfil, setPerfil] = useState(null);

    return (
        <AppParamsContext.Provider value={{ usuario, setUsuario, perfil, setPerfil }}>
            {children}
        </AppParamsContext.Provider>
    );
};

// Hook para usar o contexto
export const useAppParams = () => {
    return useContext(AppParamsContext);
};
