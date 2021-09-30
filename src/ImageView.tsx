import React from 'react';
import Button from '@material-ui/core/Button';

interface Props{
    imagesBase64Array:string[]
    width:number,
    uploadMergedImages?:()=>void
}

const ImagesView = ({imagesBase64Array, width, uploadMergedImages}:Props) =>{ 
    return(
        <div style={{position:"relative"}}>
        {imagesBase64Array.length>0 &&
            <div id="Images" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap' }}>
                {
                    imagesBase64Array.map((imageBase64, index)=>{
                        return(
                            imageBase64.length>10 && <img key={index} src={imageBase64} width={width*0.95/2} alt='NoImage'/>
                        )
                    })
                }
                
                <Button onClick={uploadMergedImages} size="small" style={{position:"absolute", top:"40px", left:'15px', zIndex:1000, backgroundColor:"#f50057"}}>Upload</Button>
            </div>
        }
        </div>
    )
}

export default ImagesView