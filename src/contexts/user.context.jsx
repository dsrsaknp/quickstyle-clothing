import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const userValue = { currentUser, setCurrentUser };

    useEffect(() => {
        onAuthStateChangeListener(async (user) => {
            setCurrentUser(user);
            if (user) {
                console.log('[Logged In] User : ', user);
                await createUserDocumentFromAuth(user);
            } else {
                console.log('[Not Logged In] User : ', user);
            }
        })
    }, []);

    return (
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    );
}
