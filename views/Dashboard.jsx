const React = require("react");
const Layout = require("./Layout");
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard(props) {
  return (
    <html lang="en">
    <head>
    <meta charSet="utf-8" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <Layout>
      <div className='container-one'>
      <div>
      <h1>Our Boards</h1>
      </div>
      <div>
      <p>Hey {props.user.username}</p>
      </div>
      </div>
      <Container>
        <Row>
          {props.surfboards.map((el, i) => {
            return (
              <Col xs>
                {" "}
                <ol key={i}>
                  <a href={`/detail/${el._id}`}>{el.name}
                  <img
                    className="board"
                    src= {el.url}
                  />
                  </a>
                </ol>
              </Col>
            );
          })}
        </Row>
      </Container>

<div className = 'footer-buttons'>
      <a className='footer-links' href="/auth/logout">LOGOUT</a>
      <a className='footer-links' href="/create">CREATE YOUR OWN</a>
      <button>
        <a className ='footer-link' href="/user/profile">MY PROFILE</a>
      </button>
      </div>
    </Layout>
    </html>
  );
}

module.exports = Dashboard;
