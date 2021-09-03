import  Button  from '@material-ui/core/Button'
import React from 'react'
import { useWebRTC1 } from "./useWebRTC1"
export const WebRTC1 = () => {
    let {recordVideo, } = useWebRTC1()
    return(
        <div style={{display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center"}}>
        <div id="WebRTC1" style={{display:"flex", flexDirection:'row'}}>
            <video id='localVideo' width={500} />
            <video id='remoteVideo' width={500} />
        </div>
        <Button id='RecordButton'>{recordVideo?"STOP":"START"}</Button>
        <Button id='RequestButton'>Request</Button>
        </div>
    )
}