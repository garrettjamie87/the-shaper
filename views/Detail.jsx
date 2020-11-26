const React = require("react");
const Layout = require("./Layout");

function Detail(props) {
  // props = {
  //        surfboard: surfboard,
  //        user: user
  //      };

  console.log("props", props);
  return (
    <Layout>
      <h1>Detail</h1>

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
        <button type="submit">BUY</button>
      </form>

      <a href="/create">
        <button type="submit">CREATE</button>
      </a>

      {/* Delete button should be displayed only for user who created the surfboard... 
      we can check it and creat logic using the ternary operator */}
      {props.user.surfboard.includes(props.surfboard._id) ? (
        <form action={`/deletepost/${props.surfboard._id}`} method="get">
          <button type="submit">DELETE</button>
        </form>
      ) : null}
    </Layout>
  );
}

module.exports = Detail;
