// Helper function to check valid form inputs.
export const validForm = () => {
  return (
    firstName && validateEmail(email) && password.value.length >= 5 && role !== "role"
  );

};
// Helper function for form submission
export const handleSubmit = (e) => {
  e.preventDefault()
  alert("Account created")
  clearForm()
}
// Helper function for check email input contains "@" 
export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
// Helper function for clearing form inputs
export const clearForm = () => {
  setFirstName('')
  setLastName('')
  setEmail('')
  setPassword({ value: "", isTouched: false, })
  setRole("role")
}
