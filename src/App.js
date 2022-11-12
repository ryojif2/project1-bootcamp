import React from "react";
import "./App.css";
import info from "./DB/info.json";
import MainPage from "./Components/MainPage.js";
import SettingsForm from "./Components/SettingsForm.js";
import ResultsPage from "./Components/ResultsPage.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

//COMMENT POST PROJECT 030822
// OVERALL
// Remove any code that is not needed.
// After development is concluded, remove console.log, remove notes etc unless necessary.
// Many stuff in state. Passing props. See below!!
//In SRC folder create component directory, db directory. Move every component that is not app.js and index.js into the component directory. Line 9 shows how to change the import names.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMain: true,
      showSettings: false,
      showResults: false,
      typeOfWorks: "",
      buildingType: "",
      maxStorey: "",
      proposedGFA: "",
      frontageWidth: "",
      gcba: false,
      belowMPL: false,
      basementAttic: false,
      solarPanel: false,
      lift: false,
      glassBarr: false,
      treeConserv: false,
      addiGFA: false,
      strucChanges: false,
      extFacade: false,
    };
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input, {
      width: 4000,
      height: 8000,
      scale: 0.57,
      x: -35,

      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  handleMainSubmit = (input) => {
    this.setState({
      showMain: false,
      showSettings: true,
      typeOfWorks: input,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.typeOfWorks === "New Construction") {
      if (
        this.state.buildingType === "" ||
        this.state.maxStorey === "" ||
        this.state.proposedGFA === "" ||
        this.state.frontageWidth === "" ||
        isNaN(this.state.proposedGFA) ||
        isNaN(this.state.frontageWidth)
      ) {
        alert("Please fill up the form correctly.");
      } else {
        this.setState({
          showSettings: false,
          showResults: true,
        });
      }
    } else if (this.state.typeOfWorks === "A&A") {
      if (
        this.state.maxStorey === "" ||
        this.state.proposedGFA === "" ||
        isNaN(this.state.proposedGFA)
      ) {
        alert("Please fill up the form correctly.");
      } else {
        this.setState({
          showSettings: false,
          showResults: true,
        });
      }
    }
  };

  handleFormInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleReset = () => {
    this.setState({
      showMain: true,
      showSettings: false,
      showResults: false,
      typeOfWorks: "",
      buildingType: "",
      maxStorey: "",
      proposedGFA: "",
      frontageWidth: "",
      gcba: false,
      belowMPL: false,
      basementAttic: false,
      solarPanel: false,
      lift: false,
      glassBarr: false,
      treeConserv: false,
      addiGFA: false,
      strucChanges: false,
      extFacade: false,
    });
  };

  render() {
    const infoImport = { info };

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              {this.state.showMain ? (
                <MainPage
                  ShowMain={this.state.showMain}
                  ShowSettings={this.state.showSettings}
                  TypeOfWorks={this.state.typeOfWorks}
                  onTypeOfWorksChange={this.handleMainSubmit}
                />
              ) : null}
            </div>
            <div>
              {this.state.showSettings ? (
                <SettingsForm
                  // I can just pass all props to child component without stating each one of them!!
                  // I can only do this for states! Not for functions.
                  //to access in child, props.randomObj.showSettings in the child..
                  childStates={this.state}
                  onFormChange={(e) => this.handleFormInputChange(e)}
                  onFormsubmit={(e) => this.handleFormSubmit(e)}
                  onFormReset={(e) => this.handleReset(e)}
                />
              ) : null}
            </div>
            <div>
              {this.state.showResults ? (
                <ResultsPage
                  info={infoImport}
                  childStates={this.state}
                  customizedRules={this.state.customizedRules}
                  onFormReset={(e) => this.handleReset(e)}
                  savePDF={(e) => this.printDocument(e)}
                />
              ) : null}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
