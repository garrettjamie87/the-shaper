const React = require("react");
const Layout = require("./Layout");
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile(props) {
  return (
   <div className = 'my-profile'>
   <html lang="en"/>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <Layout>
      <h1> My Profile </h1>

<Container>
<Row>
<Col>
      <p> {props.user.username}</p>
      <p> {props.user.height}</p>
      <p> {props.user.weight}</p>
      <p> {props.user.username}</p>
</Col>
<Col>
      <ul>
        {props.user.surfboard.map((surfObj) => {
          return (
            <a href={`/detail/${surfObj._id}`}>
              <li className='board-list'>
                <p>{surfObj.name}</p>
                <img className='profile-img' src={surfObj.url} alt="surboard image" />
              </li>
            </a>
          );
        })}
      </ul>
      </Col>
      </Row>
      </Container>
      <button>
        <a href="/user/edituser">Edit my profile</a>
      </button>
      
     
    </Layout>
    </div>
  );
}

module.exports = Profile;
