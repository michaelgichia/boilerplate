import React, { Component, Fragment } from "react";

class Homepage extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <Fragment>
        <br />
        <p>{this.state.response}</p>
        <br />
        <button>Hello wolrd</button>
      </Fragment>
    );
  }
}

export default Homepage;
