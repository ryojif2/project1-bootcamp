import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class GenerateSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Container className="requirement-summary">
        {this.props.typeOfWorks === "A&A" && (
          <div>
            <div className="requirement-summary-title">
              <h4 className="justify-end">Requirements Summary</h4>
            </div>
            <Container className="requirement-summary-text">
              <Row>
                <Col>
                  Type of Works: <br /> <b> {this.props.typeOfWorks} </b>
                </Col>
                <Col>
                  Maximum Storey: <br /> <b>{this.props.maxStorey} Storeys </b>
                </Col>
              </Row>
              <Row>
                <Col>
                  Proposed GFA: <br /> <b>{this.props.proposedGFA} m2 </b>
                </Col>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.treeConserv === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Tree Conservation </label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.basementAttic === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Basement/Attic</label>
                  </form>
                </Col>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.lift === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Lift</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.glassBarr === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Glass Barrier</label>
                  </form>
                </Col>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.addiGFA === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Additional GFA</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.strucChanges === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Structural Changes</label>
                  </form>
                </Col>
                <Col>
                  <form>
                    <input
                      type="checkbox"
                      checked={this.props.extFacade === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Ext Facade Changes</label>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {this.props.typeOfWorks === "New Construction" && (
          <div>
            <div className="requirement-summary-title">
              <h4 className="justify-end">Requirements Summary</h4>
            </div>
            <Container className="requirement-summary-text">
              <Row>
                <Col>
                  Type of Works: <br />
                  <b> {this.props.typeOfWorks} </b>
                </Col>
                <Col>
                  Building Type: <br /> <b>{this.props.buildingType} </b>
                </Col>
              </Row>
              <Row>
                <Col>
                  Maximum Storey: <br />
                  <b> {this.props.maxStorey} Storeys </b>
                </Col>
                <Col>
                  Proposed GFA: <br /> <b>{this.props.proposedGFA} m2 </b>
                </Col>
              </Row>
              <Row>
                <Col>
                  Frontage Width: <br /> <b> {this.props.frontageWidth} m </b>
                </Col>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.treeConserv === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Tree Conservation </label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.gbca === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; GCBA Zone</label>
                  </form>
                </Col>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.belowMPL === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Areas Below MPL</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.basementAttic === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Basement/Attic</label>
                  </form>
                </Col>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.solarPanel === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Solar Panel</label>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.lift === true ? true : false}
                      disabled={true}
                    ></input>
                    <label>&nbsp; Lift</label>
                  </form>
                </Col>
                <Col>
                  <form className="result-summary-checkbox">
                    <input
                      type="checkbox"
                      checked={this.props.glassBarr === true ? true : false}
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
