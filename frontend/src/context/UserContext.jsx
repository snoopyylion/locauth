import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: '',
    });

    return (
        <UserContext.Provider value={{user:user, setUser: setUser}}>
            {children}
        </UserContext.Provider>
    );
}

