const React = require('react');
const Layout = require('./Layout');


function Profile (props) {
  return(
  
<Layout>
      <p className="account-message">
        Don't have an account? <a href="/auth/signup">Sign up</a>
      </p>
    </Layout>
  )
}


module.exports = Profile;