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
<Col> <img id="board-detail" src="/images/Razor-6ft6-matt-blue-fish.jpg" /></Col>
  
  
  <Col>

  <ol>
        {props.surfboard.description === undefined ? null : (
          <li>{props.surfboard.description}</li>
        )}
        {props.surfboard.color === undefined ? null : <li>{props.surfboard.color}</li>}
        {props.surfboard.height === undefined ? null : (
          <li>{props.surfboard.height}</li>
        )}
        {props.surfboard.width === undefined ? null : <li>{props.surfboard.width}</li>}
        {props.surfboard.thickness === undefined ? null : (
          <li>{props.surfboard.thickness}</li>
        )}
        {props.surfboard.volume === undefined ? null : (
          <li>{props.surfboard.volume}</li>
        )}
        {props.surfboard.noseShape === undefined ? null : (
          <li>{props.surfboard.noseShape}</li>
        )}
        {props.surfboard.taleShape === undefined ? null : (
          <li>{props.surfboard.taleShape}</li>
        )}
        {props.surfboard.level === undefined ? null : <li>{props.surfboard.level}</li>}
        {props.surfboard.name === undefined ? null : <li>{props.surfboard.name}</li>}
      </ol>
   {props.user.surfboard.includes(props.surfboard._id) ? null : (
        <form action={`/${props.surfboard._id}`} method="post">
          <button type="submit">BUY</button>
        </form>
      )}
      {props.user.surfboard.includes(props.surfboard._id) ? null : (
        <a href="/create">
          <button type="submit">CREATE</button>
        </a>
      )}
       {/* Delete button should be displayed only for user who created the surfboard... 
      we can check it and creat logic using the ternary operator */}
      {props.user.surfboard.includes(props.surfboard._id) && props.surfboard.author !== null ? (
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
