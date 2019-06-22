import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import '../../styles/Header.css';

const Header = () =>  {
	
	return (
			<header className="header">
		      <Navbar expand="lg">
		        <Navbar.Brand>
		         	<span className="app-name">ILGate Postman WebUI</span>
		        </Navbar.Brand>
		           	<React.Fragment>
			        	<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			        	<Navbar.Collapse id="basic-navbar-nav">
				          	<Nav className="ml-auto ">
				          		<LinkContainer to="/dev">
				              		<NavItem>DEV</NavItem>
				            	</LinkContainer>
				            	<LinkContainer to="/sit">
				              		<NavItem>SIT</NavItem>
				            	</LinkContainer>
				            	<LinkContainer to="/uat">
				              		<NavItem>UAT</NavItem>
				            	</LinkContainer>
				        	</Nav>
				        </Navbar.Collapse>
		        	</React.Fragment> 	
		      </Navbar>
		    </header>
	)  ;
}
  

export default Header;