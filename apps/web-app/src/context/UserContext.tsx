import { createContext, useContext, useState, ReactNode } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    accessToken: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    token: string;
    setToken: (token: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState("");

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
