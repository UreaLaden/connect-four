import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const markerPositions = mergeStyleSets({
    markerContainer:{
        gridRow:"2 / span 1",
        gridColumn:"2 / span 1",
        display:"grid",
        gridTemplate:"1fr / repeat(7,1fr)",
    },
    A:{
        gridColumn:"1 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"
        
    },
    B:{
        gridColumn:"2 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"
    },
    C:{
        gridColumn:"3 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"
    },
    D:{
        gridColumn:"4 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"
    },
    E:{
        gridColumn:"5 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"
    },
    F:{
        gridColumn:"6 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"
    },
    G:{
        gridColumn:"-1 / span 1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"25%",
        transform:"translateX(-100%)"
    },
    icon:{
        filter: "drop-shadow(0px 4px rgba(0,0,0))"

    }
})

export const styles = mergeStyleSets({
  mainContainer: {
    height: "100%",
    display: "grid",
    position: "relative",
    "@media screen and (min-width:1400px)": {
      gridTemplate: "2fr 1fr 4fr 3fr / 1fr 1fr 1fr",
      minWidth:"2100px"
    },
    "@media screen and (max-width:1400px)": {
      gridTemplate: "repeat(2,1fr) 5fr 2fr / 1fr",
    },
    "@media screen and (max-width:750px)": {
      gridTemplate: "repeat(2,1fr) 5fr 2fr / 1fr",
    },
  },
  headerContainer: {
    display: "grid",
    gridTemplate: "1fr / 1fr 2fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    "@media screen and (min-width:1400px)": {
      gridRow: "0 / 1",
      gridColumn: "2 / 3",
    },
    "@media screen and (max-width:1400px)": {
      padding: "2.5% 5% 0 5% ",
    },
    "@media screen and (max-width:750px)": {
      padding: "10% 5% 0 5% ",
    },
  },
  playerStats: {
    display: "grid",
    gridTemplate: "1fr / repeat(2,1fr)",
    "@media screen and (min-width:1400px)": {},
    "@media screen and (max-width:1400px)": {
      padding: "5% 10% 10% 10%",
      gridGap: "5%",
    },
    "@media screen and (max-width:750px)": {
      gridGap: "10%",
      padding: "10% 10% 14% 10%",
    },
  },
  playerOneStats:{
    gridRow:"3 /  span 1",
    gridColumn:"1 / span 1",  
    display:"flex",
  },
  playerTwoStats:{
    gridRow:"3 / span 1",
    gridColumn:"-2 / span 1",
    display:"flex"
  },
  gameBoard: {
    backgroundColor: "transparent",
    position: "relative",
    display: "inline-grid",
    alignItems: "center",
    justifyItems: "center",
    "grid-template-columns": "repeat(12,1fr)",
    minWidth: "400px",
    "@media screen and (min-width:1400px)": {
      gridRow: "3 / -1",
      gridColumn: "1 / span 3",
    },
  },
  backgroundImage: {
    borderRadius: "20% 20% 0px 0px",
    backgroundColor: Colors.DarkMagenta,
    "@media screen and (min-width:1400px)": {
      borderRadius: "10% 10% 0 0",
      gridRow:"-1 / span 2",
      gridColumn:"1 / span 4",
      height: "32vh",
    //   transform:"translateY(-9%)"
    },
    "@media screen and (max-width:1400px)": {
        height: "37vh",
        transform: "translateY(-9%)",
      },
      "@media screen and (max-width:750px)": {
        height: "37vh",
        transform: "translateY(-9%)",
    }
  },
  playerCard: {
    borderRadius: "25px",
    backgroundColor: Colors.White,
    border: "2px solid black",
  },
  gameBoardBack: {
    gridArea: "-1 / -1 / span 1 / 1",
    "z-index": 1,
    alignItems: "center",
    svg: {
      transform: "scale(1.1) translateY(3%)",
    },
  },
  gameBoardFront: {
    gridArea: "-1 / -1 / span 1 / 1",
    "z-index": 10,
    svg: {
      transform: "scale(1.1)",
    },
  },
  playerTurnMarker: {
    height: "15vh",
    gridColumn: "5 / 9",
    display: "flex",
    alignSelf: "end",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-15%",
    position: "absolute",
    "z-index": 100,
    "@media screen and (min-width:1400px)": {
        bottom:"-10%"
    },
    "@media screen and (max-width:1400px)": {
      bottom: "-18%",
    },
    "@media screen and (max-width:750px)": {
      transform: "translateY(25%)",
    },
  },
  turnIcon: {
    boxShadow: "0px 25px black",
    borderRadius: "15%",
    "#redBackground": {
      overflow: "initial",
    },
    "#goldBackground": {
      overflow: "initial",
    },
  },
});
