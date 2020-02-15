import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Img from "./img/work1.png";

const imgStyle = {
  width: "85%"
};

const center = {
  textAlign: "center"
};

const nodecoration = {
  textDecoration: "none"
};

class PortFolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>PortFolio</h1>
        <p>
          ポートフォリオサイトです。
          <br />
          最初にAdobe
          XDでデザインカンプを作成し、HTML・CSS・JavaScript(jQuery)でコーディングを行いました。デザインからコーディングまで、0から自分一人で作り上げました。レスポンシブ対応です。
        </p>
        <Grid container spacing={3} style={center}>
          <Grid item xs={12}>
            <img src={Img} style={imgStyle} alt="portfolio image"></img>
          </Grid>
          <Grid item xs={12}>
            <a
              href="https://portfolio.progriro.net"
              style={nodecoration}
              target="_blank"
            >
              <Button variant="contained" color="primary">
                ポートフォリオサイトへ
              </Button>
            </a>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PortFolio;
