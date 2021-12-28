import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import useAlert from "../hooks/useAlert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const { alert, alertInfo, close } = useAlert();

  return (
    <div className={classes.root}>
      <Snackbar
        open={alert}
        autoHideDuration={alertInfo.time}
        onClose={close}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={close} severity={alertInfo.severity}>
          {alertInfo.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
