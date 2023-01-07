import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
    container:{
        backgroundColor:Colors.White,
        height:"23%",
        width:"24%",
        borderRadius:"25px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin:"15%",
        border:"3px solid black",
        boxShadow:"0px 15px black",
    },
    icon:{
        transform:"translateY(-75%)",
        height:"1.8vw"
    },
    description:{
        fontSize:"1.5vh"

    },
    points:{
        fontSize:"5vh"
    }
})