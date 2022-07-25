import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class GenerateSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <p>this is the Generated Summary.</p>
      </Container>
    );
  }
}
