const React = require("react");
const Layout = require("./Layout");
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

function Recommend(props) {
  return (
    <html lang="en">
     <head>
     <meta charSet="utf-8" />
     <link rel="stylesheet" href="/stylesheets/style.css" />
     </head>
    <Layout>

      <h3 className='quote'>"Create your own board <br/> or pick one of ours"</h3>
      <img className='suufbord' src="images/image-test.jpg"/>

<div className='recko-title'>
      <h1 className='recko-text'>Our Recommendations</h1>
      </div>


      <Container className="reck-con wrap-flex">
        <Row>
       
      {props.boards.map((el, i) => {
        return (

          
          <Col>
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
      <Button className = 'view-all' variant="secondary" size="lg" block>
      <a  className = 'letra'   href="/dashboard">View All</a>
  </Button>
     
    </Layout>
    </html>
  );
}

module.exports = Recommend;
