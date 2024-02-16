import React, { Component } from "react";

class FotterProps extends Component {
  render() {
    return (
      <li>
        <a href={this.props.FootLink}> {this.props.FootName}</a>
      </li>
    );
  }
}

export default FotterProps;
