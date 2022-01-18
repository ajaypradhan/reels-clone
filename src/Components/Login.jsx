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
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";

import { Link } from "react-router-dom";

import "./Login.css";
import "pure-react-carousel/dist/react-carousel.es.css";

import bg from "../Assets/bg.png";
import insta from "../Assets/Instagram.png";

import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";

export default function Login() {
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
    text2: {
      textAlign: "center",
      // fontSize: "14px !important",
    },
  });

  const classes = useStyles();
  return (
    <div className="loginWrapper">
      <div
        className="imgcar"
        style={{ backgroundImage: "url(" + bg + ")", backgroundSize: "cover" }}
      >
        <div className="car">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={5}
            naturalSlideWidth={300}
            naturalSlideHeight={550}
            hasMasterSpinner
            isPlaying={true}
            infinite={true}
            dragEnabled={false}
            touchEnabled={false}
          >
            <Slider>
              <Slide index={0}>
                <Image src={img1} />
              </Slide>
              <Slide index={1}>
                <Image src={img2} />
              </Slide>
              <Slide index={2}>
                <Image src={img3} />
              </Slide>
              <Slide index={3}>
                <Image src={img4} />
              </Slide>
              <Slide index={4}>
                <Image src={img5} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      <div className="loginCard">
        <Card varient="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
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
            <Typography
              className={classes.text2}
              color="primary"
              variant="subtitle1"
            >
              Forgot Password?
            </Typography>
          </CardContent>

          <CardActions>
            <Button color="primary" variant="contained" fullWidth={true}>
              Signin
            </Button>
          </CardActions>

          <CardContent></CardContent>
        </Card>

        <Card variant="outlined" className={classes.card2}>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              don't haave an account?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
