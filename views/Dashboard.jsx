const React = require("react");
const Layout = require("./Layout");
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Dashboard(props) {
 
  return(
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>

    <Layout>
      <h1>Our Boards</h1>
      <p>{props.user.username}</p>
      <p>You have started a new session </p>
      <Container>
  <Row>
      {props.surfboards.map((el, i) =>{
    return (
     
    <Col xs> <ol key={i}>
<a href = {`/${el._id}/detail`}>{el.name}</a>
<img className='board' src="images/Razor-6ft6-matt-blue-fish.jpg"/>
</ol></Col>
    
 
     
    )
    
  } )}</Row>
</Container>
      
      <a href="/auth/logout">LOGOUT</a>
      <a href="/create">CREATE YOUR OWN</a>
      <button>
      <a href="/user/profile">MY PROFILE</a>
      </button>

    </Layout>
  </html>
 )}

module.exports = Dashboard;
