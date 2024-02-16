import React, { Component } from "react";
import { Link } from "react-router-dom";
export class HeaderLink extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link to={this.props.LinkURL} className="nav-link">
          {this.props.LinkName}
        </Link>
      </li>
    );
  }
}

export default HeaderLink;
