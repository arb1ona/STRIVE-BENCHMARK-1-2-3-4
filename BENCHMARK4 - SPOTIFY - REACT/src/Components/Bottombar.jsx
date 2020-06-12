import React from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";

const Bottombar = (props) => {
    return (
        <Container>
            <Row className="function-bar row">

                <Col className="first-section col-4">
                    <img src="/assets/bottompic.PNG" alt="" width="50px" />

                    <div className="playing-song">
                        <p>Song for my father</p>
                        <span className="songslist-span">Horace Silver</span>
                    </div>
                    <div className="functions-icons">
                        <i className="far fa-heart mr-3"></i>
                        <i className="fas fa-save"></i>
                    </div>


                    <div className="second-section col-sm-12 col-lg-4 justify-content-center">
                        <div className="second-section-icons justify-content-center">
                            <i className="fas fa-random" data-toggle="tooltip" data-placement="top" title="Shuffle"></i>
                            <i className="fas fa-backward ml-2" data-toggle="tooltip" data-placement="top" title="Backward"></i>
                            <i className="far fa-play-circle ml-2" data-toggle="tooltip" data-placement="top" title="Play"></i>
                            <i className="fas fa-forward ml-2" data-toggle="tooltip" data-placement="top" title="forward"></i>
                            <i className="fas fa-redo-alt ml-2" data-toggle="tooltip" data-placement="top" title="Repeat"></i>
                        </div>
                        <div className="custom-progress-bar mt-1">
                            <span className="mr-2">0:00</span>
                            <div className="horizontal-line ">
                            </div>
                            <span className="ml-2">7:00</span>
                        </div>

                    </div>
                    <div className="third-section col-4 d-flex justify-content-end">
                        <div className="third-section-icons">
                            <i className="fas fa-list-ul"></i>
                            <i className="fas fa-headphones"></i>
                            <i className="fas fa-volume-down"></i>
                        </div>
                        <div className="thirdsection-horizontal-line ml-1">

                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Bottombar