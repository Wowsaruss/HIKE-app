import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Child extends React.Component {
    render() {
        return(
            <div>

                <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">HIKE APP</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Track</NavItem>
                            <NavItem eventKey={2} href="#">To Hike</NavItem>
                            <NavDropdown eventKey={3} title="Navigation" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Track Your Trails</MenuItem>
                            <MenuItem eventKey={3.2}>Trails to Hike</MenuItem>
                            <MenuItem eventKey={3.3}>Trails Hiked</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet"></link>

                <div>
                    <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link></div>

                <div className="App-header">
                    <img className="App-logo animated shake" className="pulse" src="https://lh3.googleusercontent.com/WEcmkSnm_lH7VwRC-r4O1b2bGMeDusyVEBKuDpfFu8lR3TC-Dzd7YP9Uw8YP_zvp4O4=w300" alt="" />
                    <h2 className="header-font animated infinite tada">HIKE!</h2>
                 </div>

            </div>
        )
    }
}
export default Child