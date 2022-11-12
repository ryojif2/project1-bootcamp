import React from "react";
import { Container } from "react-bootstrap";

export default class GenerateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
    };
  }

  handleCheck = (event) => {
    var updatedList = [...this.state.checked];
    if (event.target.checked) {
      updatedList = [...this.state.checked, event.target.value];
    } else {
      updatedList.splice(this.state.checked.indexOf(event.target.value), 1);
    }
    this.setState({ checked: updatedList });
  };

  isChecked = (item) =>
    this.state.checked.includes(item) ? "checked-item" : "not-checked-item";

  render() {
    const PutIntoList = (input) => {
      const description = input.description;
      return (
        <div className="table-alternate-row">
          <tr>
            <td className="checkbox-spacing">
              <input
                type="checkbox"
                id={description}
                value={description}
                onChange={this.handleCheck}
              />
            </td>
            <td className="padding-8">
              <span className={this.isChecked(description)}>{description}</span>
            </td>
          </tr>
          <br />
        </div>
      );
    };
    const rows = [];
    this.props.info.forEach((regulation) => {
      if (this.props.wantedkey2) {
        if (
          regulation.category === this.props.wantedkey1 &&
          regulation.option === this.props.wantedkey2
        ) {
          rows.push(PutIntoList(regulation));
        }
      } else if (!this.props.wantedkey2 && this.props.wantedkey1) {
        if (regulation.category === this.props.wantedkey1) {
          rows.push(PutIntoList(regulation));
        }
      } else if (!this.props.wantedkey2 && !this.props.wantedkey1) {
        rows.push(
          <div className="table-alternate-row">
            <tr>
              <td className="checkbox-spacing">
                <input
                  type="checkbox"
                  id={regulation}
                  value={regulation}
                  onChange={this.handleCheck}
                />
              </td>
              <td className="padding-8">
                <span className={this.isChecked(regulation)}>{regulation}</span>
              </td>
            </tr>
            <br />
          </div>
        );
      }
    });

    return (
      <Container className="no-padding">
        <div>
          <form>{rows}</form>
        </div>
      </Container>
    );
  }
}

// Try to use more of in-built bootstrap utils for e.g. padding-8 @ line74.
// p-0 p-5 etc.
