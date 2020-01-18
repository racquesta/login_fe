import React, { Component } from "react";
import cookie from "react-cookies";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    try {
      const res = await fetch("http://localhost:8000/auth", {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res.token);
          return res;
        });
      console.log(res);
      // if (res.success) {
      //   console.log("success");
      // }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="username" onChange={this.handleChange} />
        <input type="text" name="password" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignIn;
