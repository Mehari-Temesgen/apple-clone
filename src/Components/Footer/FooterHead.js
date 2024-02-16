import React, { Component } from "react";
import FotterProps from "./FooterProps";
class FooterHead extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md">
        <h3 className="my-toggler">{this.props.FooterTitle}</h3>
        <ul className="list_item">{/* <FotterProps /> */}</ul>
      </div>
    );
  }
}

export default FooterHead;
