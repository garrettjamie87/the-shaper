const React = require('react');
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function NavbarContainer (){
return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/dashboard">The-Shaper</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
          
    </Nav>
    <Nav>
      <Nav.Link href="/user/Profile">My Profile</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Nav.Link href="/dashboard">Home</Nav.Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}



module.exports = NavbarContainer;