import React, { Component } from "react";

class Quote extends Component {
  render() {
    return <div className="Quotes" text={{ text: this.props.text }}></div>;
  }
}
export default Quote;
