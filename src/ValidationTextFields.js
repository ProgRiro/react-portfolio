// Todoリスト新規追加

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const server = "https://portfolio-by-progriro.herokuapp.com/new";

const classes = {
  root: {
    "& .MuiTextField-root": {
      margin: "50px",
      width: 200
    }
  }
};

const margin = {
  marginTop: "10px"
};

class ValidationTextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange_title = this.handleChange_title.bind(this);
    this.handleChange_content = this.handleChange_content.bind(this);
  }

  handleSubmit = () => {
    const title = this.state.title;
    const content = this.state.content;

    console.log(title);
    console.log(content);

    const data = { title: title, content: content };

    axios
      .post(server, data)
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
  };

  handleChange_title = event => {
    this.setState({
      title: event
    });
  };

  handleChange_content = event => {
    this.setState({
      content: event
    });
  };

  render() {
    return (
      <form
        className={classes.root}
        Validate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <div>
          <TextField
            required
            id="title"
            label="Title"
            // defaultValue="Hello World"
            value={this.state.title}
            onChange={e => this.handleChange_title(e.target.value)}
            style={margin}
          />
        </div>
        <div>
          <TextField
            required
            id="content"
            label="Content"
            // defaultValue="Hello World"
            value={this.state.content}
            onChange={e => this.handleChange_content(e.target.value)}
            style={margin}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            color="primary"
            style={margin}
          >
            追加する
          </Button>
        </div>
      </form>
    );
  }
}

export default ValidationTextFields;
