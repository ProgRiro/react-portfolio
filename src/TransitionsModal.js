import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  margin: {
    marginTop: "10px"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [title, setTitle] = React.useState(props.title);
  const [content, setContent] = React.useState(props.content);

  console.log(props.title);

  const serverDelete = "https://portfolio-by-progriro.herokuapp.com/delete";
  const serverEdit = "https://portfolio-by-progriro.herokuapp.com/edit";

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleDelete = (e, id) => {

    const data = { id: id };

    setOpenDelete(false);
    window.location.reload();

    axios
      .post(serverDelete, data)
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
  };

  const handleSubmit = (e, id) => {
    const id_data = id;
    const title_data = title;
    const content_data = content;

    const data = { id: id_data, title: title_data, content: content_data };

    axios
      .post(serverEdit, data)
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
  };

  const handleChange_title = event => {
    setTitle(event);
  };

  const handleChange_content = event => {
    setContent(event);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.button}
        startIcon={<CreateIcon />}
        onClick={handleOpenEdit}
      >
        編集
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={handleOpenDelete}
      >
        削除
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openEdit}
        onClose={handleCloseEdit}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openEdit}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">編集</h2>
            <p id="transition-modal-description">
              編集して、編集ボタンを押してください。
            </p>
            <form
              className={classes.root}
              Validate
              autoComplete="off"
              onSubmit={e => handleSubmit(e, props.id)}
            >
              <div>
                <TextField
                  required
                  id="title"
                  label="Title"
                  // defaultValue="Hello World"
                  value={title}
                  // placeholder={title}
                  onChange={e => handleChange_title(e.target.value)}
                  // style={margin}
                  className={classes.margin}
                />
              </div>
              <div>
                <TextField
                  required
                  id="content"
                  label="Content"
                  // defaultValue="Hello World"
                  value={content}
                  // placeholder={content}
                  onChange={e => handleChange_content(e.target.value)}
                  // style={margin}
                  className={classes.margin}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  color="primary"
                  // style={margin}
                  className={classes.margin}
                >
                  編集する
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openDelete}
        onClose={handleCloseDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openDelete}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">削除</h2>
            <p id="transition-modal-description">
              本当に削除しますか？
            </p>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={e => handleDelete(e, props.id)}
            >
              削除する
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
