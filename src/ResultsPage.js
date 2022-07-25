import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenerateSummary from "./GenerateSummary.js";
import GenerateList from "./GenerateList.js";

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customizedRules: [],
    };
  }

  render() {
    return (
      <Container>
        <Container className="settings-title + Black-background">
          <h1 className="justify-end">Regulations</h1>
        </Container>
        <p>this is the Results Page.</p>
        <p>{console.log(this.props.info)}</p>
        <p>{console.log(this.props.info.info.info[0])}</p>
        <GenerateSummary
          info={this.props.info}
          typeOfWorks={this.props.typeOfWorks}
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

        <h4>
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
        <h4>
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
        {this.props.TypeOfWorks === "New Construction" && !this.props.gcba && (
          <GenerateList
            info={this.props.info.info.info[2]}
            wantedkey1="overall"
            wantedkey2="non-gcba"
          />
        )}
        {this.props.TypeOfWorks === "New Construction" && this.props.gcba && (
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
        <h4>
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
        <h4>
          <u>Other Elements</u>
        </h4>
        <GenerateList info={this.props.info.info.info[0]} wantedkey1="others" />
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
        <h4>
          <u>User Customised</u>
        </h4>
        <button>Add to Checklist</button>
        <button>Download Summary</button>
        <button onClick={() => this.props.onFormReset()}>
          Return to Main Page
        </button>
      </Container>
    );
  }
}
