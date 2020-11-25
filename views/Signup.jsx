const React = require('react');



function Signup (props) {
  return(
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

<div className='sign-up-form'>
<h1>SIGN UP</h1>
      <form action="/auth/signup" method="POST">

      <label>Username: </label>
      <br />
      <input type="text" name="username" />
      <br />


      <label>Password: </label>
      <br />
      <input type="password" name="password" />
      <br />



<label for='level'>Choose Your Level: </label><br />
      <select id="level" name="level">
      <option value="SchoolBoy">'SchoolBoy'</option>
      <option value="Happy Medium">'Happy Medium'</option>
      <option value="Absolute-boss">'Absolute-boss'</option>
      </select>
<br/>
 
    
 
      <label for='weight'>Choose Your Weight: </label><br />
      <select id="weight" name="weight">
      <option value="60-70">60-70</option>
      <option value="70-80">70-80</option>
      <option value="80-90">80-90</option>
      <option value="90+">90+</option>
      </select>

<br/>
     
<label for='height'>Choose Your Height: </label><br />
      <select id="height" name="height">
      <option value="I'm above 160">"I'm above 160"</option>
      <option value="I'm above 170">"I'm above 170"</option>
      <option value="I'm above 180">"I'm above 180"</option>
      <option value="I'm a giant">"I'm a giant"</option>
      </select>

<br/> 

      <button type="submit">Sign Up</button>

      {
          props.errorMessage 
            ? <div className="error-message"> {props.errorMessage} </div>
            : null
        }
        <p className="account-message">
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </form>
    </div>
</html>
)}
        


module.exports = Signup;

