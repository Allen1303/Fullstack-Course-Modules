// UseContext + useStte Hook
import { createContext, useState } from "react";

// Exported variable that holds the value of the createContext function
export const UserContext = createContext(null);

// Exported Provider context function() that holds the useState
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
