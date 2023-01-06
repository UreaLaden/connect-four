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
    border: "3px solid black",
    boxShadow: "0px 15px black",
    backgroundColor: Colors.White,
    "@media screen and (min-width:1400px)": {
      height: "57vh",
      width: "40%",
      minWidth: "750px",
    },
    "@media screen and (max-width:1400px)": {
      height: "52vh",
      width: "50%",
      minWidth: "600px",
    },
    "@media screen and (max-width:750px)": {
      minWidth: "400px",
      width: "80%",
      height: "47vh",
    },
  },
  rulesHeader: {
    fontSize: "4vh",
    "@media screen and (max-width:750px)": {
      fontSize: "8vw",
    },
  },
  rulesIconContainer: {
    position: "absolute",
    left: "45%",
    top: "73%",
    right: "46%",
    bottom: "0",
    "@media screen and (min-width:1400px)": {
      left: "48%",
      top: "76%",
      right: "40%",
      bottom: "0",
    },
    "@media screen and (max-width:1400px)": {
      left: "45%",
      top: "74%",
      right: "40%",
      bottom: "0",
    },
    "@media screen and (max-width:750px)": {
      left: "42%",
      top: "71%",
      right: "40%",
      bottom: "0",
    },
  },
  rulesIconButton: {
    backgroundColor: "transparent",
    border: "none",
  },
  contentContainer: {
    textAlign: "initial",
    padding: "0px 5%",
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
  objective: {
    lineHeight: "2em",
    fontSize: "1.8vw",
    color: "rgba(0,0,0,.65)",
    "@media screen and (min-width:1400px)": {
      fontSize: "1.8vh",
    },
    "@media screen and (max-width:1400px)": {
      fontSize: "1.5vh",
    },
    "@media screen and (max-width:750px)": {
      fontSize: "1.3vh",
    },
  },
  listItem: {
    paddingLeft: ".1em",
    lineHeight: "2em",
    fontSize: "1.8vw",
    color: "rgba(0,0,0,.65)",
    "@media screen and (min-width:1400px)": {
      fontSize: "1.8vh",
    },
    "@media screen and (max-width:1400px)": {
      fontSize: "1.5vh",
    },
    "@media screen and (max-width:750px)": {
      fontSize: "1.3vh",
    },
  },
  subHeader: {
    color: Colors.LightMagenta,
    "@media screen and (min-width:1400px)": {
      fontSize: "2.5vh",
    },
    "@media screen and (max-width:1400px)": {
      fontSize: "2.5vh",
    },
    "@media screen and (max-width:750px)": {
      fontSize: "1.8vh",
    },
  },
  rulesIcon: {
    height: "5rem",
    width: "5rem",
    transform: "translateY(-15%)",
    ":hover": {
      cursor: "pointer",
      "#Oval-Copy-38": {
        fill: Colors.DarkMagenta,
      },
      "#Oval-Copy-37": {
        fill: Colors.DarkMagenta,
      },
    },
    // "@media screen and (max-width:1300px)": {
    //     transform:"translateY(15%)",
    // }
  },
});
