import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: "nolinespace",
      value: "nolinespace"
    };
  }

  handleChange(radio) {
    this.setState({ radio: radio });
    if (this.state.radio === "no") {
      console.log("no");
    }
  }

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">カウントしない文字を設定</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={e => this.handleChange(e.target.value)}
          row
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
    );
  }
}

export default RadioButton;
