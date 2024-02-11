import { createContext, useCallback, useState } from "react";
import APIManger from "../APIFunctions/APIManger";
import { showToast } from "../Helpers/ToastHelpers";
import { CustomContextProviderProps } from "../Types/Global/LocalType";

export interface AuthContextProps {
    token: string;
    isLoggedIn: () => boolean;
    setLocalToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextProps>(null as any);

export const AuthContextProvider = (props: CustomContextProviderProps) => {
    const [token, setToken] = useState<string>(localStorage.getItem("Token") || "");

    const isLoggedIn = useCallback((): boolean => {
        return token ? true : false
    }, [token])

    const setLocalToken = (newToken: string): void => {
        if (newToken !== localStorage.getItem("Token") || "") {
            localStorage.setItem("Token", newToken)
        }

        if (newToken !== token) {
            setToken(newToken)
        }
    }
    APIManger.logout = () => {
        localStorage.clear()
        showToast('error', 'Unauthorized error occured. Please login again.');
        setLocalToken("")
    };
    return (
        <AuthContext.Provider value={{
            token,
            isLoggedIn,
            setLocalToken
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}