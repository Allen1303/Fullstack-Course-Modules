
// import { useState } from 'react'
const ControlForm = () => {
  return (
    <div className="form__container">
      <form>
        <fieldset>
          <h2>Sign Up Form</h2>
          <div className="field"><label>First name:<sup>*</sup><input type="text" /></label></div>
          <div className="field"><label>Last name:<sup></sup><input type="text" /></label></div>
          <div className="field"><label>Email name:<sup>*</sup><input type="email" /></label></div>
          <div className="field"><label>Password<sup>*</sup><input type="password" /></label></div>
          <div className="field"><label htmlFor="">Role<sup>*</sup></label>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <button type="submit">Create Account</button>
        </fieldset>
      </form >
    </div>
  );
}
export default ControlForm
