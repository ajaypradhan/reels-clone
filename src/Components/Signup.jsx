import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Link } from "react-router-dom";

import "./Signup.css";

import insta from "../Assets/Instagram.png";

export default function Signup() {
  const useStyles = makeStyles({
    text1: {
      color: "grey",
      textAlign: "center",
      fontSize: "14px !important",
    },
    card2: {
      height: "7vh",
      marginTop: "2%",
      marginBottom: "2%",
    },
  });

  const classes = useStyles();
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card varient="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              Sign up to see photos and videos from your friends.
            </Typography>
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />

            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />

            <Button
              size="small"
              variant="outlined"
              color="secondary"
              fullWidth={true}
              margin="dense"
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload profile image
              <input type="file" accept="image/*" hidden />
            </Button>
          </CardContent>

          <CardActions>
            <Button color="primary" variant="contained" fullWidth={true}>
              Signup
            </Button>
          </CardActions>

          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              By Singing up you agree to our terms, conditions and cookies
              policy
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" className={classes.card2}>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              Having an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
