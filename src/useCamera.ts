import {useEffect, useState} from 'react';

type VideoCoordination={xCoord:number, yCoord:number, width:number, height:number, }

export const useCamera = (
    width:number
)=> {
    const [isStreaming, handleIsStreaming] = useState<boolean>(false);
    const [videoCoordination, handleVideoCoordination] = useState<VideoCoordination>({xCoord:0, yCoord:0, width:0, height:0})
    const [imageData, handleImageData] = useState('');
    let video:HTMLVideoElement;
    let canvas:HTMLCanvasElement;
    
    useEffect(()=>{
        try{
            //#1 get permission to use video
            video = document.getElementsByTagName('video')[0];
            canvas = document.getElementsByTagName('canvas')[0];
            canvas.style.position="absolute";
            canvas.style.left=videoCoordination.xCoord.toString()+'px';
            canvas.style.top=videoCoordination.yCoord.toString()+'px';
            canvas.setAttribute('width', videoCoordination.width.toString());
            canvas.setAttribute('height', videoCoordination.height.toString());
            console.log('canvas positioned!');
            console.log('canvas', canvas)
            let {clientLeft, clientTop, videoWidth, videoHeight} = video
            handleVideoCoordination({xCoord:clientLeft, yCoord:clientTop, width:videoWidth, height:videoHeight})
            let constraint = {
                video:{
                    width:width,
                    height:0,
                    facingMode:width<1000?'environment':'user'
                },
                audio:false
            }
            navigator.mediaDevices.getUserMedia(constraint).then((stream)=>{
                video.srcObject = stream;
                isStreaming?video.play():video.pause()
            }).catch((e)=>{
                console.log('An Error occured', e)
            })
        }catch(e){
            console.log(e)
        }
    },[isStreaming, width]);

    useEffect(()=>{
        try{
            if(!isStreaming){
                let context = canvas.getContext('2d');
                context?.drawImage(video,videoCoordination.xCoord,videoCoordination.yCoord,videoCoordination.width, videoCoordination.height )
                let imageData = canvas.toDataURL('image/png');
                console.log('imageData', imageData);
                handleImageData(imageData);
            }
        }catch(e){
            console.log(e);
        }
    }, [isStreaming]);

    
    

    return {isStreaming, handleIsStreaming, videoCoordination, imageData}
}