import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
  menuContainer: {
    height: "100%",
    "@media screen and (min-width:425px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.DarkMagenta,
    },
  },
  modalContainer: {
    "@media screen and (min-width:425px)": {
      borderRadius: "10%",
      height: "35%",
      width: "40%",
      backgroundColor: Colors.LightMagenta,
      border: "3px solid black",
      boxShadow: "0px 15px black",
    },
  },
  menuButtonsContainer: {
    alignItems: 'center',
  },
  logo:{
    margin:"8% 25%"
  },
  pvpButton: {
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width: "80%",
    height: "7vh",
    borderRadius: "25px",
    backgroundColor: Colors.Gold,
    border: "3px solid black",
    boxShadow: "0px 15px black",
    margin:"2.5vh auto",
    fontWeight:700,
    fontSize:"2vw",
    lineHeight:"30.62px"
  },
  gameRulesButton: {
    width: "80%",
    height: "7vh",
    borderRadius: "25px",
    backgroundColor: Colors.White,
    border: "3px solid black",
    boxShadow: "0px 15px black",
    fontWeight:700,
    fontSize:"2vw",
    lineHeight:"30.62px",
    textAlign:"left"
  },
  pvpSVG:{
    height:"auto",
    width:"6vw",
  },
});
