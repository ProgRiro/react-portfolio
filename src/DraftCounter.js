import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./DraftCounter.css";
import ViewCount from "./ViewCount";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class DraftCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "",
      radio: "nolinespace",
      value: "nolinespace"
    };
  }

  handleNewLine() {
    var count = this.state.count;
    this.setState({ count: count - 1 });
  }

  handleOnChange(text, mode) {
    this.setState({ text: text });
    var count;
    if (mode === "nolinespace") {
      count = text.replace(/[\n\s]/g, "").length;
    } else if (mode === "noline") {
      count = text.replace(/\n/g, "").length;
    } else if (mode === "nospace") {
      count = text.replace(/[^\S\n]/g, "").length;
    } else {
      count = text.length;
    }
    this.setState({ count: count });
  }

  handleRadioChange(radio) {
    this.setState({ radio: radio });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Draft Counter</h1>
        <p>
          文字数カウントアプリです。
          カウントしない文字を設定することができます。ブログ記事やレポートを書いた際に活用できます。
        </p>
        <div className="draft-box">
          <TextField
            className="text-box"
            id="outlined-multiline-static"
            placeholder="ここに本文を入力します"
            label="Draft"
            multiline
            rows="20"
            variant="outlined"
            onChange={e =>
              this.handleOnChange(e.target.value, this.state.radio)
            }
            onKeyPress={e => {
              if (e.key === "a") {
                this.handleNewLine();
              }
            }}
          />
          <div className="contents-box">
            <ViewCount count={this.state.count}></ViewCount>
            <FormControl className="radio-box" component="fieldset">
              <FormLabel component="legend">カウントしない文字を設定</FormLabel>
              <RadioGroup
                aria-label="position"
                name="position"
                onChange={e => this.handleRadioChange(e.target.value)}
                value={this.state.value}
              >
                <FormControlLabel
                  value="nolinespace"
                  control={<Radio color="primary" />}
                  label="改行/空白"
                  labelPlacement="end"
                  checked={this.state.radio === "nolinespace"}
                />
                <FormControlLabel
                  value="noline"
                  control={<Radio color="primary" />}
                  label="改行"
                  labelPlacement="end"
                  checked={this.state.radio === "noline"}
                />
                <FormControlLabel
                  value="nospace"
                  control={<Radio color="primary" />}
                  label="空白"
                  labelPlacement="end"
                  checked={this.state.radio === "nospace"}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio color="primary" />}
                  label="なし"
                  labelPlacement="end"
                  checked={this.state.radio === "no"}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DraftCounter;
