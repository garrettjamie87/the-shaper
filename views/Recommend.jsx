const React = require("react");
const Layout = require("./Layout");

function Recommend(props) {
 return(
    <Layout>
    
      <h1>These are what we recommend</h1>
      {props.boards.map((el, i) => {
    return (
      <ol key={i}>
<a href = {`/${el._id}/detail`}>{el.name}</a>
</ol>
    )
  })}
     
      <button>
      <a href="/Dashboard">View All</a>
      </button>

    </Layout>
  
 )}

module.exports = Recommend;
