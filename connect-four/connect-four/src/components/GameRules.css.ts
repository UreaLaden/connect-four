import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
  rulesContainer: { height: "100%" },
  menuContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width:500px)": {},
  },
  modalContainer: {
    borderRadius: "10%",
    height: "50%",
    width: "45%",
    backgroundColor: Colors.White,
    border: "3px solid black",
    boxShadow: "0px 15px black",
    "@media screen and (max-width:500px)": {
      width: "80%",
      height:"38%"
    },
    "@media screen and (min-width:1300px)": {
      height: "55%",
      width: "40%",
    },
  },
  rulesHeader: {
    fontSize: "4vh",
    "@media screen and (max-width:500px)": {
        fontSize:"8vw"
      },
  },
  rulesIconContainer:{
    position: "absolute",
    left: "45%",
    top: "73%",
    right: "46%",
    bottom: "0"
},
rulesIconButton:{
    backgroundColor:"transparent",
    border:"none"
  },
  objective: {
    lineHeight: "2em",
    fontSize: "1.8vw",
    color: "rgba(0,0,0,.65)",
    "@media screen and (max-width:500px)": {
        fontSize:".75em"
      },
      
  },
  contentContainer: {
    textAlign: "initial",
    padding:"0px 5%",
  },
  itemList: {
    listStyle: "none",
    marginLeft: "-1rem",
    "padding-inline-end": "4%",
    "li::marker": {
      content: 'counter(list-item)"\\a0\\a0\\a0"',
      color: Colors.Black,
    },
  },
  listItem: {
    paddingLeft: ".1em",
    lineHeight: "2em",
    fontSize: "1.8vw",
    color: "rgba(0,0,0,.65)",
    // "@media screen and (max-width:500px)": {
    //     fontSize:".75em"
    //   },
  },
  subHeader: {
    color: Colors.LightMagenta,
    "@media screen and (max-width:500px)": {
        fontSize:".75em"
      },
  },
  rulesIcon: {
    height: "5rem",
    width: "5rem",
    transform:"translateY(-15%)",
    ":hover": {
      cursor: "pointer",
      "#Oval-Copy-38": {
        fill: Colors.DarkMagenta,
      },
      "#Oval-Copy-37": {
        fill: Colors.DarkMagenta,
      },
    },
    "@media screen and (max-width:500px)": {
        height:"3rem",
        width:"3rem",
        transform:"translateY(15%)"
      },
    // "@media screen and (max-width:1300px)": {
    //     transform:"translateY(15%)",
    // }
  },
});
