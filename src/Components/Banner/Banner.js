import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


function Banner() {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col>
                    <Card className="border border-4">
                        <Card.Body className="text-start px-3 pt-0">
                            <Card.Title className="mb-4 fs-4 fw-bold">Skills Matrix Abstract</Card.Title>
                            <Card.Text className="fs-5">lori utem  asdflkbasd as;oih asd;ioa ‘apsdf’paj dfpjad ‘paijsd fpj asdp;fj as’pij asdifj aoi;sjdf;oasdf ‘aklsdfio ajdsf;l;dlfkjasdkfnmlkfn. as;kfb;ajsdflnasn, </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;

