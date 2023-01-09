import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/colors";

export const styles = mergeStyleSets({
    cardContainer:{
        backgroundColor:Colors.White,
        height:"100%",
        width:"100%",
        borderRadius:"20px",
        alignItems:"center",
        position:"relative",
        border:"3px solid black",
        margin:"auto",
        display:"flex",
        boxShadow:"0px 5px black",
        justifyContent:"space-between",
        flexDirection:"column",
        
    },
    homeIcon:{
        "@media screen and (min-width:1400px)": {},
        "@media screen and (max-width:1400px)": {
            svg:{
                height:"4.5vh",
                width:"4.5vh",
                position:"absolute",
                left:"-1%",
                top:"25%",
                transform:"translateX(-50%)"
            },
        },
    "@media screen and (max-width:750px)": {
        svg:{
            height:"6.5vh",
            width:"6.5vh",
            position:"absolute",
            left:"-5%",
            top:"15%",
            transform:"translateX(-50%)"
        },
      },
    },
    awayIcon:{
        "@media screen and (min-width:1400px)": {},
        "@media screen and (max-width:1400px)": {
            svg:{
                height:"4.5vh",
                width:"4.5vh",
                position:"absolute",
                right:"-20%",
                top:"25%",
                transform:"translateX(-50%)"
            },
        },
        "@media screen and (max-width:750px)": {
            svg:{
                height:"6.5vh",
                width:"6.5vh",
                position:"absolute",
                right:"-41%",
                top:"15%",
                transform:"translateX(-50%)"
            },
          },
    },
    description:{
        "@media screen and (min-width:1400px)": {},
        "@media screen and (max-width:1400px)": {
            fontSize:"2vh",
            fontWeight:700,
        },
        "@media screen and (max-width:750px)": {
            fontSize:"2vh",
            fontWeight:700,
            marginTop:"8%",            
        }
    },
    points:{
        "@media screen and (min-width:1400px)": {},
        "@media screen and (max-width:1400px)": {
            fontSize:"8vh",
            fontWeight:700
        },
        "@media screen and (max-width:750px)": {
            fontSize:"4vh",
            fontWeight:700
        }
    },
    statsContainerHome:{
        "@media screen and (min-width:1400px)": {
            gridRow:"2 / span 1",
            gridColumn:"0 / span 1"
        },
        "@media screen and (max-width:1400px)": {
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            width:"100%",
            "#away-player":{
                flexDirection:"row-reverse"
            }
        },
        "@media screen and (max-width:750px)": {
            display:"flex",
            flexDirection:"column"
        }
    },
    statsContainerAway:{
        "@media screen and (min-width:1400px)": {},
        "@media screen and (max-width:1400px)": {
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            width:"100%",
            flexDirection:"row-reverse"
        },
        "@media screen and (max-width:750px)": {
            display:"flex",
            flexDirection:"column"
        }
    }
})