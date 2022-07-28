import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleSubmit = (e) => {
  //   this.props.onFormSubmit(e.target.value);
  //   e.preventDefault();
  // };

  // handleMaxStoreyChange = (e) => {
  //   const value = e.target.value;
  //   this.props.onMaxStoreyChange(value);
  //   console.log(this.props.onMaxStoreyChange(value));
  // };

  // handleChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   const name = e.target.name;
  //   console.log(name);
  //   this.props.onFormChange({ [name]: value });
  //   // console.log(this.props.onFormChange({ [name]: value }));
  // };

  render() {
    const onBlur = (e) => {
      if (e.target.value === "") {
        e.target.value = e.target.defaultValue;
      }
    };
    const onFocus = (e) => {
      if (e.target.value === e.target.defaultValue) {
        e.target.value = "";
      }
    };
    return (
      <Container className="settings-container + Blue-background">
        <Container className="settings-title + Blue-background">
          <h1 className="justify-end">Settings</h1>
        </Container>
        <Container className="settings-50pxht-container">
          <h4 className="settings-headings-font + align-text-center">
            Type of Works: {this.props.TypeOfWorks}
          </h4>
        </Container>
        {this.props.TypeOfWorks === "A&A" && (
          <div>
            <form onSubmit={(e) => this.props.onFormsubmit(e)}>
              <Container>
                <Row className="alternate-100row">
                  <label className="settings-headings-font + no-padding">
                    Maximum Storey:{" "}
                  </label>
                  <select
                    className="settings-input"
                    name="maxStorey"
                    onChange={(e) => this.props.onFormChange(e)}
                  >
                    <option
                      className="settings-options"
                      selected
                      defaultValue="none"
                      disabled
                      hidden
                    ></option>
                    <option className="settings-options" value="2">
                      2 Storey
                    </option>
                    <option className="settings-options" value="3">
                      3 Storey
                    </option>
                  </select>
                </Row>
                <Row className="alternate-100row">
                  <label className="settings-headings-font + no-padding">
                    Proposed GFA:{" "}
                  </label>
                  <input
                    className="settings-input"
                    type="text"
                    name="proposedGFA"
                    defaultValue="Type the proposed GFA in sqm."
                    onFocus={(e) => onFocus(e)}
                    onBlur={(e) => onBlur(e)}
                    onChange={(e) => this.props.onFormChange(e)}
                  ></input>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="treeConserv"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Tree Conservation Zone
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="lift"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Lift
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="addiGFA"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; GFA Increase
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="basementAttic"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Basement / Attic present
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="strucChanges"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Structural Changes
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="extFacade"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; External Facade Changes
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="glassBarr"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Glass Barrier
                  </label>
                </Row>
                <Row className="setting-submit-div + Blue-background">
                  <input
                    className="results-round-button"
                    type="submit"
                    value="Submit"
                    // onClick={(e) => this.props.onFormsubmit(e)}
                  ></input>
                </Row>
              </Container>
            </form>
          </div>
        )}
        {this.props.TypeOfWorks === "New Construction" && (
          <div>
            <form onSubmit={(e) => this.props.onFormsubmit(e)}>
              {/* <label>Type of Works: {this.props.TypeOfWorks}</label> */}
              <Container>
                <Row className="alternate-100row">
                  {/* <div className="settings-100pxht-container"> */}
                  <label className="settings-headings-font + no-padding">
                    Building Type:{" "}
                  </label>
                  <select
                    className="settings-input"
                    name="buildingType"
                    onChange={(e) => this.props.onFormChange(e)}
                  >
                    <option
                      className="settings-options"
                      selected
                      defaultValue="none"
                      disabled
                      hidden
                    ></option>
                    <option className="settings-options" value="Semi-D">
                      Semi-D
                    </option>
                    <option
                      className="settings-options"
                      value="Detached/Bungalow"
                    >
                      Detached/Bungalow
                    </option>
                  </select>
                  {/* </div> */}
                </Row>
                <Row className="alternate-100row">
                  <label className="settings-headings-font + no-padding">
                    Maximum Storey:{" "}
                  </label>
                  <select
                    className="settings-input"
                    name="maxStorey"
                    onChange={(e) => this.props.onFormChange(e)}
                  >
                    <option
                      className="settings-options"
                      selected
                      defaultValue="none"
                      disabled
                      hidden
                    ></option>
                    <option className="settings-options" value="2">
                      2 Storey
                    </option>
                    <option className="settings-options" value="3">
                      3 Storey
                    </option>
                  </select>
                </Row>
                <Row className="alternate-100row">
                  <label className="settings-headings-font + no-padding">
                    Proposed GFA:{" "}
                  </label>
                  <input
                    className="settings-input"
                    type="text"
                    name="proposedGFA"
                    defaultValue="Type the proposed GFA in sqm."
                    onFocus={(e) => onFocus(e)}
                    onBlur={(e) => onBlur(e)}
                    onChange={(e) => this.props.onFormChange(e)}
                  ></input>
                </Row>
                <Row className="alternate-100row">
                  <label className="settings-headings-font + no-padding">
                    Frontage Width:{" "}
                  </label>
                  <input
                    className="settings-input"
                    type="text"
                    name="frontageWidth"
                    defaultValue="Type the width of the development in m."
                    onFocus={(e) => onFocus(e)}
                    onBlur={(e) => onBlur(e)}
                    onChange={(e) => this.props.onFormChange(e)}
                  ></input>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="treeConserv"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Tree Conservation Zone
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="gcba"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; GCBA Zone
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="belowMPL"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Areas below MPL
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="basementAttic"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Basement / Attic present
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="solarPanel"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Solar Panel
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="lift"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Lift
                  </label>
                </Row>
                <Row className="alternate-row">
                  <label className="settings-headings-font + settings-50pxht-container + align-item-center">
                    <input
                      type="checkbox"
                      name="glassBarr"
                      onChange={(e) => this.props.onFormChange(e)}
                    ></input>
                    &nbsp;&nbsp; Glass Barrier
                  </label>
                </Row>
                <Row className="setting-submit-div + Blue-background">
                  <input
                    className="results-round-button"
                    type="submit"
                    value="Submit"
                    // onClick={(e) => this.props.onFormsubmit(e)}
                  ></input>
                </Row>
              </Container>
            </form>
            {/* <button onClick={(e) => this.props.onFormsubmit(e)}>Submit</button> */}
          </div>
        )}
        <div className="setting-footer + Blue-background">
          <button
            className="results-round-button"
            onClick={() => this.props.onFormReset()}
          >
            Return to Main Page
          </button>
        </div>
      </Container>
    );
  }
}
