import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class GenerateList extends React.Component {
  constructor(props) {
    super(props);
  }
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
      <div className="overlay">
        <form onSubmit={(e) => this.props.onFormsubmit(e)}>
          <div className="align-left-text + overlay-text-margin">
            <label>
              <u>Description of new item</u>
            </label>
          </div>
          <textarea
            className="add-input"
            maxLength={140}
            placeholder="Add new item here.&#10;(Maximum 140 characters)"
            onFocus={(e) => onFocus(e)}
            onBlur={(e) => onBlur(e)}
            onChange={(e) => this.props.onFormChange(e)}
          ></textarea>
          <input
            className="full-round-button"
            type="submit"
            value="Confirm"
          ></input>
        </form>
      </div>
    );
  }
}
