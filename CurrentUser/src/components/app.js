import React, { Component } from 'react';
import Search from "../containers/search";
import Auth from "../containers/auth";
import CurrentUser from "../containers/user_data";

export default class App extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <Search/>
        <CurrentUser/>
      </div>
    );
  }
}
