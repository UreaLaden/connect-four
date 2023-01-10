import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    coinInnerContainer:{
        position:"relative",
        // display:"none",
    },
    ring:{
        height:"25px",
        width:"25px",
        border:"10px solid white",
        borderRadius:"50%",
        position:"absolute",
        bottom:"25%",
        right:"27%",
        top:"20%"
    }
})