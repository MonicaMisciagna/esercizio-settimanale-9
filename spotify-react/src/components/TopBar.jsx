import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainComp = () => {
  return (
    <Container fluid className="mainPage">
      <Row>
        <Col md={9} className="offset-md-3">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex my-4">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainComp;
