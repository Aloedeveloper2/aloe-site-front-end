import React, { Component } from "react";
import "./Auth.css";
class AuthLayout extends Component {
  state = {};
  render() {
    return (
      <div className="auth_layout">
        <div className="auth_box">{this.props.children}</div>
      </div>
    );
  }
}

export default AuthLayout;
