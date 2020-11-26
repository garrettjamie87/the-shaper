const React = require("react");
const Layout = require("./Layout");

function Recommend(props) {
 return(
  <html lang="en">
  <head>
    <meta charSet="utf-8" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
  </head>
    <Layout>
    <div class = 'recommend'>
      <h1>Our Recommendations</h1>
      {props.boards.map((el, i) => {
    return (
      <ol key={i}>
<a href = {`/${el._id}/detail`}>{el.name}</a>
<img className='board' src="images/Razor-6ft6-matt-blue-fish.jpg"/>

</ol>
    )
  })}
     
      <button>
      <a href="/Dashboard">View All</a>
      </button>
      </div>

    </Layout>
  </html>
 )}

module.exports = Recommend;
