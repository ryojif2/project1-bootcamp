import React from "react";

export default class GenerateList extends React.Component {
  constructor(props) {
    super(props);
  }
  // It is better to have constructor props super props, even though its not needed for the latest version, if i have no state.
  // Because if person doesnt have latest version of react, it needs to be there, to pass props.
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
