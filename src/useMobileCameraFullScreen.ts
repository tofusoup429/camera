import {useEffect, useState} from 'react';

export const useMobileCameraFullScreen = ()=> {
    //const [isStreaming, handleIsStreaming] = useState<boolean>(false);
    const [videoDem, handleVideoDem] = useState<{w:number, h:number}>({w:0, h:0})
    const [imageData, handleImageData] = useState('');
    let video:HTMLVideoElement;
    let canvas:HTMLCanvasElement;

    useEffect(()=>{
        try{
            //#1 get permission to use video
            video = document.getElementsByTagName('video')[0];
            canvas = document.getElementsByTagName('canvas')[0];
            let constraint = {
                video:{
                    width:{ideal:4096},
                    height:{ideal:2160},
                    facingMode:"environment"
                },
                audio:false
            }
            navigator.mediaDevices.getUserMedia(constraint).then((stream)=>{
                video.setAttribute("playsinline", "true");
                video.srcObject = stream;
                video.onloadedmetadata = ()=>{
                    console.log('video', video);
                    let {clientLeft, clientTop, videoWidth, videoHeight} = video
                    handleVideoDem({w:videoWidth, h:videoHeight})
                    //match canvas position with video
                    canvas.style.position="absolute";
                    canvas.style.left=clientLeft.toString();
                    canvas.style.top=clientTop.toString();
                    canvas.setAttribute('width', videoWidth.toString());
                    canvas.setAttribute('height', videoHeight.toString());
                    video.play();
                    //handleIsStreaming(true);
                }
            }).catch((e)=>{
                console.log(e);
                alert(e)
            })
        }catch(e){
            alert('error1: '+ e);
            console.log(e);
        }
    },[]);
    const drawImageOnCanvas = async () => {
        try{
            let video:HTMLVideoElement = document.getElementsByTagName('video')[0]
            let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
            let context = canvas.getContext('2d');
            context?.drawImage(video,0,0,videoDem.w,videoDem.h);
            let imageData = canvas.toDataURL('image/png', 1.0);
            console.log('imageData', imageData);
            return imageData;
        }catch(e){
            console.log(e);
            alert('Error in drawing image: '+ e)
            return ''
        }
        
    }
    const takePhoto = async () => {
        try{
            handleImageData('')
            let video:HTMLVideoElement = document.getElementsByTagName('video')[0]
            //video.pause();
            drawImageOnCanvas().then((imageData)=>handleImageData(imageData)).then(()=>video.play());
            //video.play()
        }catch(e){
            console.log(e);
            alert('Error in taking photo: '+ e);
        }
    }
    return {imageData, takePhoto}
}