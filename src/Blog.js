import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Img from "./img/work2.png";

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
        <h1>Blog</h1>
        <p>
          僕のブログサイトです。
          <br />
          Wordpressを用いて記事を投稿しています。プログラミングの基本やネットワークなど、主にIT系のコンテンツを不定期で投稿しています。
        </p>
        <Grid container spacing={3} style={center}>
          <Grid item xs={12}>
            <img src={Img} style={imgStyle} alt="progriro blog image"></img>
          </Grid>
          <Grid item xs={12}>
            <a href="https://progriro.net" style={nodecoration} target="_blank">
              <Button variant="contained" color="primary">
                ブログサイトへ
              </Button>
            </a>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PortFolio;
