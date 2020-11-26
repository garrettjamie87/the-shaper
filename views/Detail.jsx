const React = require("react");
const Layout = require("./Layout");
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Detail(props) {
  // props = {
  //        surfboard: surfboard,
  //        user: user
  //      };

  console.log("props", props);
  return (
    <Layout>
      <h1>Detail</h1>
<Container>
<Row>
<Col> <img className="board" src="/images/Razor-6ft6-matt-blue-fish.jpg" /></Col>
  
  
  <Col>

      <ol>
        <li>{props.surfboard.description}</li>
        <li>{props.surfboard.color}</li>
        <li>{props.surfboard.height}</li>
        <li>{props.surfboard.width}</li>
        <li>{props.surfboard.thickness}</li>
        <li>{props.surfboard.volume}</li>
        <li>{props.surfboard.noseShape}</li>
        <li>{props.surfboard.taleShape}</li>
        <li>{props.surfboard.level}</li>
        <li>{props.surfboard.name}</li>
        <li>{props.surfboard.url}</li>
     
      </ol>
      <form action={`/${props.surfboard._id}`} method="post">
        <button type="submit">BUY THIS BOARD</button>
      </form>
     <br/>
      <a href="/create">
        <button type="submit">CREATE YOUR OWN</button>
      </a>

      {/* Delete button should be displayed only for user who created the surfboard... 
      we can check it and creat logic using the ternary operator */}
      {props.user.surfboard.includes(props.surfboard._id) ? (
        <form action={`/deletepost/${props.surfboard._id}`} method="get">
          <button type="submit">DELETE</button>
        </form>
      ) : null}
</Col>
                  </Row>
                  </Container>
     
    </Layout>
  );
}

module.exports = Detail;
