import React, { Component } from "react";
import axios from "axios";
import { Button, Row, Input } from "react-materialize";
class App extends Component {
  state = {
    name: "",
    age: "",
    users: [],
    error: "",
    message: ""
  };
  componentWillMount() {
    axios.get(`/users`).then(response => {
      this.setState({ users: response.data });
    });
  }
  handleInputName = event => {
    this.setState({ name: event.target.value });
  };
  handleInputAge = event => {
    this.setState({ age: event.target.value });
  };
  submitForm = event => {
    event.preventDefault();
    axios
      .post(`/users`, {
        name: this.state.name,
        age: this.state.age
      })
      .then(response => {
        this.setState({
          users: [...this.state.users, response.data],
          error: "",
          message: `Info: ${response.data.name} was added.`
        });
      })
      .catch(error => {
        this.setState({
          error: `Error: ${error.response.data.errorMessage}`,
          message: ""
        });
      });
  };
  deleteUser = id => {
    axios
      .delete(`/users/${id}`)
      .then(response => {
        this.setState({
          users: this.state.users.filter(
            user => user._id !== response.data._id
          ),
          error: "",
          message: `Info: ${response.data.name} was deleted.`
        });
      })
      .catch(error => {
        this.setState({ error: `Error: ${error.response.data.errorMessage}` });
      });
  };
  deleteAllUsers = event => {
    axios
      .delete(`/users`)
      .then(response => {
        this.setState({
          users: [],
          error: "",
          message: "Info: all users were deleted."
        });
      })
      .catch(error => {
        this.setState({
          error: `Error: ${error.response.data.errorMessage}`,
          message: ""
        });
      });
  };
  clearMessage = event => {
    this.setState({ message: "" });
  };
  clearError = event => {
    this.setState({ error: "" });
  };
  renderUsers() {
    const users = this.state.users;
    return users.map(user => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
          <Button onClick={user_id => this.deleteUser(user._id)}>Delete</Button>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <div>
        <div
          style={
            this.state.error
              ? {
                  backgroundColor: "#f72e2e",
                  textAlign: "center",
                  padding: "10px 0"
                }
              : null
          }
          onClick={this.clearError}
        >
          {this.state.error}
        </div>
        <div
          style={
            this.state.message
              ? {
                  backgroundColor: "#42a7f4",
                  textAlign: "center",
                  padding: "10px 0"
                }
              : null
          }
          onClick={this.clearMessage}
        >
          {this.state.message}
        </div>
        <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
          <h2>User Management App</h2>
          <h4>Add New User</h4>
          <form onSubmit={this.submitForm}>
            <Row>
              <Input
                type="text"
                placeholder="Enter name"
                s={5}
                label="Name"
                value={this.state.name}
                onChange={this.handleInputName}
              />
              <Input
                type="number"
                placeholder="Enter age"
                s={5}
                label="Age"
                value={this.state.age}
                onChange={this.handleInputAge}
              />
              <Button type="submit" s={2}>
                Add
              </Button>
            </Row>
          </form>
          <h4>Delete All Users</h4>
          <div>
            <Button onClick={this.deleteAllUsers}>Delete All</Button>
          </div>
          <div>
            <h4>Users</h4>
            <table>
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Name</th>
                  <th style={{ width: "30%" }}>Age</th>
                  <th style={{ width: "30%" }} />
                </tr>
              </thead>
              <tbody>{this.renderUsers()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
