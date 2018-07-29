import React, { Component } from "react";
import { connect } from "react-redux";



class CurrentUser extends Component {
  renderUser(userData) {
    return (
        <tr >
          <td>Имя пользователя:</td>                 
          <td>{userData.username}</td>                   
        </tr>             
    );
  }
  renderLogin(userData) {
    return (
        <tr >
          <td>Логин:</td>                 
          <td>{userData.login}</td>                   
        </tr>             
    );
  }
  renderEmail(userData) {
    return (
        <tr >
          <td>Электронная почта:</td>                 
          <td>{userData.email}</td>                   
        </tr>             
    );
  }
  renderPos(userData) {
    return (
        <tr >
          <td>Должность:</td>                 
          <td>{userData.position}</td>                   
        </tr>             
    );
  }
  renderComName(userData) {
    return (
        <tr >
          <td>Имя компании:</td>                 
          <td>{userData.companyName}</td>                   
        </tr>             
    );
  }
  renderCompany(userData) {
    return (
        <tr >
          <td>Id компании:</td>                 
          <td>{userData.company}</td>                   
        </tr>             
    );
  }
  renderVersion(userData) {
    return (
        <tr >
          <td>Версия:</td>                 
          <td>{userData.version}</td>                   
        </tr>             
    );
  }
  renderDate(userData) {
    return (
        <tr >
          <td>Дата:</td>                 
          <td>{userData.time.date}</td>                   
        </tr>             
    );
  }
  renderTime(userData) {
    return (
        <tr >
          <td>Время:</td>                 
          <td>{userData.time.time}</td>                   
        </tr>             
    );
  }
  renderLicence(userData) {
    return (
        <tr >
          <td>Лицензия:</td>                 
          <td>{userData.license}</td>                   
        </tr>             
    );
  }
  renderLicenseSubType(userData) {
    return (
        <tr >
          <td>Тип лицензии:</td>                 
          <td>{userData.licenseSubType}</td>                   
        </tr>             
    );
  }
  render() {
    return (
      <table className="table table-striped">
        <tbody>
          {this.props.user.map(this.renderUser)}
          {this.props.user.map(this.renderLogin)}  
          {this.props.user.map(this.renderEmail)}
          {this.props.user.map(this.renderPos)} 
          {this.props.user.map(this.renderComName)}
          {this.props.user.map(this.renderVersion)}
          {this.props.user.map(this.renderDate)} 
          {this.props.user.map(this.renderTime)}
          {this.props.user.map(this.renderLicence)}                       
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(CurrentUser);