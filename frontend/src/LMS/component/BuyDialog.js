import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Backdrop, Button, Modal, Grid, makeStyles } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2, 4),
    outline: "none"
  },
  button: {
    margin: theme.spacing(1, 0, 0, 0)
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        disableBackdropClick={true}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container direction="column">
              <Grid container direction="row" alignItems="center">
                <Grid item xs={11}>
                  {" "}
                  <p id="transition-modal-description">
                    Beginner Guitar Course 1
                  </p>
                </Grid>
                <Grid item container xs={1}>
                  {" "}
                  <CloseIcon fontsize="small" onClick={handleClose} />
                </Grid>
              </Grid>
              <Grid item>
                {" "}
                <h2>2499 BDT</h2>
              </Grid>
              <Grid item>
                <p>for 30 Days Subscription</p>
              </Grid>
              <Grid item xs={12}>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  fullWidth={true}
                >
                  Add to cart
                </Button>
              </Grid>
              <Grid item>
                {" "}
                <Button
                  variant="contained"
                  className={classes.button}
                  fullWidth={true}
                >
                  Buy now
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
