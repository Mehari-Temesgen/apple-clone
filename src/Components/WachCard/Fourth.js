import React, { Component } from "react";

class Fourth extends Component {
  render() {
    return (
      <div className="description-wraper p-3">
        {this.props.FirstText}
        <br />
        {this.props.SecondText}
      </div>
    );
  }
}

export default Fourth;
