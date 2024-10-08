import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/brewcoffeee");
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="landing-page"
    >
      <div className="container-fluid p-0">
        <motion.div className="carousel-section">
          <Carousel className="carousel-section">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-title">Welcome to RetroBrew</h3>
                <p className="carousel-text">
                  Experience the best coffee in town
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://images.unsplash.com/photo-1536319229365-83318cdc7b83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-title">Quality Beans</h3>
                <p className="carousel-text">
                  Handpicked beans from around the world
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-title">Cozy Ambiance</h3>
                <p className="carousel-text">
                  Relax and enjoy your coffee in our cozy environment
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </motion.div>

        <motion.Container
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="welcome-section text-center my-5"
        >
          <p className="welcome-text lead">
            At RetroBrew, we bring you the finest coffee experience. Whether
            you're looking for a place to relax, work, or catch up with friends,
            we have the perfect ambiance for you.
          </p>
        </motion.Container>

        <Container className="featured-coffees-section my-5">
          <Row className="d-flex justify-content-center">
            <Col md={6} lg={4} className="mb-4 d-flex">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              >
                <Card className="featured-coffee-card flex-fill">
                  <Card.Img
                    variant="top"
                    src="images/espresso.png"
                    className="featured-coffee-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="featured-coffee-title">
                      Espresso
                    </Card.Title>
                    <Card.Text className="featured-coffee-text">
                      A rich and strong coffee to kickstart your day.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={handleLearnMore}
                      className="featured-coffee-btn mt-auto"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={4} className="mb-4 d-flex">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
              >
                <Card className="featured-coffee-card flex-fill">
                  <Card.Img
                    variant="top"
                    src="images/Latte.png"
                    className="featured-coffee-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="featured-coffee-title">
                      Latte
                    </Card.Title>
                    <Card.Text className="featured-coffee-text">
                      Smooth and creamy, perfect for a relaxing break.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={handleLearnMore}
                      className="featured-coffee-btn mt-auto"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={4} className="mb-4 d-flex">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.9 }}
              >
                <Card className="featured-coffee-card flex-fill">
                  <Card.Img
                    variant="top"
                    src="images/Cappuccino.png"
                    className="featured-coffee-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="featured-coffee-title">
                      Cappuccino
                    </Card.Title>
                    <Card.Text className="featured-coffee-text">
                      A perfect blend of coffee and frothy milk.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={handleLearnMore}
                      className="featured-coffee-btn mt-auto"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>

        <Container className="testimonials-section text-center my-5">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="testimonials-title"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
            className="testimonials-lead lead"
          >
            Hear from our happy customers
          </motion.p>
          <Row className="d-flex justify-content-center">
            <Col md={6} lg={4} className="mb-4 d-flex">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.9 }}
                  
              >
                <Card className="testimonial-card flex-fill p-3">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-text">
                        "RetroBrew is my favorite coffee shop! The coffee is
                        amazing and the atmosphere is perfect for getting work
                        done."
                      </p>
                      <footer className="blockquote-footer">
                        <small className="testimonial-footer text-muted">
                          John Doe <cite title="Source Title">via Yelp</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={4} className="mb-4 d-flex">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
               
              >
                <Card className="testimonial-card flex-fill p-3">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-text">
                        "I love coming here with my friends. The lattes are to
                        die for and the staff is super friendly."
                      </p>
                      <footer className="blockquote-footer">
                        <small className="testimonial-footer text-muted">
                          Jane Smith{" "}
                          <cite title="Source Title">via Google Reviews</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={4} className="mb-4 d-flex">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
              >
                <Card className="testimonial-card flex-fill p-3">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-text">
                        "Best coffee shop in town! Highly recommend their
                        espresso."
                      </p>
                      <footer className="blockquote-footer">
                        <small className="testimonial-footer text-muted">
                          Alex Johnson{" "}
                          <cite title="Source Title">via TripAdvisor</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>

        <Container className="cta-section text-center my-5">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="cta-title"
          >
            Join Our Coffee Community
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
            className="cta-text lead"
          >
            Contact us for our newsletter to stay updated with our latest offers
            and events.
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
            className="cta-btn-container"
          >
            <Button variant="primary" onClick={() => navigate("/contact")} className="cta-btn">
              Contact Us
            </Button>
          </motion.div>
        </Container>
        <Footer />
      </div>
    </motion.div>
  );
};

export default LandingPage;
