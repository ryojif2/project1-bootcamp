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
      <div className="Black-background">
        <div className="Blue-background">
          <div className="main-title + Blue-background">
            <h1 className="justify-end center-justified logo-font">
              <b>
                Code <i>A</i>
              </b>
            </h1>
          </div>
          <div className="main-catchline + Blue-background">
            <h4 className="text-center-padding + justify-text + center-justified">
              Construction Code Checklist for Architects
            </h4>
          </div>
        </div>
        <Row g-0 className="Black-background">
          <div className="get-started + Black-background">
            <h4 className="text-center-padding + justify-text">
              {/* Get started by choosing the type of works your project entails: */}
              Easily track regulations for your project and maintain a birds-eye
              view of possible show stoppers.
            </h4>
          </div>
          <div className="button-get-started + Black-background">
            <Row>
              <Col>
                <button
                  style={{
                    ...{ height: "165px" },
                    ...{ borderRadius: "20px" },
                    ...{
                      width: "165px",
                    },
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
          </div>
        </Row>
      </div>
    );
  }
}
