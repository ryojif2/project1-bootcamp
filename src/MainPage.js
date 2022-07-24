import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.onTypeOfWorksChange(e.target.value);
  };

  render() {
    return (
      <Container className="Black-background">
        {/* <p>this is the main page</p> */}
        <Container className="Blue-background">
          {/* <div className="main-title-top"> </div> */}
          <Container className="main-title + Blue-background">
            <h1 className="justify-end">Building Regulation Checklist</h1>
          </Container>
          <Container className="main-catchline + Blue-background">
            <h4 className="text-center-padding + justify-text">
              Easily track regulations for your project and maintain a birds-eye
              view of possible game changing conditions.
            </h4>
          </Container>
        </Container>
        <Row className="Black-background">
          <Container className="get-started + Black-background">
            <h4 className="text-center-padding + justify-text">
              Get started by choosing the type of works your project entails:
            </h4>
          </Container>
          <Container className="button-get-started + Black-background">
            <Row>
              <Col>
                <button
                  style={{
                    ...{ height: "165px" },
                    ...{ borderRadius: "20px" },
                  }}
                  value="A&A"
                  onClick={this.handleClick}
                >
                  Additions & Alterations
                </button>
              </Col>
              <Col>
                <button
                  style={{
                    ...{ height: "165px" },
                    ...{ borderRadius: "20px" },
                  }}
                  value="New Construction"
                  onClick={this.handleClick}
                >
                  New Construction
                </button>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}
