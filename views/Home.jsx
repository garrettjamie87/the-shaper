const React = require("react");

function Home() {
  return (

    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

<div className='homepage'>
   <div className='form-info'>
    <h1>Home Page</h1>
      
      <a href="/auth/signup">
      <button className="sign-up-button-home">Signup</button>
            </a>

            <a href="./auth/login">
      <button className="log-in-button-home">Login</button>
      
            </a>
            </div>
</div>
</html>
  );
}

module.exports = Home;
