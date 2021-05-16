import {useState, useEffect} from 'react';

type DragAndDropStatus = "none"|"dragover"|"drop"|'dbclick'

export const useDropzone = (_componentId:string='dropzone') => {
    const [dndStatus, handleDndStatus] = useState<DragAndDropStatus>('none');
    const [fileContent, handleFileContent] = useState<ArrayBuffer|string|null>(null);
    const [fileSize, handleFileSize] = useState<number>(0)
    const [dropzoneId, ] = useState<string>(_componentId);
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
        const dblclick = (e:DragEvent)=>{
            handleDndStatus('dbclick');
            e.stopPropagation();
            e.preventDefault();
            console.log('dbclicked');
        }
        dropzone?.addEventListener('dblclick',dblclick);
        return ()=>removeEventListener('dblclick', dblclick )
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

    return {dndStatus, fileContent, fileSize, dropzoneId}
}