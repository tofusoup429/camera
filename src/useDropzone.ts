import {useState, useEffect} from 'react';

type DragAndDropStatus = "none"|"dragover"|"drop"|'dbclick';
interface Returns {
    fileName:string, 
    dndStatus:DragAndDropStatus, 
    fileContent:string|ArrayBuffer|null, 
    fileSize:number, 
    dropzoneId:string
}

export const useDropzone = (_componentId:string='dropzone'):Returns => {
    const [dndStatus, handleDndStatus] = useState<DragAndDropStatus>('none');
    const [fileContent, handleFileContent] = useState<ArrayBuffer|string|null>(null);
    const [fileSize, handleFileSize] = useState<number>(0)
    const [dropzoneId, ] = useState<string>(_componentId);
    const [fileName, handleFileName] = useState<string>('')
    //const [fileName, handleFileName] = useState<string>('');
    useEffect(()=>{
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

    return {fileName, dndStatus, fileContent, fileSize, dropzoneId}
}