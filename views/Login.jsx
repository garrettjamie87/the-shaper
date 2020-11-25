const React = require('react');


function Login (props) {
  return(
     <html lang="en">
     <head>
     <meta charSet="utf-8" />
     <link rel="stylesheet" href="/stylesheets/style.css" />
     </head>

<div className='login-form'>
<div className='form-info'>
<h1>LOG IN</h1>
     
      <form action="/auth/login" method="POST">
        <label>Username</label>
        <br />
        <input type="text" name="username" placeholder="Your username" /><br/>

        <label>Password</label>
        <br />
        <input type="password" name="password" /><br/>

        <button className='log-in-button' type="submit">Login</button>
      

      {
        props.errorMessage 
          ? <div className="error-message"> {props.errorMessage}</div>
          : null
      }

      <p className="account-message">
        Don't have an account? <a href="/auth/signup">Sign up</a>
      </p>
    </form>
    </div>
    </div>
    </html>
  )}



module.exports = Login;