import React from "react";
import { Container, Row } from "react-bootstrap";
import GenerateSummary from "./GenerateSummary.js";
import GenerateList from "./GenerateList.js";
import GenerateOverlay from "./GenerateOverlay.js";

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customizedRules: [],
      overlayPage: false,
      userInput: "",
    };
  }

  resetUserCus = () => {
    this.setState({
      customizedRules: [],
      overlayPage: false,
      userInput: "",
    });
  };

  overlayForm = () => {
    this.setState({
      overlayPage: true,
      userInput: "",
    });
  };

  handleFormChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.userInput !== "") {
      const updatedUserList = [
        ...this.state.customizedRules,
        this.state.userInput,
      ];
      this.setState({
        showResults: true,
        overlayPage: false,
        customizedRules: updatedUserList,
      });
    }
    this.setState({
      showResults: true,
      overlayPage: false,
    });
  };

  handleExitOverlay = (e) => {
    this.setState({
      showResults: true,
      overlayPage: false,
    });
  };

  // Create a component for each "row".
  //do Object.entries on only states of the props i have passed down. Object.entries(this.props.randomObj)
  //object.entries to get the values of my state props.
  // Object.entries will take each key and value pair, and add into an array of objects.
  // Deconstruct the keys and values. [0] position for key(state name) and [1] position for value (true or false).
  // map through and pass to my components.

  //use filter function after i get the array.
  // if index position 1 is true, then filter function to automatically add the relevant data from json file to the filter array, and display everything from the filtered array.
  //LOOK AT FILTER FUNCTION MDN.
  //map, reduce, filter functions. <<< Learn!!

  // fs is inbuilt into node js.
  //use fs in react. Change files on my com using code.
  //json file is a file. fsreadfile the json file to read all my data.
  //add to end of string to apend the new rule.
  //fswritefile.
  render() {
    return (
      <Container
        id="divToPrint"
        className="Black-background + full-width-container"
      >
        <Container className="full-width-container">
          <Container className="results-summary + Blue-background + full-width-container">
            <GenerateSummary childStates={this.props.childStates} />
          </Container>
          <Container className="results-title + Black-background">
            <h1 className="justify-end">Regulations</h1>
          </Container>
          <Container className="results-body">
            <h4 className="Black-background + align-left-text + padding-15 + margin-center">
              <u>External Elements</u>
            </h4>
            <GenerateList
              info={this.props.info.info.info[0]}
              wantedkey1="external"
            />
            {this.props.childStates.treeConserv && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="external"
                wantedkey2="tree conserv"
              />
            )}
            {this.props.childStates.typeOfWorks === "New Construction" && (
              <GenerateList
                info={this.props.info.info.info[2]}
                wantedkey1="external"
                wantedkey2="non-option"
              />
            )}
            {this.props.childStates.typeOfWorks === "New Construction" &&
              this.props.childStates.frontageWidth >= 8 && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="external"
                  wantedkey2="frontage width 8"
                />
              )}
            {this.props.childStates.typeOfWorks === "New Construction" &&
              this.props.childStates.frontageWidth < 8 && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="external"
                  wantedkey2="frontage width less"
                />
              )}
            <h4 className="Black-background + align-left-text + padding-15 + margin-center">
              <u>Overall Parameters of Main Building</u>
            </h4>
            <GenerateList
              info={this.props.info.info.info[0]}
              wantedkey1="overall"
            />
            {this.props.childStates.maxStorey === "2" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="height 2"
              />
            )}
            {this.props.childStates.maxStorey === "3" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="height 3"
              />
            )}
            {this.props.childStates.proposedGFA >= 5000 && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="gfa 5000"
              />
            )}
            {this.props.childStates.typeOfWorks === "A&A" &&
              this.props.childStates.addiGFA && (
                <GenerateList
                  info={this.props.info.info.info[1]}
                  wantedkey1="overall"
                  wantedkey2="gfa addi"
                />
              )}
            {this.props.childStates.typeOfWorks === "A&A" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="non-option"
              />
            )}
            {this.props.childStates.typeOfWorks === "New Construction" &&
              !this.props.childStates.gcba && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="overall"
                  wantedkey2="non-gcba"
                />
              )}
            {this.props.childStates.typeOfWorks === "New Construction" &&
              this.props.childStates.gcba && (
                <GenerateList
                  info={this.props.info.info.info[3]}
                  wantedkey1="overall"
                  wantedkey2="gcba"
                />
              )}
            {this.props.childStates.typeOfWorks === "New Construction" && (
              <GenerateList
                info={this.props.info.info.info[2]}
                wantedkey1="overall"
                wantedkey2="non-option"
              />
            )}
            <h4 className="Black-background + align-left-text + padding-15 + margin-center">
              <u>Internal Elements of Main Building</u>
            </h4>
            <GenerateList
              info={this.props.info.info.info[0]}
              wantedkey1="internal"
            />
            {this.props.childStates.typeOfWorks === "A&A" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="internal"
                wantedkey2="non-option"
              />
            )}
            {this.props.childStates.typeOfWorks === "A&A" &&
              this.props.childStates.basementAttic && (
                <GenerateList
                  info={this.props.info.info.info[1]}
                  wantedkey1="internal"
                  wantedkey2="basement attic"
                />
              )}
            {this.props.childStates.typeOfWorks === "A&A" &&
              this.props.childStates.solarPanel && (
                <GenerateList
                  info={this.props.info.info.info[1]}
                  wantedkey1="internal"
                  wantedkey2="solar"
                />
              )}
            {this.props.childStates.typeOfWorks === "New Construction" && (
              <GenerateList
                info={this.props.info.info.info[2]}
                wantedkey1="internal"
                wantedkey2="non-option"
              />
            )}
            {this.props.childStates.typeOfWorks === "New Construction" &&
              this.props.childStates.basementAttic && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="internal"
                  wantedkey2="basement attic"
                />
              )}
            {this.props.childStates.typeOfWorks === "New Construction" &&
              this.props.childStates.solarPanel && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="internal"
                  wantedkey2="solar"
                />
              )}
            {this.props.childStates.lift && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="internal"
                wantedkey2="lift"
              />
            )}
            <h4 className="Black-background + align-left-text + padding-15 + margin-center">
              <u>Other Elements</u>
            </h4>
            <GenerateList
              info={this.props.info.info.info[0]}
              wantedkey1="others"
            />
            {this.props.childStates.glassBarr && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="others"
                wantedkey2="glass barrier"
              />
            )}
            {this.props.childStates.typeOfWorks === "A&A" &&
              this.props.childStates.strucChanges && (
                <GenerateList
                  info={this.props.info.info.info[1]}
                  wantedkey1="others"
                  wantedkey2="struc changes"
                />
              )}
            {this.props.childStates.typeOfWorks === "A&A" &&
              this.props.childStates.extFacade && (
                <GenerateList
                  info={this.props.info.info.info[1]}
                  wantedkey1="others"
                  wantedkey2="ext facade"
                />
              )}
            <h4 className="Black-background + align-left-text + padding-15 + margin-center">
              <u>User Customised</u>
            </h4>
            {this.customizedRules !== [] ? (
              <GenerateList info={this.state.customizedRules} />
            ) : null}

            <button
              className="results-round-button + button-margin"
              onClick={() => this.overlayForm()}
              data-html2canvas-ignore="true"
            >
              Add to Checklist
            </button>
          </Container>
          <Container className="results-footer + Blue-background">
            <Row>
              <button
                className="results-round-button"
                onClick={() => {
                  this.props.savePDF();
                }}
              >
                Download Summary
              </button>
            </Row>
            <Row>
              <button
                className="results-round-button"
                onClick={() => {
                  this.props.onFormReset();
                  this.resetUserCus();
                }}
              >
                Return to Main Page
              </button>
            </Row>
          </Container>
        </Container>
        {this.state.overlayPage && this.customizedRules !== [] ? (
          <GenerateOverlay
            onFormsubmit={(e) => this.handleFormSubmit(e)}
            onFormChange={(e) => this.handleFormChange(e)}
          />
        ) : null}
      </Container>
    );
  }
}
