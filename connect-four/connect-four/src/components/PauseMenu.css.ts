import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
  pauseMenuMainContainer: {
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "z-index": 1000,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  pauseMenuModal: {
    backgroundColor: Colors.LightMagenta,
    borderRadius: "25px",
    border: "3px solid black",
    boxShadow: "0px 5px black",
    "@media screen and (min-width:1400px)": {
        height:"50%",
        width:"25%"
    },
    "@media screen and (max-width:1400px)": {
        height:"55%",
        width:"70%"
    },
    "@media screen and (max-width:750px)": {
      height: "40%",
      width: "90%",
    },
  },
  pauseMenuHeader: {
    height: "20%",
    marginTop:"3%",
    fontSize:"12vw",
    color:Colors.White,
    display:"flex",
    alignItems:"center",
    fontWeight:700,
    "@media screen and (min-width:1400px)": {
        fontSize:"8rem",
        marginBottom:"3%"
    },
    "@media screen and (max-width:1400px)": {},
    "@media screen and (max-width:750px)": {}
  },
  menuButtonNormal: {
    height: "20%",
    width: "90%",
    borderRadius: "15px",
    border: "3px solid black",
    boxShadow: "0px 5px black",
    ":hover":{
        boxShadow: `0px 5px ${Colors.DarkMagenta}`,
        border:`3px solid ${Colors.DarkMagenta}`
    },
    "@media screen and (min-width:1400px)": {
        fontSize:"3rem",
        fontWeight:700,
    },
    "@media screen and (max-width:1400px)": {
        fontSize:"6vw",
        fontWeight:700,
    },
    "@media screen and (max-width:750px)": {
        fontSize:"6vw",
        fontWeight:700,
    }
  },
  menuButtonQuit: {
    height: "20%",
    width: "90%",
    borderRadius: "15px",
    border: "3px solid black",
    boxShadow: "0px 5px black",
    backgroundColor:Colors.Pink,
    color:Colors.White,
    ":hover":{
        boxShadow: `0px 5px ${Colors.DarkMagenta}`,
        border:`3px solid ${Colors.DarkMagenta}`
    },
    "@media screen and (min-width:1400px)": {
        fontSize:"3rem",
        fontWeight:700
    },
    "@media screen and (max-width:1400px)": {
        fontSize:"6vw",
        fontWeight:700,
    },
    "@media screen and (max-width:750px)": {
        fontSize:"6vw",
        fontWeight:700,
    }
  },
});
