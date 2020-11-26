const React = require("react");
const Layout = require("./Layout");

function Create(props) {
  return (
<div>
    <html lang="en"/>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <Layout>
<h1 className='create-title'>CREATE YOUR OWN BOARD</h1>

      <form className= 'create-form' action="/create" method="POST">
      <label for="name">name: </label>
        <input type="text" name="name" /> <br/>

        <label for="color">color: </label>
        <select id="color" name="color">
        <br/>
          <option value="yellow">'yellow'</option>
          <option value="white">'white'</option>
          <option value="black">'black'</option>
        </select>
        <br />

        <label for="height">height </label>
        <select id="height" name="height">
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>

        <br />

        <label for="width">width: </label>
        <select id="width" name="width">
          <option value="width">"One width to rule them all"</option>
        </select>

        <br />

        <label for="thickness">thickness </label>
        <select id="thickness" name="thickness">
          <option value="thickness">"thickShit"</option>
        </select>

        <br />

        <label for="volume">volume: </label>
        <select id="volume" name="volume">
          <option value="volume">"I'm above 160"</option>
        </select>

        <br />

        <label for="noseShape">noseShape: </label>
        <select id="noseShape" name="noseShape">
          <option value="rounded">"rounded"</option>
          <option value="pointed">"pointed"</option>
        </select>

        <br />

        <label for="taleShape">taleShape: </label>
        <select id="taleShape" name="taleShape">
          <option value="rounded">"rounded"</option>
          <option value="square">"square"</option>
          <option value="triangle">"triangle"</option>
        </select>

        <br />

        <button type="submit">CREATE</button>
      </form>
    </Layout>
    </div>
  );
}

module.exports = Create;
