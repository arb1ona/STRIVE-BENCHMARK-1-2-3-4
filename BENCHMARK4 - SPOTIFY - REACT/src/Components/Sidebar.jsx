import React from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";

const Sidebar = (props) => {
    return (
        <Container>
            <Row className="side-container">
                <Col className="navcolor  col-md-2" style={{ background: "#060C13" }}>
                    <Nav id="side-nav" className="side-nav-className" role="navigation">
                        <div>
                            <div className="logo-className mt-4 px-3"><img src="/assets/spotify_logo.png" alt="spotify logo" width="120px" /></div>
                            <ul className="sideNavLinks py-3">
                                <li>
                                    <div>
                                        <a className="ml-2" style={{ color: "#9A9A9A" }} onclick="sideSelectNav(event)" href="homepage.html">Home</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i class="fas fa-home"></i>
                                        <a className="ml-2" style={{ color: "#9A9A9A" }} onclick="sideSelectNav(event)" href="#">Search</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i class="fas fa-home"></i>
                                        <a className="ml-2" style={{ color: "#9A9A9A" }} onclick="sideSelectNav(event)" href="#">Library</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="bottomlist pb-5">
                            <ul className="bottom-ul">
                                <li id="Installnow" style={{ border: "#9A9A9A 2px solid" }, { color: "#9A9A9A" }}><i
                                    className="fas fa-download pr-3 pl-2"></i><span>
                                        Install App
                            </span></li>
                                <li className="bottom-li">
                                    <img src="/assets/girlclipart.png" alt="clipart" width="30px" className="girl pt-5" />
                                    <div className="username-class pl-2 mb-0" style={{ color: "#9A9A9A" }}>Username</div>

                                </li>
                            </ul>
                        </div>
                    </Nav>
                </Col>
            </Row>
        </Container >

    );
};

export default Sidebar