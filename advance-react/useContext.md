# React useContext Hook — Quick Reference Guide

## The Mental Model

useContext is a **radio broadcast** — one tower transmits, any radio tunes in directly.
No wires (props) connecting them needed.

```
createContext()        → the channel
<Context.Provider>     → the broadcast tower
useContext()           → any component tuning in
```

---

## When To Use It

✅ Same data needed across many components on different branches of the tree
✅ Examples: theme, logged in user, language, cart, notifications

❌ Parent passing data to one direct child → just use props instead
❌ Frequently changing data → consider Zustand or Redux
❌ Async data fetching → consider React Query or SWR

**Simple rule:**

```
One parent → one direct child        = just use props
Same data across many components     = use useContext
```

---

## Folder Structure

```
src/
 ├── context/UserContext.jsx   ← context + Provider
 ├── hooks/useUser.js          ← custom hook
 └── components/...
```

---

## Implementation — 4 Steps

**Step 1 — Context file**

The basic version holds just the user state. When fetching data is involved
the Provider expands to include fetch lifecycle states — see the
"When Context Includes Fetched Data" section below.

```jsx
// context/UserContext.jsx
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

**Step 2 — Custom hook**

```jsx
// hooks/useUser.js
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  return useContext(UserContext);
}
```

**Step 3 — Wrap the app**

`PageDisplay` lives INSIDE the Provider so it can safely access context.
It handles all possible states — loading, logged out, and logged in:

```jsx
// App.jsx
function PageDisplay() {
  const { user, isLoading } = useUser();

  if (isLoading) return <LoadingSpinner />; // fetching data
  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoginForm /> // no user — centered login
      </div>
    );
  return <Dashboard />; // user exists — full layout
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <UserProvider>
        <PageDisplay />
      </UserProvider>
    </div>
  );
}
```

**Step 4 — Consume in any component**

```jsx
const { user } = useUser(); // reading only
const { user, setUser } = useUser(); // reading and changing
```

---

## Conditional Rendering — Deciding What Gets Displayed

### 📌 Mental Note

> The conditional always lives in the component that **first needs to act on the data** —
> page decisions in `PageDisplay`, style decisions inside the component that owns the element.
> `App.jsx` renders the Provider so it can't read context itself — `PageDisplay` lives inside it and can.

---

### Theme Switch — Swap Styles Based On A Value

```jsx
function ArticleCard() {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-800"
      }
    >
      Article content here
    </div>
  );
}
```

---

## When Context Includes Fetched Data

When context manages fetched data the Provider needs additional state
to handle the full fetch lifecycle:

```jsx
// context/UserContext.jsx
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // fetched list
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) throw new Error("Failed to fetch users"); // guard bad responses
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message || "Failed to fetch users");
      } finally {
        setIsLoading(false); // always runs — success or failure
      }
    };
    fetchUsers();
  }, []); // empty array — fetch once on mount, never again

  return (
    <UserContext.Provider
      value={{ user, setUser, users, isLoading, error, setError }}
    >
      {children}
    </UserContext.Provider>
  );
}
```

**The fetch lifecycle states — always needed when fetching manually:**

```
isLoading  → is data still being fetched?
error      → did something go wrong?
users      → the actual fetched result
```

**What to expose in `value` vs keep internal:**

```
✅ expose       → user, setUser, users, isLoading, error, setError
❌ keep internal → setUsers, setIsLoading (only context manages these)
```

> For a dedicated guide on manual data fetching in React see the separate fetching README.

---

## Error Handling With useContext

Errors fall into two categories — **fetch errors** and **logic errors**.

```
Fetch error  → set automatically in the Provider catch block
Logic error  → set by a component via setError() e.g. "User not found"
Display      → any component that reads error from useUser()
Clear        → setError(null) at the start of handleSubmit
```

### 📌 Error Mental Note

Always clear errors before the next attempt — otherwise old messages persist:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  setError(null); // ← clear previous error first
  // ... rest of logic
};
```

---

## Controlled Forms — Wiring Up Input Fields

A **controlled form** means React owns the input values — not the browser.
Every keystroke updates state and the input always reflects what's in state.

```jsx
// components/LoginForm.jsx
import { useState } from "react";
import { useUser } from "../hooks/useUser";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users, setUser, setError, isLoading, error } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault(); // stops browser page refresh
    setError(null); // clear previous error
    if (!name || !email) return; // guard — block empty submissions

    // Basic email format validation using industry standard regex pattern
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) return; // guard — invalid email format

    // match against fetched users — case insensitive email comparison
    const matchedUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    );
    matchedUser ? setUser(matchedUser) : setError("User not found");
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* onSubmit on form, not the button */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <input
        type="text"
        value={name} // controlled by state
        onChange={(e) => setName(e.target.value)} // updates state on keystroke
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={isLoading} // disabled while fetching
        className="... disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sign In
      </button>
    </form>
  );
}
```

> Email validation checks format only — not whether the address actually exists.
> Confirming a real address requires backend email verification.

### Resetting / Logging Out

```jsx
export default function Navbar() {
  const { user, setUser } = useUser();
  return (
    <nav>
      <span>{user?.name}</span>
      <button onClick={() => setUser(null)}>Sign Out</button>
    </nav>
  );
}
```

---

## Optional Chaining — The ?. Operator

Context data starts as `null` — accessing a property on `null` crashes the app.
Optional chaining returns `undefined` safely instead:

```jsx
user.name; // ❌ crashes if user is null
user?.name; // ✅ returns undefined safely if user is null
```

Use it any time the value could be `null` at the time the component renders:

```jsx
<p>{user?.name}</p>
<p>{user?.email}</p>
<p>{user?.company?.name}</p>  {/* nested objects — chain each level */}
```

### With A Fallback Value — The ?? Operator

```jsx
<p>{user?.name ?? "Guest"}</p> // shows "Guest" if name is null or undefined
```

---

## The Golden Rules

```
1.  Context file must be .jsx not .js — it contains JSX
2.  Always call the hook → useUser() not useUser
3.  null = deliberate empty | undefined = accidental empty
4.  Use optional chaining → user?.name not user.name
5.  Components INSIDE Provider can access context. Outside cannot.
6.  Middleman components need nothing — no props, no hook
7.  Hooks never return JSX — that's a component's job
8.  Setter name must match across the entire chain
9.  Controlled forms → value + onChange on every input
10. e.preventDefault() stops the browser refreshing on form submit
11. Clear errors at the start of handleSubmit → setError(null)
12. Only expose in value what components actually need
```

---

## Import Path Reference

```
From components/ → hooks/    ../hooks/useUser
From components/ → context/  ../context/UserContext
From src/        → anywhere  ./folder/file
```

`./` = current folder | `../` = up one level

---

## Checklist

```
□ context/UserContext.jsx
  □ createContext(null) exported
  □ useState inside Provider — user, users, isLoading, error
  □ useEffect fetch on mount with [] dependency array
  □ response.ok guard after fetch
  □ finally block for setIsLoading(false)
  □ value exposes only what components need
  □ .jsx extension

□ hooks/useUser.js
  □ imports useContext + UserContext
  □ returns useContext(UserContext)

□ App.jsx
  □ wrapped with <UserProvider>
  □ PageDisplay handles isLoading, !user, and user states
  □ LoginForm centered separately from Dashboard layout

□ Components
  □ import from ../hooks/useUser
  □ destructure only what's needed
  □ optional chaining on all user data → user?.name
  □ nested objects chained → user?.company?.name

□ Controlled Forms
  □ useState for each input field
  □ value + onChange on every input
  □ e.preventDefault() in handleSubmit
  □ setError(null) at start of handleSubmit
  □ empty field guard before updating context
  □ email validation before updating context
  □ case insensitive email match → .toLowerCase()
  □ button disabled={isLoading}
  □ error displayed conditionally in JSX
```
