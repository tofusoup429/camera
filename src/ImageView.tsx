import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
interface Props{
    objectKey:string,
    imagesBase64Array:string[]
    width:number,
    uploadMergedImages:()=>void,
    nameToMergedImages:string,
    handleNameToMergedImages:(arg:string)=>void
}

const ImagesView = ({objectKey, imagesBase64Array, width, uploadMergedImages, nameToMergedImages, handleNameToMergedImages}:Props) =>{ 
    const handleNameToMergedImagesWrapper = (e:any) => {
        handleNameToMergedImages(e.target.value)
    }
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
                <Typography 
                    color="secondary" 
                    variant="caption" 
                    style={{position:"absolute", top:'15px', right:'15px'}}>
                    <b>{objectKey}</b>
                </Typography>
                <div style={{position:"absolute", bottom:"40px", left:'15px', zIndex:1000, display:"flex", flexDirection:'row', justifyContent:'flex-start'}}>
                    <TextField size="small" value={nameToMergedImages} onChange={handleNameToMergedImagesWrapper} variant="outlined" style={{backgroundColor:'white'}} />
                    <Button onClick={uploadMergedImages} size="small" color="secondary" variant="contained" placeholder="파일명">Upload</Button>
                </div>
                
                
            </div>
        }
        </div>
    )
}

export default ImagesView