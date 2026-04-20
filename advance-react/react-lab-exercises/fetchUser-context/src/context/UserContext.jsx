// Url to be used for fetvhing Data → ["https://jsonplaceholder.typicode.com/users"]

// Import all useState hooks needed to build the logic for fething data and working with context
import { createContext, useState, useEffect } from "react";

//UserContext hold the value of the create context functionality
export const UserContext = createContext(null);

// Provider function that encapsulate all the logic for fetch and Context
export function UserProvider({ children }) {
  // initialize all necessary useStates (4)
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect hook to wrap the manual async function call
  useEffect(() => {
    // async function for wrapping /holding fetch logic
    const fetchUser = async () => {
      // varailble responsible for holding value of our requested data
      try {
        // Use state funtion hook to handle loading state
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        // gaurd rail for server error
        if (!response.ok) throw new Error("Fail to fetch data");
        const data = await response.json(); // variable for  parsing the requested data to json()
        console.log(data);
        setUsers(data); // usestate function for delevering an ( array []  ) of the parsse data
      } catch (error) {
        // useState function for displaying the error
        setError(error.message || "Fail to fetch data");
      } finally {
        // useState function for handling the final result
        setIsLoading(false);
      }
    };
    //Invoke the fetchUser function declared inside the useEffect hook
    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{ user, setUser, users, isLoading, error, setError }}
    >
      {children}
    </UserContext.Provider>
  );
}
