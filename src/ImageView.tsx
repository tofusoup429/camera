import React from 'react';

interface Props{
    imageDatas:string[]
    imageWidth:number
}

const ImagesView = ({imageDatas, imageWidth}:Props) =>{
    return(
        <>
        {imageDatas.length>0 && 
            <div id="Images" style={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:'wrap', margin:'1%', padding:'1%' }}>
                {
                    imageDatas.map((imageData, index)=>{
                        return(
                            imageData.length>10 && <img key={index} src={imageData} width={imageWidth} alt='NoImage'/>
                        )
                    })
                }
            </div>
        }
        </>
    )
}

export default ImagesView