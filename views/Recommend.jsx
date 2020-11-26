const React = require("react");
const Layout = require("./Layout");
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Recommend(props) {
  return (
    <Layout>
      <h1>These are what we recommend</h1>

      <Container>
        <Row>
       
      {props.boards.map((el, i) => {
        return (
          <Col xs>
          <ol key={i}>
            <a href={`/detail/${el._id}`}>{el.name}</a>
            <img
                    className="board"
                    src="images/Razor-6ft6-matt-blue-fish.jpg"
                  />
          </ol>
          </Col>
        );
      })}
      </Row>
      </Container>

      <button>
        <a href="/dashboard">View All</a>
      </button>
    </Layout>
  );
}

module.exports = Recommend;
