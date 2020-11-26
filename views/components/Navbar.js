const React = require('react');
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function NavbarContainer (){
return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className = "nav-bar">
  <Navbar.Brand href="/dashboard">The-Shaper</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
          
    </Nav>
    <Nav>
      <Nav.Link className='nav-links' href="/user/Profile">Profile</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Nav.Link href="/">Home</Nav.Link>
      </Nav.Link>
      <Nav.Link href="/auth/login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes"></Nav.Link>
      <Nav.Link href="/auth/signup">Sign up</Nav.Link>
      <Nav.Link eventKey={2} href="#memes"></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}



module.exports = NavbarContainer;