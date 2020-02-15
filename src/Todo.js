import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MySQL from "./TodoApp";
import ValidationTextFields from "./ValidationTextFields";

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
  addButton: {
    color: "#fff"
  }
}));

const myParent = {
  position: "relative"
};

const myChild = {
  position: "fixed",
  bottom: "30px",
  right: "30px"
};

export default function Todo() {
  const classes = useStyles();
  const [openNew, setOpenNew] = React.useState(false);

  const handleOpenNew = () => {
    setOpenNew(true);
  };

  const handleCloseNew = () => {
    setOpenNew(false);
  };

  return (
    <div style={myParent}>
      <MySQL />
      <Fab style={myChild} color="primary" aria-label="add">
        <AddIcon
          variant="contained"
          size="medium"
          color="primary"
          className={classes.addButton}
          onClick={handleOpenNew}
        ></AddIcon>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openNew}
          onClose={handleCloseNew}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={openNew}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Todoを追加する</h2>
              <p id="transition-modal-description">
                追加するTodoを入力して、送信ボタンを押してください。
              </p>
              <ValidationTextFields />
            </div>
          </Fade>
        </Modal>
      </Fab>
    </div>
  );
}
