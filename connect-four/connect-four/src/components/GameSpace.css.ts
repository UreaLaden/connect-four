import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
    gameSpaceContainer:{
        display:"grid",
        "grid-template-columns": "1fr 2fr 1fr",
    },
    mainContainer:{
        height:"100%",
        marginTop:"2%"
    },
    menuButtonOne:{
        "grid-column-start":0,
        "grid-column-end":1,
        backgroundColor:Colors.Pink,
        border:"1px solid black"
    },
    menuButtonTwo:{
        "grid-column-start":2,
        "grid-column-end":3,
        backgroundColor:Colors.Pink,
        border:"1px solid black"
    },
    logo:{
        "grid-column-start":1,
        "grid-column-end":2,
        backgroundColor:Colors.Gold,
        border:"1px solid black",
        height:"5vh"
    },
    homePlayer:{
        border:"1px solid black"
    },
    awayPlayer:{
        border:"1px solid black"
    },
    playerTurnMarker:{
        border:"1px solid black"
    },
    gameBoard:{
        border:"1px solid black",
        height:"70vh",
        backgroundColor:Colors.White
    },
    backgroundImage:{
        backgroundColor:Colors.DarkMagenta,
        height:"25vh",
        borderRadius:"25px 25px 0px 0px",
        justifySelf:"stretch",
        gridColumn:"1 / -1"
    }
})