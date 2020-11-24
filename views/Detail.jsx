const React = require('react');
const Layout = require('./Layout');


function Detail(props){
  return(
    <Layout>
      <h1>Detail</h1>

      <ol>
      <li>{props.description}</li> 
      <li>{props.color}</li> 
      <li>{props.height}</li> 
      <li>{props.width}</li> 
      <li>{props.thickness}</li> 
      <li>{props.volume}</li> 
      <li>{props.noseShape}</li> 
      <li>{props.taleShape}</li> 
      <li>{props.level}</li> 
      <li>{props.name}</li> 
      <li>{props.url}</li> 
      </ol>

<form action = {`/${props._id}`} method = 'post'>

<button type = 'submit'>BUY</button> 
</form>

<a href='/create'>
<button type ='submit'>CREATE</button> 
</a>

    </Layout>
  )
}


module.exports = Detail;