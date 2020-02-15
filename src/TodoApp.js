import React, { Component } from "react";
import TodoCard from "./TodoCard";
import Grid from "@material-ui/core/Grid";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch("https://portfolio-by-progriro.herokuapp.com/getList")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <p>
          Todoアプリです。画面右下の「＋」から新規追加できます。
          <br />
          フロントはReact、バックはNode.js、データベースはMySQLで開発しました。Node.jsでexpressを使用し、RESTful
          APIとしました。リクエスト・レスポンス共にjson形式です。React(練習も兼ねて、axios/fetchを両方使用しました)からHTTPリクエストをしてデータベースにTodoを反映させています。
          <br />
          APIはHerokuにあり、サーバがスリープ状態に入ることを防ぐために「Heroku
          Scheduler」で24時間稼働させています。
        </p>
        <Grid container>
          <Grid container item xs={12} spacing={2}>
            {this.state.posts.map((post, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <TodoCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}
