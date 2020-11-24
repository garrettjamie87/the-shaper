const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      
      <a href="/auth/signup"
              className="signup-button">
      <button>Signup</button>
            </a>

            <a href="./auth/login"
              className="login-button">
      <button>Login</button>
            </a>

    </Layout>
  );
}

module.exports = Home;
