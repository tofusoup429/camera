import {useState, useEffect} from 'react';

type DragAndDropStatus = "none"|"dragover"|"drop"|'dbclick';

interface Returns {
    fileName:string, 
    dndStatus:DragAndDropStatus, 
    fileContent:ArrayBuffer|string|null, 
    fileSize:number, 
    initializeStates:()=>void;
}

export const useDropzone = (_componentId:string='dropzone'):Returns => {
    const [dndStatus, handleDndStatus] = useState<DragAndDropStatus>('none');
    const [fileContent, handleFileContent] = useState<ArrayBuffer|string|null>(null);
    const [fileSize, handleFileSize] = useState<number>(0)
    const [fileName, handleFileName] = useState<string>('')

    useEffect(()=>{
        //#1 add event-listener "dragover" to DOM that has id "_componetId";
        //When a file is dragged over to the DOM, the dndStatus becomes 'dragover'
        const dropzone = document.getElementById(_componentId);
        const dragover = (e:DragEvent)=>{
            handleDndStatus('dragover');
            e.stopPropagation();
            e.preventDefault();
        }
        dropzone?.addEventListener('dragover',dragover);
        return ()=>removeEventListener('dragover', dragover )
    },[]);

    useEffect(()=>{
        //#2 add event-listener "dragleave" to DOM that has id "_componetId";
        //When a file is dragged out of the DOM, the dndStatus becomes "dragleave"
        const dropzone = document.getElementById(_componentId);
        const dragleave = (e:DragEvent)=>{
            handleDndStatus('none');
            e.stopPropagation();
            e.preventDefault();
        }
        dropzone?.addEventListener('dragleave',dragleave);
        return ()=>removeEventListener('dragleave', dragleave )
    },[]);

    useEffect(()=>{
        //#3 add event-listener "drop" to DOM that has id "_componetId";
        //When a file is dropped on the DOM, the dndStatus becomes "drop";
        //As soon as the file is droped, it reads files and store the file information in the state "fileContents"
        const dropzone = document.getElementById(_componentId);
        const drop = (e:DragEvent)=>{
            let fileName = e!.dataTransfer!.files[0].name||"noName";
            handleFileName(fileName)
            handleDndStatus('drop');
            e.stopPropagation();
            e.preventDefault();
            let files = e.dataTransfer!.files;
            for (var i=0, file; file=files[i]; i++) {
                let reader = new FileReader();
                reader.onload = function(file) {
                    let fileContent:ArrayBuffer|string|null = file!.target!.result;
                    let fileSize:number = file.total;
                    handleFileContent(fileContent);
                    handleFileSize(fileSize);
                }
                reader.readAsDataURL(file);
            }
        }
        dropzone?.addEventListener('drop', drop);
        return ()=>removeEventListener('drop', drop)
    },[])

    const initializeStates = () => {
        //This function initializes all the states
        handleDndStatus('none');
        handleFileContent(null);
        handleFileName('');
        handleFileSize(0);
    }

    return {fileName, dndStatus, fileContent, fileSize, initializeStates}
}