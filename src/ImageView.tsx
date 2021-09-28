import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

interface Props{
    imagesBase64Array:string[]
    width:number,
    uploadMergedImages?:()=>void,
}

const ImagesView = ({imagesBase64Array, width, uploadMergedImages}:Props) =>{
    const [howManyImagesOnWidth, handleHowManyImagesOnWidth] = useState<number>(2);
    const handleHowManyImagesOnWidthWrapper = (e:any) => handleHowManyImagesOnWidth(parseInt(e.target.value))    
    return(
        <div style={{position:"relative"}}>
        {imagesBase64Array.length>0 &&
            <div id="Images" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap' }}>
                {
                    imagesBase64Array.map((imageBase64, index)=>{
                        return(
                            imageBase64.length>10 && <img key={index} src={imageBase64} width={width*0.95/howManyImagesOnWidth} alt='NoImage'/>
                        )
                    })
                }
                <Select value={howManyImagesOnWidth} onChange={handleHowManyImagesOnWidthWrapper} style={{position:"absolute", top:"15px", left:'15px', zIndex:1000, backgroundColor:"#f50057"}}>
                    <MenuItem value={1}>1 x 1</MenuItem>
                    <MenuItem value={2}>2 x 2</MenuItem>
                </Select>
                <Button onClick={uploadMergedImages} size="small" style={{position:"absolute", top:"40px", left:'15px', zIndex:1000, backgroundColor:"#f50057"}}>Upload</Button>
            </div>
        }
        </div>
    )
}

export default ImagesView