import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
  menuContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width:500px)": {
      backgroundColor: Colors.LightMagenta,
      width: "100%",
    },
  },
  modalContainer: {
    width: "inherit",
    "@media screen and (min-width:500px)": {
      borderRadius: "10%",
      height: "40%",
      width: "50%",
      backgroundColor: Colors.LightMagenta,
      border: "3px solid black",
      boxShadow: "0px 15px black",
    },
    "@media screen and (min-width:1300px)":{
        height:"55%",
        width:"40%"
    },
  },
  menuButtonsContainer: {
    alignItems: "center",
  },
  logo: {
    margin: "5% 25%",
    "@media screen and (min-width:1300px)":{
        margin:"12% 25%"
    },    
  },
  pvpButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: "7vh",
    borderRadius: "25px",
    backgroundColor: Colors.Gold,
    border: "3px solid black",
    boxShadow: "0px 15px black",
    margin: "3vh auto 2.5vh auto",
    fontWeight: 700,
    fontSize: "3vw",
    lineHeight: "30.62px",
    "@media screen and (max-width:500px)": {
      fontSize: "5vw",
    },
    "@media screen and (min-width:1300px)":{
        fontSize:"2vw",
        height:"8vh"
    },
    ":hover":{
        border:`3px solid ${Colors.DarkMagenta}`,
        boxShadow: `0px 15px ${Colors.DarkMagenta}`,
        cursor:"pointer"
    }
  },
  gameRulesButton: {
    width: "80%",
    height: "7vh",
    borderRadius: "25px",
    backgroundColor: Colors.White,
    border: "3px solid black",
    boxShadow: "0px 15px black",
    fontWeight: 700,
    fontSize: "3vw",
    lineHeight: "30.62px",
    textAlign: "left",
    "@media screen and (max-width:500px)": {
      fontSize: "5vw",
    },
    "@media screen and (min-width:1300px)":{
        fontSize:"2vw",
        height:"8vh"
    },
    ":hover":{
        border:`3px solid ${Colors.DarkMagenta}`,
        boxShadow: `0px 15px ${Colors.DarkMagenta}`,
        cursor:"pointer"
    }
  },
  pvpSVG: {
    height: "auto",
    width: "7vw",
    "@media screen and (max-width:500px)": {
      width: "16vw",
    },
    "@media screen and (min-width:1300px)":{
        width:"4vw"
    },
  },
  buttonText: {
    paddingLeft: "1vw",
  },
});
