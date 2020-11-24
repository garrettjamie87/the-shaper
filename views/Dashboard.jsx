const React = require("react");
const Layout = require("./Layout");

function Dashboard(props) {
  const surfboards = props.surfboards.map(el =>{
    return (
      <ol>
<a href = {`/${el._id}/detail`}>{el.name}</a>
</ol>
    )
  })
  return (
    <Layout>
    <img src= 'https://res.cloudinary.com/dh2ungc1o/image/upload/v1606131648/moderrn-retro-longboard-noserider-single-green_gsbtbj.jpg' />
      <h1>Dashboard</h1>
      <p>WELCOME: {props.user.username}</p>
      <p>You have started a new session </p>
{surfboards}//if statment for null
      <a href="/auth/logout">LOGOUT</a>
      <a href="/create">CREATE YOUR OWN</a>

    </Layout>
  );
}

module.exports = Dashboard;
