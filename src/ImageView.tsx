import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';
interface Props{
    imageDatas:string[]
    width:number,
}



const ImagesView = ({imageDatas, width}:Props) =>{
    const [howManyImagesOnWidth, handleHowManyImagesOnWidth] = useState<number>(2);
    const handleHowManyImagesOnWidthWrapper = (e:any) => handleHowManyImagesOnWidth(parseInt(e.target.value))    
    const createPDFWithImagesWrapper = async () => {
        try{
            let url = 'https://mpi85.vercel.app/api/pi84/create-pdf-with-images/';
            let body = {imageBase64Array:imageDatas}
            let {data} = await axios.post(url,body);
            alert(data)
            //handlePDFFileBase64(data);
        }catch(e){
            alert("err in createPDFWithImagesWrapper:"+JSON.stringify(e))
            //handlePDFFileBase64(JSON.stringify(e))
        }
    }
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
                <Button onClick={createPDFWithImagesWrapper} size="small" style={{position:"absolute", top:"40px", left:'15px', zIndex:1000, backgroundColor:"#f50057"}}>Upload</Button>
            </div>
        }
        </div>
    )
}

export default ImagesView