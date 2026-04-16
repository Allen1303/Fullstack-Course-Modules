// Login form to grand entry to the app
function LoginForm() {
  return (
    <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
      <fieldset>
        <div><label htmlFor="user-name">Name:</label><input className="w-full border border-slate-300 rounded-md p-2 text-sm" type="text" id="user-name" placeholder="enter name" /></div>
        <div><label htmlFor="email">Email:</label><input className="w-full border border-slate-300 rounded-md p-2 text-sm" type="email" placeholder="youremail@example.com" /></div>
        <button className="w-full bg-sky-400 text-white rounded-md p-2 mt-4 hover:bg-sky-600 cursor-pointer" type="submit">Sign in</button>
      </fieldset>
    </form>
  )
}
export default LoginForm
