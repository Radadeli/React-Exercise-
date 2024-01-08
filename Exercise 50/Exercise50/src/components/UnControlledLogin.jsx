import "./UnControlledLogin.css"
export function UnControlledLogin() {
 function handleFormSubmit (event){
    event.preventDefault()
 
    // const username = event.target.elements.namedItem('username').value
    // const password = event.target.elements.namedItem('password').value
    // const session = event.target.elements.namedItem('session').checked

        const formData = new formData(event.target)
    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        session: formData.get('session') === 'on' ? true : false,
    }
    console.log(data)
}

    return (
        <form className="uncontrolledform" onSubmit={handleFormSubmit}>
      <input className="w-60 border-2" placeholder="Your name" name="username" type="text" />
      <input className="w-60 border-2" placeholder="Password" name="password" type="password" />
      <input className="w-60" name="remember" type="checkbox" />
      <button className="w-12 text-green-950 font-bold">Login</button>
      <button className="w-12 text-green-950 font-bold" type="reset">Reset</button>
    </form>
    )
}

export default UnControlledLogin;