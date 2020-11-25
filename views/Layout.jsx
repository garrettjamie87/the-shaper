const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "theShaper"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      //navbar here

      <body>{props.children}
      
      
      
      
      
      </body>

      //scripts for bootstarpp
    </html>
  );
}

module.exports = Layout;
