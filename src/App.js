import React, { Component } from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div>
        <Router>
          <ResponsiveDrawer />
        </Router>
      </div>
    );
  }
}

export default App;
