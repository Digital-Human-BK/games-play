import { useHistory } from 'react-router-dom';
//Pass in history object to redirect using the component history prop
//or import history hook for non-react-router components and push state
//in the global history object this way
//              {history}
const Login = () => {
  let historyHook = useHistory();
  
  const loginHandler = (ev) => {
    ev.preventDefault();

    //TODO: Login
    // history.push('/catalog');
    historyHook.push('/');
  };

  return (
    <section id='login-page' className='auth'>
      <form id='login' onSubmit={loginHandler}>
        <div className='container'>
          <div className='brand-logo'></div>
          <h1>Login</h1>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Sokka@gmail.com'
          />

          <label htmlFor='login-pass'>Password:</label>
          <input type='password' id='login-password' name='password' />
          <input type='submit' className='btn submit' value='Login' />
          <p className='field'>
            <span>
              If you don't have profile click <a href='#'>here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
