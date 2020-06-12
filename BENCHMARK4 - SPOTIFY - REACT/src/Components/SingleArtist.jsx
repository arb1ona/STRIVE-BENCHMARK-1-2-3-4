import React, { Component } from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap'

class SingleArtist extends Component {
    render() {
        return (
            <Row className="col-md-3 ">
                <Col>
                    <Card style={{ width: "15 %" }, { padding: "5 + %" }}>
                        <Card.Img src={this.props.item.image} style={{ padding: "0.65rem" }} />
                        <Card.Body>
                            <Card.Title>{this.props.item.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}
export default SingleArtist;