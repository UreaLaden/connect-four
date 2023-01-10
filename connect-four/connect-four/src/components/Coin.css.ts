import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
    coinContainer:{
        position:"relative"
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