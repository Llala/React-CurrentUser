import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { fetchUser } from "../actions/index";
import { getToken } from "../actions/index";

class Auth extends Component {
  constructor(props) {
    super(props);

    //this.state = { term: "" };

    //this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.getToken();
    //this.props.fetchUser();
    //this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Authorizate</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({ fetchUser }, dispatch);
  return bindActionCreators({ getToken }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);