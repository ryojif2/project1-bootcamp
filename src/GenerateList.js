import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class GenerateList extends React.Component {
  constructor(props) {
    super(props);
  }

  // PutIntoList = (input) => {
  //   const description = input.description;
  //   return (
  //     <tr>
  //       <td>{description}</td>
  //     </tr>
  //   );
  // };

  handleClick = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
      event.target.style.color = "black";
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
      event.target.style.color = "rgba(0, 0, 0, 0.3)";
    }
  };

  render() {
    const PutIntoList = (input) => {
      const description = input.description;
      return (
        <ul>
          {/* <td>
            <button key={description}> &nbsp;</button>
          </td> */}
          <li key={description} onClick={this.handleClick}>
            {description}
          </li>
        </ul>
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
      } else {
        if (regulation.category === this.props.wantedkey1) {
          rows.push(PutIntoList(regulation));
        }
      }
    });

    //     this.props.info.forEach((regulation) => {
    //   if (regulation.category === this.props.wantedkey) {
    //     rows.push(regulation.description);
    //   }
    // });
    console.log(this.props.info);
    // const { description } = this.props.info;

    return (
      <Container>
        <Container>{rows}</Container>
        {/* <ul>
          {rows.forEach((element) => {
            <li>{element}</li>;
          })}
        </ul> */}
        {/* <form>
          <input type="checkbox">{rows}</input>
        </form> */}

        <div>
          {/* <ul> */}
          {/* <form> */}
          {/* {this.props.info.map((values, index) => {
            const { description } = this.props.info[index];
            values = description;
            return (
              <div>
                <form>
                  <label>
                    <input type="checkbox" id={index}>
                      {values}
                    </input>
                  </label>
                </form>
              </div>
            );
          })} */}
          {/* </ul> */}
          {/* </form> */}
        </div>
      </Container>
    );
  }
}
