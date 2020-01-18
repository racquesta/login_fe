import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false
    };
  }

  componentDidMount() {
    console.log(this.props);
    if (!this.props.loggedIn) {
      window.location.replace("/signin");
    }
  }
  render() {
    return <div>Hi</div>;
  }
}

export default App;
