
import { useState } from 'react'
import { validateEmail } from "./formUtils"
//Helper function for password Error Message
const PasswordError = () => {
  return (
    <p className="error__message">Password should be at least 5 characters</p>

  )
}
const ControlForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({ value: "", isTouched: false })
  const [role, setRole] = useState('role')
  // Helper function to check valid form inputs.
  const isvalidForm = () => {
    return (
      firstName && validateEmail(email) && password.value.length >= 5 && role !== "role"
    );
  };
  // Helper function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created");
    clearForm();
  }

  // Helper function for clearing form inputs
  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({ value: "", isTouched: false, })
    setRole("role")
  }

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up Form</h2>
          <div className="field"><label>First name:<sup>*</sup></label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
          <div className="field"><label>Last name:<sup></sup></label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
          <div className="field"><label>Email name:<sup>*</sup></label><input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="field"><label>Password<sup>*</sup></label><input type="password" placeholder="password" value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} onBlur={() => setPassword({ ...password, isTouched: true })} />
            {password.isTouched && password.value.length < 5 ? (<PasswordError />) : null}
          </div>
          <div className="field"><label htmlFor="">Role<sup>*</sup></label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="Frontend Dev">Frontend Dev</option>
              <option value="Backend Dev">Backend Dev</option>
              <option value="Fullstack Dev">Fullstack Dev</option>
            </select>
          </div>
          <button type="submit" disabled={!isvalidForm()}>Create Account</button>
        </fieldset>
      </form >
    </div>
  );
}
export default ControlForm
