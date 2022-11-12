import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class GenerateSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  // Create a component for each "row".
  //do Object.entries on only states. Object.entries(this.props.randomObj)
  //object.entries to get the values of my state props.
  // Object.entries will take each key and value pair, and add into an array of objects.
  // Deconstruct the keys and values. [0] position for key and [1] position for value.
  // map through and pass to my component.

  render() {
    return (
      <Container className="requirement-summary">
        {this.props.childStates.typeOfWorks === "A&A" && (
          <div>
            <div className="requirement-summary-title">
              <h4 className="justify-end">Requirements Summary</h4>
            </div>
            <Container className="requirement-summary-text">
              <Row>
                <Col className="results-col">
                  Type of Works: <br />{" "}
                  <b> {this.props.childStates.typeOfWorks} </b>
                </Col>
                <Col className="results-col">
                  Maximum Storey: <br />{" "}
                  <b>{this.props.childStates.maxStorey} Storeys </b>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  Proposed GFA: <br />{" "}
                  <b>{this.props.childStates.proposedGFA} m2 </b>
                </Col>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.treeConserv === true
                          ? true
                          : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Tree Conservation </label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.basementAttic === true
                          ? true
                          : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Basement/Attic</label>
                  </form>
                </Col>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.lift === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Lift</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.glassBarr === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Glass Barrier</label>
                  </form>
                </Col>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.addiGFA === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Additional GFA</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.strucChanges === true
                          ? true
                          : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Structural Changes</label>
                  </form>
                </Col>
                <Col className="results-col">
                  <form>
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.extFacade === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Ext Facade Changes</label>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {this.props.childStates.typeOfWorks === "New Construction" && (
          <div>
            <div className="requirement-summary-title">
              <h4 className="justify-end">Requirements Summary</h4>
            </div>
            <Container className="requirement-summary-text">
              <Row>
                <Col className="results-col">
                  Type of Works: <br />
                  <b> {this.props.childStates.typeOfWorks} </b>
                </Col>
                <Col className="results-col">
                  Building Type: <br />{" "}
                  <b>{this.props.childStates.buildingType} </b>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  Maximum Storey: <br />
                  <b> {this.props.childStates.maxStorey} Storeys </b>
                </Col>
                <Col className="results-col">
                  Proposed GFA: <br />{" "}
                  <b>{this.props.childStates.proposedGFA} m2 </b>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  Frontage Width: <br />{" "}
                  <b> {this.props.childStates.frontageWidth} m </b>
                </Col>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.treeConserv === true
                          ? true
                          : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Tree Conservation </label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.gcba === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; GCBA Zone</label>
                  </form>
                </Col>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.belowMPL === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Areas Below MPL</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.basementAttic === true
                          ? true
                          : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Basement/Attic</label>
                  </form>
                </Col>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.solarPanel === true
                          ? true
                          : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Solar Panel</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.lift === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Lift</label>
                  </form>
                </Col>
                <Col className="results-col">
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={
                        this.props.childStates.glassBarr === true ? true : false
                      }
                      disabled={true}
                    ></input>
                    <label>&nbsp; Glass Barrier</label>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Container>
    );
  }
}
