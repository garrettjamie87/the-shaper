const React = require('react');
const Layout = require('./Layout');


function Profile (props) {
  const url = "user/edituser/?user_id=" + props.user.id
  return(
  
<Layout>
<h1> My Profile </h1>

<ol>
<li>  {props.user.username}</li>
<li>  {props.user.height}</li>
<li>  {props.user.weight}</li>     
<li>  {props.user.username}</li>
<li>  {props.user.surfboard}</li>





</ol>
<button>
<a href = {url}> 
Edit my profile</a>
</button>
    </Layout>
  )
}


module.exports = Profile;