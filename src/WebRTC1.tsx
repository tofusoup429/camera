import  Button  from '@material-ui/core/Button'
import React from 'react'
import { useWebRTC1 } from "./useWebRTC1"
export const WebRTC1 = () => {
    let {mediaRecorderStates} = useWebRTC1()
    return(
        <div style={{display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center"}}>
            <div id="WebRTC1" style={{display:"flex", flexDirection:'row'}}>
                <video id='localVideo' width={500} />
                <video id='remoteVideo' width={500} />
            </div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Button id='StartRecordButton' disabled={mediaRecorderStates==='recording'||mediaRecorderStates==='finished'}>Start</Button>
                <Button id='PauseRecordingButton' disabled={mediaRecorderStates==='inactive'||mediaRecorderStates==='paused'||mediaRecorderStates==='finished'}>Pause</Button>
                <Button id='StopRecordingButton' disabled={mediaRecorderStates==='inactive'||mediaRecorderStates==='paused'||mediaRecorderStates==='finished'}>Stop</Button>
            </div>
            <div>
                {mediaRecorderStates}
            </div>
        </div>
    )
}