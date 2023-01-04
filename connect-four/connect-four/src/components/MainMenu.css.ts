import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles=mergeStyleSets({
    menuContainer:{
        height:'100%',
        "@media screen and (min-width:425px)":{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:Colors.DarkMagenta
        }
    },
    modalContainer:{
        "@media screen and (min-width:425px)":{
            borderRadius:"10%",
            height:'50%',
            width:"70%",
            backgroundColor:Colors.LightMagenta,
            border: "2px solid black",
            boxShadow:"0px 15px black"
        }
    }
})
