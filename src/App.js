import React from "react";
import logo from "./logo.png";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import info from "./info.json";
import MainPage from "./MainPage.js";
import SettingsForm from "./SettingsForm.js";
import ResultsPage from "./ResultsPage.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
      // customizedRules: [],
    };
  }

  // genPDF() {
  //   var deferreds = [];
  //   var doc = new jsPDF();
  //   var numberOfInnerDivs = $(".divToPrint").children("div").length;
  //   for (let i = 1; i < numberOfInnerDivs; i++) {
  //     var deferred = $.Deferred();
  //     deferreds.push(deferred.promise());
  //     generateCanvas(i, doc, deferred);
  //   }

  //   $.when.apply($, deferreds).then(function () {
  //     // executes after adding all images
  //     doc.save("test.pdf");
  //   });
  // }

  // generateCanvas(i, doc, deferred) {
  //   html2canvas(document.getElementById("divToPrint" + i), {
  //     onrendered: function (canvas) {
  //       var img = canvas.toDataURL();
  //       doc.addImage(img, "PNG");
  //       doc.addPage();

  //       deferred.resolve();
  //     },
  //   });
  // }

  printDocument() {
    // document.getElementById("divToPrint").parentNode.style.overflow = "visible";
    // Window.resizeTo(window.screen.height, window.screen.height);
    const input = document.getElementById("divToPrint");
    html2canvas(input, {
      width: 4000,
      height: 8000,
      scale: 0.57,
      x: -35,

      // windowHeight: 3000,
      // windowWidth: 3000,
      // scrollX: -window.scrollX,
      // scrollY: -window.scrollY,
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

  // handleMaxStoreyChange = (input) => {
  //   // const value = input.target.value;
  //   // const name = input.target.name;
  //   this.setState({
  //     maxStorey: input,
  //   });
  // };

  render() {
    const infoImport = { info };
    console.log(info);

    console.log(this.state.maxStorey);
    console.log(this.state.buildingType);
    console.log(this.state.proposedGFA);
    console.log(this.state.gcba);
    console.log(this.state.belowMPL);
    const maxStorey = this.state.maxStorey;
    const buildingType = this.state.buildingType;
    const proposedGFA = this.state.proposedGFA;

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
                  ShowSettings={this.state.showSettings}
                  TypeOfWorks={this.state.typeOfWorks}
                  ShowResults={this.state.showResults}
                  buildingType={buildingType}
                  maxStorey={maxStorey}
                  proposedGFA={this.state.proposedGFA}
                  frontageWidth={this.state.frontageWidth}
                  gcba={this.state.gcba}
                  belowMPL={this.state.belowMPL}
                  basementAttic={this.state.basementAttic}
                  solarPanel={this.state.solarPanel}
                  lift={this.state.lift}
                  glassBarr={this.state.glassBarr}
                  treeConserv={this.state.treeConserv}
                  addiGFA={this.state.addiGFA}
                  strucChanges={this.state.strucChanges}
                  extFacade={this.state.extFacade}
                  onFormChange={(e) => this.handleFormInputChange(e)}
                  //onFormChange={this.handleFormInputChange}
                  // onMaxStoreyChange={this.handleMaxStoreyChange}
                  //
                  onFormsubmit={(e) => this.handleFormSubmit(e)}
                  onFormReset={(e) => this.handleReset(e)}
                />
              ) : null}
            </div>
            <div>
              {this.state.showResults ? (
                <ResultsPage
                  info={infoImport}
                  ShowMain={this.state.showMain}
                  TypeOfWorks={this.state.typeOfWorks}
                  ShowResults={this.state.showResults}
                  buildingType={buildingType}
                  maxStorey={maxStorey}
                  proposedGFA={this.state.proposedGFA}
                  frontageWidth={this.state.frontageWidth}
                  gcba={this.state.gcba}
                  belowMPL={this.state.belowMPL}
                  basementAttic={this.state.basementAttic}
                  solarPanel={this.state.solarPanel}
                  lift={this.state.lift}
                  glassBarr={this.state.glassBarr}
                  treeConserv={this.state.treeConserv}
                  addiGFA={this.state.addiGFA}
                  strucChanges={this.state.strucChanges}
                  extFacade={this.state.extFacade}
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
