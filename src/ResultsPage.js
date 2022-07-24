import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <p>this is the Results Page.</p>
        <p>{console.log(this.props.info)}</p>
      </Container>
    );
  }
}
