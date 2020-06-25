import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    bar: {
        background: "#080815",
        borderBottom: "1px solid #6c63FF",
        "& .MuiButton-root": {
            backgroundColor: "#ff6584",
            color: "white",
            marginLeft: "20px",
            "&:hover": {
                background: "#cc3b58"
            }
          }
    },
    title: {
        flexGrow: 1,
        fontSize: "1.8rem"
    },
  }),
);

const NavigationBar = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.bar}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Spotify Suggestions
            </Typography>
            <Button size="large" onClick={() => {props.setIsShowing("search")}}>Search Favorites</Button>
            <Button size="large" onClick={() => {props.setIsShowing("mood")}}>Search by Mood</Button>
            <Button size="large" href="https://quizzical-goodall-28a278.netlify.app/" target="_blanc">About Us</Button>
            <Button size="large">Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar