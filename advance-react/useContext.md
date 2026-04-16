# useContext Hook — Reference Guide

## What Is It?

`useContext` is a React hook that lets you share data across multiple components
without having to pass it as props through every layer.

Think of it like a **radio broadcast** — one station transmits a signal,
and any radio in range can tune in directly. No wires needed.

---

## The Problem It Solves — Prop Drilling

Without context, data has to be passed through every component layer
even if they don't use it. This is called **prop drilling**.

```
App (data lives here)
 └── Layout        ← doesn't need it, just passes it
      └── Section  ← doesn't need it, just passes it
           └── Card ← finally uses it
```

Every component in the middle is forced to carry data it has no interest in.
Context short-circuits this — `Card` can tune in directly.

---

## When Should You Use useContext?

✅ **Good use cases:**
- **Theme** — light/dark mode shared across the whole app
- **Current user** — logged in user's name, avatar, permissions
- **Language/locale** — app-wide language setting
- **Shopping cart** — item count accessible from navbar and checkout
- **Notifications** — alert state accessible from anywhere

❌ **Not the best fit:**
- Data only needed between a parent and one direct child → just use props
- Frequently changing data (every keystroke) → can cause performance issues,
  consider a state manager like Zustand or Redux instead
- Complex async data fetching → consider React Query or SWR instead

**Simple rule:** If the same piece of data needs to be read or changed
by three or more components that are not directly connected — reach for useContext.

---

## The 3-Part Mental Model

| Part | Analogy | What It Does |
|---|---|---|
| `createContext()` | The TV channel | Creates the data channel |
| `<Context.Provider>` | The broadcast tower | Transmits the data |
| `useContext()` | The TV tuning in | Receives the data |

---

## Example Folder Structure

```
src/
 ├── context/
 │    └── UserContext.jsx    ← creates context + Provider
 ├── hooks/
 │    └── useUser.js         ← custom hook to consume context
 └── components/
      └── ...your components
```

---

## Step 1 — Create the Context

```jsx
// context/UserContext.jsx
import { createContext, useState } from "react"

// 1. Create the channel with a sensible default value
export const UserContext = createContext(null)

// 2. Create the Provider — this holds your shared state
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
```

**Key points:**
- `createContext()` creates the channel — pass a sensible default value
- The Provider holds the **shared state** that any component can access
- `value={{ user, setUser }}` is what gets broadcast — include both the
  data AND the function to change it

---

## Step 2 — Create the Custom Hook

```jsx
// hooks/useUser.js
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export function useUser() {
  return useContext(UserContext)
}
```

**Why wrap it in a custom hook?**
- Components only need one import instead of two
- Keeps the internals of context hidden from components
- Easy to add extra logic later without touching every component

---

## Step 3 — Wrap Your App with the Provider

```jsx
// App.jsx
import { UserProvider } from "./context/UserContext"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  )
}
```

**Key point:** Anything wrapped inside the Provider can access the shared data.
Anything outside cannot. Wrap at the highest level that needs it.

---

## Step 4 — Consume Context in Any Component

No props needed — any component just calls the custom hook directly.

```jsx
// A component that only READS the data
import { useUser } from "../hooks/useUser"

function Navbar() {
  const { user } = useUser()

  return (
    <nav>
      <p>Welcome, {user?.name}</p>
    </nav>
  )
}
```

```jsx
// A component that READS and CHANGES the data
import { useUser } from "../hooks/useUser"

function LogoutButton() {
  const { setUser } = useUser()

  return (
    <button onClick={() => setUser(null)}>
      Log Out
    </button>
  )
}
```

**Rule of thumb:**
```
{ data }           → components that only display the data
{ data, setData }  → components that can also change it
```

---

## Before vs After

```jsx
// ❌ BEFORE — prop drilling
function App() {
  const [user, setUser] = useState(null)
  return <Dashboard user={user} setUser={setUser} />
}

function Dashboard({ user, setUser }) {  // doesn't use user
  return <Navbar user={user} />          // just passing it along
}

function Navbar({ user }) {              // finally uses it
  return <p>Welcome, {user?.name}</p>
}
```

```jsx
// ✅ AFTER — useContext
function App() {
  return (
    <UserProvider>       {/* broadcasts user data */}
      <Dashboard />      {/* no props needed */}
    </UserProvider>
  )
}

function Dashboard() {
  return <Navbar />      {/* no props needed */}
}

function Navbar() {
  const { user } = useUser()   {/* tunes in directly */}
  return <p>Welcome, {user?.name}</p>
}
```

---

## The 4-Step Checklist

```
1. Create the context and Provider  →  context/YourContext.jsx
2. Create the custom hook           →  hooks/useYourHook.js
3. Wrap your app with the Provider  →  App.jsx
4. Call the hook in any component   →  any component that needs the data
```

---

## Quick Rules to Remember

- Shared state lives in the **context file**, not `App.jsx`
- The Provider wraps everything that needs access to the data
- Components that only **read** → destructure `{ data }`
- Components that **change** → destructure `{ data, setData }`
- Middleman components need **nothing** — no props, no hook
- Context file must use `.jsx` extension if it contains JSX
