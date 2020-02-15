import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TransitionsModal from "./TransitionsModal";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 2
  }
});

export default function TodoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
        </Typography> */}
        <Typography variant="h5" component="h2">
          {props.post.title}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          made: {props.post.create_at}
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          dept: {props.post.deadline}
        </Typography> */}
        <Typography variant="body2" component="p">
          <br />
          {props.post.content}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <TransitionsModal
          id={props.post.id}
          title={props.post.title}
          content={props.post.content}
        />
      </CardActions>
    </Card>
  );
}
