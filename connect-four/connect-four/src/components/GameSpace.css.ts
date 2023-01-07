import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
    gameSpaceContainer:{
        display:"grid",
        "grid-template-columns": "repeat(3,1fr)",
    },
    mainContainer:{
        height:"100%",
        marginTop:"5%"
    },
    menuButtonOne:{
        display:"flex",
        alignItems:"center",
        justifyContent:"end",
    },
    menuButtonA:{
        height:"70%",
        width:"15%",  
        minWidth:"113px",      
        borderRadius:"40px",
        backgroundColor:Colors.DarkMagenta,
        border:"none"
    },
    menuButtonB:{
        height:"70%",
        width:"15%",  
        minWidth:"113px",      
        borderRadius:"40px",
        backgroundColor:Colors.DarkMagenta,
        border:"none"
    },
    menuButtonTwo:{
        display:"flex",
        alignItems:"center",
        justifyContent:"start",
    },
    menuLink:{
        textDecoration:"none",
        color:Colors.White,
        fontSize:"1.1rem",
        fontFamily:"inherit",
    },
    logoContainer:{
        height:"5vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0px 9% 0px 9%  "
    },
    logo:{},
    homePlayer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"end"
    },
    awayPlayer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"start"
    },
    playerMoveMarker:{
        position:"absolute",
        top:"14%",
        "z-index":100,
        boxShadow:"0px 25px black"
    },
    gameBoardBack:{
        gridColumn:"2 / 3",
        gridRow:"2 / 3",
        height:"50vh",
        display:"flex",
        alignItems:"end",
        justifyContent:"center",
        "z-index":"9"
    },
    gameBoardFront:{
        gridColumn:"2 / 3",
        gridRow:"2 / 3",
        display:"flex",
        alignItems:"end",
        justifyContent:"center",
        transform:"translateY(-3%)",
        "z-index":"10",
        border:"1px solid black"
    },
    board:{
        height:"80%"
    },
    boardBack:{
        gridColumn:"2 / 3",
        gridRow:"2 / 3",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    boardFront:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:"10"

    },
    backgroundImage:{
        backgroundColor:Colors.DarkMagenta,
        height:"48vh",
        borderRadius:"5rem 5rem 0px 0px",
        gridColumn:"1 / -1",
        transform:"translateY(-10%)"
    },
    turnIcon:{
        boxShadow: "0px 25px black",
        borderRadius:"15%",
        "#redBackground":{
            overflow:"initial"
        },
        "#goldBackground":{
            overflow:"initial"
        },
    },
    playerTurnMarker:{
        height:"15vh",
        gridRow:"2 / 3",
        gridColumn:"2 / 3",
        "z-index":"20",
        display:"flex",
        alignSelf:"end",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"-15%"
    },
})