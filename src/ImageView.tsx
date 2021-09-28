import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { PDFDocument } from 'pdf-lib';
import {removeFileHeaderFromBase64AndConvertToUint8Array} from '@tofusoup429/pubfuncs';

interface Props{
    imageDatas:string[]
    width:number,
}

const createPDFWithImages = async (imageBase64Array:string[]):Promise<string> => {
    if(imageBase64Array.length>0){
        let pdfDoc = await PDFDocument.create();
        for(let image of imageBase64Array){
            let imageUint8 = removeFileHeaderFromBase64AndConvertToUint8Array(image);
            let embedImage = await pdfDoc.embedPng(imageUint8);
            let imageDim = embedImage.scale(1);
            let page = pdfDoc.addPage();
            page.drawImage(embedImage, {
                x:0,
                y:0,
                width:imageDim.width,
                height:imageDim.height,
            })
        }
        const pdfByteUint8:Uint8Array = await pdfDoc.save();
        let b64:string = Buffer.from(pdfByteUint8).toString('base64');
        return "data:application/pdf;base64,"+b64
    }else{
        throw Error('error in creating pdfFile')
    }   
}

const ImagesView = ({imageDatas, width}:Props) =>{
    const [howManyImagesOnWidth, handleHowManyImagesOnWidth] = useState<number>(2);
    const handleHowManyImagesOnWidthWrapper = (e:any) => handleHowManyImagesOnWidth(parseInt(e.target.value))    
    const createPDFWithImagesWrapper = async () => {
        try{
            let data = await createPDFWithImages(imageDatas);
            localStorage.setItem('pdf', data)
            //console.log('data', data)
            //alert(data)
        }catch(e){
            //alert
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