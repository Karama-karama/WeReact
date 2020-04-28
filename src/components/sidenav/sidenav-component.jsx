import React from 'react';
import { Nav, Navbar, Form, FormControl, Container } from 'react-bootstrap';
import './sidenav.styles.scss';  
 const NavigationBar = () => (
    
     <Navbar expand="lg" variant="dark" bg="dark">
         <Navbar.Brand href="/">WeReact</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <div className='container'>
       <Nav className="ml-auto" >
          <Nav.Item><Nav.Link href='/projet'>Projet</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href='/equipe'>Equipe</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/calendrier'>Calendrier</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/document'>Document</Nav.Link></Nav.Item>
        </Nav>
        </div>
      </Navbar.Collapse>
     </Navbar>
    
  
);
 export default NavigationBar ;