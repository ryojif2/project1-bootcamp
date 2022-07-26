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
        <div className="requirement-summary-title">
          <h4 className="justify-end">Requirements Summary</h4>
        </div>
        <Container className="requirement-summary-text">
          <Row>
            <Col>
              Type of Works: <br /> {this.props.typeOfWorks}{" "}
            </Col>
            <Col>
              Building Type: <br />
              {this.props.buildingType}{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              Maximum Storey: <br /> {this.props.maxStorey} Storeys
            </Col>
            <Col>
              Proposed GFA: <br />
              {this.props.proposedGFA} m2
            </Col>
          </Row>
          <Row>
            <Col>
              Frontage Width: <br /> {this.props.frontageWidth} m
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
                  checked={this.props.gbca === true ? true : false}
                  disabled={true}
                ></input>
                <label>&nbsp; GCBA Zone</label>
              </form>
            </Col>
            <Col>
              <form>
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
                  checked={this.props.solarPanel === true ? true : false}
                  disabled={true}
                ></input>
                <label>&nbsp; Solar Panel</label>
              </form>
            </Col>
          </Row>
          <Row>
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
          </Row>
        </Container>
      </Container>
    );
  }
}
