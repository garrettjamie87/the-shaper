const React = require("react");
const Layout = require("./Layout");

function Dashboard(props) {
 
  return(
    <Layout>
      <h1>Our Boards</h1>
      <p>{props.user.username}</p>
      <p>You have started a new session </p>
      {props.surfboards.map((el, i) =>{
    
      <ol key={i}>
<a href = {`/${el._id}/detail`}>{el.name}</a>
</ol>
    
  })}
      <a href="/auth/logout">LOGOUT</a>
      <a href="/create">CREATE YOUR OWN</a>
      <button>
      <a href="/Profile">MY PROFILE</a>
      </button>

    </Layout>
  
 )}

module.exports = Dashboard;
