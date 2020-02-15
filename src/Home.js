import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import ReactLogo from "./img/react.svg";
import NodeLogo from "./img/node.svg";
import MysqlLogo from "./img/mysql.png";
import Img1 from "./img/work1.png";
import Img2 from "./img/work2.png";

const center = {
  margin: "0 auto",
  display: "block"
};

const paper = {
  padding: "20px"
};

const nodecoration = {
  textDecoration: "none"
};

const imgParent = {
  width: "30%"
};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <p>
          作成したアプリの紹介です。
          <br />
          このサイト制作期間は約1週間。React(react-router-dom/maretial-ui/axios/fetch)、Node.js(express)、MySQL(heroku)で開発しました。
        </p>
        <Container maxWidth="md"></Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Link to="/TodoApp" style={nodecoration}>
              <Paper style={paper}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <div style={imgParent}>
                    <img
                      src={ReactLogo}
                      width="100%"
                      style={center}
                      alt="react logo"
                    />
                  </div>
                  <div style={imgParent}>
                    <img
                      src={NodeLogo}
                      width="100%"
                      style={center}
                      alt="node logo"
                    />
                  </div>
                  <div style={imgParent}>
                    <img
                      src={MysqlLogo}
                      width="100%"
                      style={center}
                      alt="mysql logo"
                    />
                  </div>
                </Box>
                <h2>TodoApp</h2>
                <p>
                  Todoアプリです。
                  <br />
                  フロントはReact、バックはNode.js、データベースはMySQLで開発しました。Node.jsでexpressを使用し、RESTful
                  APIとしました。リクエスト・レスポンス共にjson形式です。React(練習も兼ねてaxios/fetchを両方使用しました)からHTTPリクエストをしてデータベースにTodoを反映させています。
                </p>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/DraftCounter" style={nodecoration}>
              <Paper style={paper}>
                <img
                  src={ReactLogo}
                  width="30%"
                  style={center}
                  alt="react logo"
                />
                <h2>DraftCounter</h2>
                <p>
                  文字数カウントアプリです。
                  <br />
                  Reactで開発しました。
                  「カウントしない文字を設定」から、カウントしない文字を設定することができます。ブログ記事やレポートを書いた際に活用できます。
                  ReactのvirtualDOMによる描画で、文字を打ち込んだら即時に文字数が更新されます。
                </p>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/PortFolio" style={nodecoration}>
              <Paper style={paper}>
                <img src={Img1} width="100%" style={center}></img>
                <h2>Portfolio no.1</h2>
                <p>
                  ポートフォリオサイトです。
                  <br />
                  最初にAdobe
                  XDでデザインカンプを作成し、HTML・CSS・JavaScript(jQuery)でコーディングを行いました。デザインからコーディングまで、0から自分一人で作り上げました。レスポンシブ対応です。
                </p>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/Blog" style={nodecoration}>
              <Paper style={paper}>
                <img src={Img2} width="100%" style={center}></img>
                <h2>Blog</h2>
                <p>
                  僕のブログサイトです。
                  <br />
                  Wordpressを用いて記事を投稿しています。プログラミングの基本やネットワークなど、主にIT系のコンテンツを不定期で投稿しています。
                </p>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
