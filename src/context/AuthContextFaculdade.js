import { useContext, createContext } from "react";

// vamos criar o contexto
const AuthContextFaculdade = createContext();

// nosso provedor de contexto
// Será utilizado no App.js
// 2 variaveis "VALUE" foram mudadas para "VALOR"!!!!!!!
export function AuthProviderFac({ children, value }) {
    return <AuthContextFaculdade.Provider value={value}>{children}</AuthContextFaculdade.Provider>
}

// Será utilizado no Navbar.js
export function useAuthValueFac() {
    return useContext(AuthContextFaculdade);
}
