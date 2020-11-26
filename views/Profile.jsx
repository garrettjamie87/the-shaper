const React = require("react");
const Layout = require("./Layout");

function Profile(props) {
  return (
   <div className = 'my-profile'>
   <html lang="en"/>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <Layout>
      <h1> My Profile </h1>

      <p> {props.user.username}</p>
      <p> {props.user.height}</p>
      <p> {props.user.weight}</p>
      <p> {props.user.username}</p>

      <ul>
        {props.user.surfboard.map((surfObj) => {
          return (
            <a href={`/detail/${surfObj._id}`}>
              <li>
                <p>{surfObj.name}</p>
                <img src={surfObj.url} alt="surboard image" />
              </li>
            </a>
          );
        })}
      </ul>
      <button>
        <a href="/user/edituser">Edit my profile</a>
      </button>
    </Layout>
    </div>
  );
}

module.exports = Profile;
