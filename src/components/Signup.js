import Button from "./Button"

const Signup = () => {
  return (
    <div className = "container">
      <h2>Sign Up</h2>
      <h3>so that you can start finding your buddies!</h3>
      <form className = "form">
        <label htmlFor="userName" >What's your name?</label>
          <input
          type = "text"
          name = "userName"
          id = "userName"
          />
          <label htmlFor="password" >What password would you like?</label>
          <input
          type = "password"
          name = "password"
          id = "password"
          />
          <Button link="#">Sign up and log in</Button>
      </form>
    </div>
  );
};

export default Signup;