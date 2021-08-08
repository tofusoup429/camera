# @tofusoup429/dropzone
## What is this?
### This is a tiny custom hook that turn a DOM Element into a dropzone. 
-----------------------------------------------------------------------------------------------------------------------
#### To download code.  
```
git clone https://github.com/tofusoup429/dropzone
```

-----------------------------------------------------------------------------------------------------------------------
#### Install npm package
```
yarn add @tofusoup429/dropzone
```

#### how to use
```
import { useEffect } from "react";
import { useDropzone } from "@tofusoup429/dropzone";
const SimpleDropzone = () => {
    let {fileName, dndStatus, fileContent, fileSize,  initializeStates} = useDropzone("DNDTargetElement");
    useEffect(()=>{
        if(dndStatus === 'drop'){
            console.log(fileContent); 
            console.log(fileSize); // fileSize may be useful when you want to put restriction on the max size of acceptable file
            //do whatever you want with the fileContent
            initializeStates()
        }
    }, [fileContent])
    return(
        <div style={{margin:'5%'}}>
            <h5>SimpleDropzone</h5>
            <div 
                id="DNDTargetElement" // The id should be the same as the parameter of the useDropzone. 
                style={{width:'100px', height:'100px', backgroundColor:(dndStatus==="dragover")?"lightgrey":"white", borderStyle:"dotted"}} 
            />
        </div>
    )
}
export default SimpleDropzone

```
