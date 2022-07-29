import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenerateSummary from "./GenerateSummary.js";
import GenerateList from "./GenerateList.js";
import GenerateOverlay from "./GenerateOverlay.js";
// import NodemailerApp from "./nodemailer-form.js";

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
      console.log(updatedUserList);
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

  // fs is inbuilt into node js.
  //use fs in react. Change files on my com using code.
  //json file is a file. fsreadfile the json file to read all my data.
  //add to end of string to apend the new rule.
  //fswritefile.
  render() {
    console.log(this.state.customizedRules);
    console.log(this.state.userInput);
    return (
      <Container
        id="divToPrint"
        className="Black-background + full-width-container"
      >
        <Container className="full-width-container">
          <Container className="results-summary + Blue-background + full-width-container">
            <GenerateSummary
              info={this.props.info}
              typeOfWorks={this.props.TypeOfWorks}
              buildingType={this.props.buildingType}
              maxStorey={this.props.maxStorey}
              proposedGFA={this.props.proposedGFA}
              frontageWidth={this.props.frontageWidth}
              gcba={this.props.gcba}
              belowMPL={this.props.belowMPL}
              basementAttic={this.props.basementAttic}
              solarPanel={this.props.solarPanel}
              lift={this.props.lift}
              glassBarr={this.props.glassBarr}
              treeConserv={this.props.treeConserv}
              addiGFA={this.props.addiGFA}
              strucChanges={this.props.strucChanges}
              extFacade={this.props.extFacade}
            />
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
            {this.props.treeConserv && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="external"
                wantedkey2="tree conserv"
              />
            )}
            {this.props.TypeOfWorks === "New Construction" && (
              <GenerateList
                info={this.props.info.info.info[2]}
                wantedkey1="external"
                wantedkey2="non-option"
              />
            )}
            {this.props.TypeOfWorks === "New Construction" &&
              this.props.frontageWidth >= 8 && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="external"
                  wantedkey2="frontage width 8"
                />
              )}
            {this.props.TypeOfWorks === "New Construction" &&
              this.props.frontageWidth < 8 && (
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
            {this.props.maxStorey === "2" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="height 2"
              />
            )}
            {this.props.maxStorey === "3" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="height 3"
              />
            )}
            {this.props.proposedGFA >= 5000 && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="gfa 5000"
              />
            )}
            {this.props.TypeOfWorks === "A&A" && this.props.addiGFA && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="gfa addi"
              />
            )}
            {this.props.TypeOfWorks === "A&A" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="overall"
                wantedkey2="non-option"
              />
            )}
            {this.props.TypeOfWorks === "New Construction" &&
              !this.props.gcba && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="overall"
                  wantedkey2="non-gcba"
                />
              )}
            {this.props.TypeOfWorks === "New Construction" &&
              this.props.gcba && (
                <GenerateList
                  info={this.props.info.info.info[3]}
                  wantedkey1="overall"
                  wantedkey2="gcba"
                />
              )}
            {this.props.TypeOfWorks === "New Construction" && (
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
            {this.props.TypeOfWorks === "A&A" && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="internal"
                wantedkey2="non-option"
              />
            )}
            {this.props.TypeOfWorks === "A&A" && this.props.basementAttic && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="internal"
                wantedkey2="basement attic"
              />
            )}
            {this.props.TypeOfWorks === "A&A" && this.props.solarPanel && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="internal"
                wantedkey2="solar"
              />
            )}
            {this.props.TypeOfWorks === "New Construction" && (
              <GenerateList
                info={this.props.info.info.info[2]}
                wantedkey1="internal"
                wantedkey2="non-option"
              />
            )}
            {this.props.TypeOfWorks === "New Construction" &&
              this.props.basementAttic && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="internal"
                  wantedkey2="basement attic"
                />
              )}
            {this.props.TypeOfWorks === "New Construction" &&
              this.props.solarPanel && (
                <GenerateList
                  info={this.props.info.info.info[2]}
                  wantedkey1="internal"
                  wantedkey2="solar"
                />
              )}
            {this.props.lift && (
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
            {this.props.glassBarr && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="others"
                wantedkey2="glass barrier"
              />
            )}
            {this.props.TypeOfWorks === "A&A" && this.props.strucChanges && (
              <GenerateList
                info={this.props.info.info.info[1]}
                wantedkey1="others"
                wantedkey2="struc changes"
              />
            )}
            {this.props.TypeOfWorks === "A&A" && this.props.extFacade && (
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
                  // NodemailerApp();
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
        {/* <NodemailerApp/> */}
      </Container>
    );
  }
}
