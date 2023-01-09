import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
  menuButton: {
    borderRadius: "40px",
    backgroundColor: Colors.DarkMagenta,
    border: "none",
    ":hover": {
      backgroundColor: Colors.Pink,
      pointer:"cursor"
    },
    "@media screen and (min-width:1400px)": {
        width:"4.5vw",
        height:"30%"
    },
    "@media screen and (max-width:1400px)": {
        width:"10vw",
        height:"65%"
    },
    "@media screen and (max-width:750px)": {
        width:"30vw",
        height:"65%"
    }
  },
  logo: {
    "@media screen and (max-width:750px)": {
      svg: {
        height: "18vw",
        width: "18vw",
      },
    },
  },
  menuLink: {
    textDecoration: "none",
    color: Colors.White,
    fontSize: "1.1rem",
    fontFamily: "inherit",
    ":hover":{
        textDecoration:"none",
        color: Colors.White,
        pointer:"cursor"
    }
  },
});
