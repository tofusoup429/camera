import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
interface Props{
    imageDatas:string[]
    width:number
}

const ImagesView = ({imageDatas, width}:Props) =>{
    const [howManyImagesOnWidth, handleHowManyImagesOnWidth] = useState<number>(2);

    const handleHowManyImagesOnWidthWrapper = (e:any) => handleHowManyImagesOnWidth(parseInt(e.target.value))
    
        
    return(
        <div style={{position:"relative"}}>
        {imageDatas.length>0 &&
            <div id="Images" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap' }}>
                {
                    imageDatas.map((imageData, index)=>{
                        return(
                            imageData.length>10 && <img key={index} src={imageData} width={width*0.95/howManyImagesOnWidth} alt='NoImage'/>
                        )
                    })
                }
                <Select value={howManyImagesOnWidth} onChange={handleHowManyImagesOnWidthWrapper} style={{position:"absolute", top:"15px", left:'15px', zIndex:1000, backgroundColor:"#f50057"}}>
                    <MenuItem value={1}>1 x 1</MenuItem>
                    <MenuItem value={2}>2 x 2</MenuItem>
                </Select>
            </div>
        }
        </div>
    )
}

export default ImagesView