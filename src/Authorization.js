import React, { Component } from "react";

class Authorization extends Component {
  constructor() {
    super();

    this.state = {
      user: false,
      loggedIn: false
    };
  }

  async componentDidMount() {
    console.log(window.location);
    if (!this.state.loggedIn && window.location.pathname !== "/signin") {
      window.location.replace("/signin");
    }
    const userData = await fetch("http://localhost:8000/validate", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      });

    if (userData.success) {
      console.log("it worked");
    } else {
      console.log("no sign in");
    }
  }
  render() {
    const { user, loggedIn } = this.state;
    return <div>{this.props.render({ user, loggedIn })}</div>;
  }
}

export default Authorization;
