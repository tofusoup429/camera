import React, {useEffect} from 'react'
import {View} from './MobileCamerView'
interface Props{
    view:View,
    handleView:(arg:"videoView"|"imagesView")=>void,
    imageDatas:string[],
    width:number,
    bottom:number,
    right:number
}

export const SmallImagesDisplayedOverlapped = ({view, handleView, imageDatas, width, bottom=15, right=15}:Props) =>{

    const handleViewWrapper = () =>{
        view === 'videoView'? handleView('imagesView'): handleView('imagesView')
    }

    useEffect(()=>{
        let smallImagesDisplayedOverlapped = document.getElementById('SmallImagesDisplayedOverlapped');
        smallImagesDisplayedOverlapped?.addEventListener('click', handleViewWrapper);
        return () => smallImagesDisplayedOverlapped?.removeEventListener('click', handleViewWrapper)
    }, [])

    return(
        <div id="SmallImagesDisplayedOverlapped" style={{position:"absolute", bottom:`${bottom}px`, right:`${right}px`}}>
        {
            imageDatas.map((imageData, index)=>{
                return(
                    imageData.length>10 &&
                        <img 
                            key={index} 
                            src={imageData} 
                            width={width} 
                            alt='NoImage' 
                            style={{position:"absolute",zIndex:10+index, bottom:`${bottom-index*1}px`, right:`${right-index*1}px`}}
                        />
                )
            })
        }
        </div>
    )
}