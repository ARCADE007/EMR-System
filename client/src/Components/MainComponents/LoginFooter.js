import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class LoginFooter extends React.Component {
  render() {
    return (
      <>
        <footer style={{ backgroundColor: "white" }} className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  About Us
                </h3>
                <h6 className=" mb-0 font-weight-light">
                  At EMR System, we are 2 employees dedicated to improving
                  together with our customers. Many professionals around the
                  globe - rely upon us for comprehensive clinical documentation,
                  along with solutions for telehealth, Population Health and
                  Patient Engagement.
                  <br />
                  <br />
                  Privately held, and driven by innovation and excellence, we
                  have a single focus - providing our customers with
                  secure,cloud-based solutions to their healthcare IT needs.
                </h6>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  color="instagram"
                  className="btn-icon-only rounded-circle ml-3"
                  href="https://www.instagram.com/vineet_ks/?igshid=18vwmivf4c60d"
                  id="tooltip356663867"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{ color: "white" }} className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip356663867">
                  Reach us on Instagram(Vineet)
                </UncontrolledTooltip>

                <Button
                  color="instagram"
                  className="btn-icon-only rounded-circle ml-3"
                  href="https://www.instagram.com/vineet_ks/?igshid=18vwmivf4c60d"
                  id="tooltip356693853"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{ color: "white" }} className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip356693853">
                  Reach us on Instagram(Priya)
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-3"
                  color="github"
                  href="http://github.com/ARCADE007/EMR-System"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{ color: "white" }} className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
                <Button
                  color="facebook"
                  className="btn-icon-only rounded-circle ml-3"
                  href="https://www.linkedin.com/in/priya-kaushik-1a04501a2/"
                  id="tooltip3566543853"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{ color: "white" }} className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip3566543853">
                  Reach us on Linkedin (Priya)
                </UncontrolledTooltip>
                <Button
                  color="facebook"
                  className="btn-icon-only rounded-circle ml-3"
                  href="https://www.linkedin.com/in/vineet-sharma-627b8a195/"
                  id="tooltip356123867"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{ color: "white" }} className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip356123867">
                  Reach us on Linkedin (Vineet)
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Col
              md="6"
              className=" align-items-center justify-content-md-between"
            >
              <div className=" copyright">
                © {new Date().getFullYear()} <span>EMR System </span>
                <span>-- Made by Vineet Sharma & Priya Kaushik --</span>
              </div>
            </Col>
          </Container>
        </footer>
      </>
    );
  }
}

export default LoginFooter;
