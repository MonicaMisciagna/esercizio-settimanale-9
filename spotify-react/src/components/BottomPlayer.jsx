import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const BottomPlayer = () => {
  return (
    <Container fluid className="bg-container pt-1 fixed-bottom ">
      <Row>
        <Col lg={10} offset-lg={2}>
          <Row className="playerControlsRow ">
            <Col
              className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row className="playerControlsRow">
                <Col>
                <a href="#">
                  <img
                    src="playerbuttons/Shuffle.png"
                    alt="shuffle"
                    className="playerControlsImg"
                  />
                </a>
                </Col>
                <Col>
                <a href="#">
                  <img
                    src="playerbuttons/Previous.png"
                    alt="shuffle"
                    className="playerControlsImg"
                  />
                </a>
                </Col>
                <Col>
                <a href="#">
                  <img
                    src="playerbuttons/Play.png"
                    alt="shuffle"
                    className="playerControlsImg"
                  />
                </a>
                </Col>
                <Col>
                <a href="#">
                  <img
                    src="playerbuttons/Next.png"
                    alt="shuffle"
                    className="playerControlsImg"
                  />
                </a>
                </Col>
                <Col>
                <a href="#">
                  <img
                    src="playerbuttons/Repeat.png"
                    alt="shuffle"
                    className="playerControlsImg"
                  />
                </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <ProgressBar
                className="progressBar"
                now={0}
                label="%(percent)s"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomPlayer;
