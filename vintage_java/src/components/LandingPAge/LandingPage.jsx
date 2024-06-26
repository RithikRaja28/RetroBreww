import React from "react";
import Navbar from "../Navbar/Navbar";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const LandingPage = () => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="container-fluid p-0">
        <div className="row flex-grow-1">
          <div className="col-12 p-0">
            {/* Carousel Section */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?coffee"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Welcome to RetroBrew</h3>
                  <p>Experience the best coffee in town</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?coffee-beans"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Quality Beans</h3>
                  <p>Handpicked beans from around the world</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x600/?coffee-shop"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Cozy Ambiance</h3>
                  <p>Relax and enjoy your coffee in our cozy environment</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* Welcome Section */}
            <Container className="my-5">
              <Row className="text-center">
                <Col>
                  <h2>Welcome to RetroBrew</h2>
                  <p className="lead">
                    At RetroBrew, we bring you the finest coffee experience.
                    Whether you're looking for a place to relax, work, or catch
                    up with friends, we have the perfect ambiance for you.
                  </p>
                </Col>
              </Row>
            </Container>

            {/* Featured Coffees Section */}
            <Container className="my-5">
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://source.unsplash.com/400x300/?espresso"
                    />
                    <Card.Body>
                      <Card.Title>Espresso</Card.Title>
                      <Card.Text>
                        A rich and strong coffee to kickstart your day.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://source.unsplash.com/400x300/?latte"
                    />
                    <Card.Body>
                      <Card.Title>Latte</Card.Title>
                      <Card.Text>
                        Smooth and creamy, perfect for a relaxed afternoon.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://source.unsplash.com/400x300/?cappuccino"
                    />
                    <Card.Body>
                      <Card.Title>Cappuccino</Card.Title>
                      <Card.Text>
                        A perfect blend of coffee and frothy milk.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

            {/* Testimonials Section */}
            <Container className="my-5">
              <Row className="text-center">
                <Col>
                  <h2>What Our Customers Say</h2>
                  <p className="lead">Hear from our happy customers</p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Card className="p-3">
                    <Card.Body>
                      <blockquote className="blockquote mb-0 card-body">
                        <p>
                          "RetroBrew is my favorite coffee shop! The coffee is
                          amazing and the atmosphere is perfect for getting work
                          done."
                        </p>
                        <footer className="blockquote-footer">
                          <small className="text-muted">
                            John Doe <cite title="Source Title">via Yelp</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="p-3">
                    <Card.Body>
                      <blockquote className="blockquote mb-0 card-body">
                        <p>
                          "I love coming here with my friends. The lattes are to
                          die for and the staff is super friendly."
                        </p>
                        <footer className="blockquote-footer">
                          <small className="text-muted">
                            Jane Smith{" "}
                            <cite title="Source Title">via Google Reviews</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="p-3">
                    <Card.Body>
                      <blockquote className="blockquote mb-0 card-body">
                        <p>
                          "Best coffee shop in town! Highly recommend their
                          espresso."
                        </p>
                        <footer className="blockquote-footer">
                          <small className="text-muted">
                            Alex Johnson{" "}
                            <cite title="Source Title">via TripAdvisor</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
