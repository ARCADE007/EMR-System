import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class LoginNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }
    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link} >
                                <img
                                    alt="..."
                                    src="https://i.pinimg.com/originals/4f/60/30/4f60305f48b01e05db6b53083abf71dd.png"
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src="https://i.pinimg.com/originals/4f/60/30/4f60305f48b01e05db6b53083abf71dd.png"
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>


                                <NavLink
                                    className="nav-link-icon"
                                    href="https://github.com/ARCADE007/EMR-System/tree/main/client#readme"
                                    target="_blank"
                                >
                                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                                    <span className="nav-link-inner--text light " style={{color:"rgb(255,250,250,0.8)"}}>
                                        About
                        </span>
                                </NavLink>


                                <Nav className="align-items-lg-center ml-lg-auto" navbar>

                                    <NavItem>
                                        <NavLink
                                            style={{color:"lightblue"}}
                                            className="nav-link-icon"
                                            href="https://www.instagram.com/vineet_ks/?igshid=18vwmivf4c60d"
                                            id="tooltip356693867"
                                            target="_blank"
                                        >
                                            <i className="fa fa-instagram" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Instagram 
                        </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Reach us on Instagram(Vineet)
                      </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{color:"pink"}}
                                            className="nav-link-icon"
                                            href="https://www.instagram.com/__oblivion___/"
                                            id="tooltip356693863"
                                            target="_blank"
                                        >
                                            <i className="fa fa-instagram" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Instagram 
                        </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693863">
                                            Reach us on Instagram(Priya)
                      </UncontrolledTooltip>
                                    </NavItem>
                                    
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://mailto:sharma24vineet@gmail.com"
                                            id="tooltip112445449"
                                            target="_blank"
                                        >
                                            <i className="fa fa-envelope" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Mail
                        </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip112445449">
                                            Contact us on Mail
                      </UncontrolledTooltip>
                                    </NavItem>

                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default LoginNavbar;