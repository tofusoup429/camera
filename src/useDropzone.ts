import {useState, useEffect} from 'react';

type DragAndDropStatus = "none"|"dragover"|"drop"

export const useDropzone = (_componentId:string='dropzone') => {
    const [dndStatus, handleDndStatus] = useState<DragAndDropStatus>('none');
    const [fileContent, handleFileContent] = useState<ArrayBuffer|string|null>(null);
    const [fileSize, handleFileSize] = useState<number>(0)

    useEffect(()=>{
        // Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
        const dropzone = document.getElementById(_componentId);
        const dragover = (e:DragEvent)=>{
            handleDndStatus('dragover');
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer!.dropEffect = 'copy';
        }
        dropzone?.addEventListener('dragover',dragover);
        return ()=>removeEventListener('dragover', dragover )
    },[]);

    useEffect(()=>{
        const dropzone = document.getElementById(_componentId);
        const drop = (e:DragEvent)=>{
            handleDndStatus('drop');
            e.stopPropagation();
            e.preventDefault();
            let files = e.dataTransfer!.files; // Array of all files

            for (var i=0, file; file=files[i]; i++) {
                let reader = new FileReader();
                reader.onload = function(file) {
                // finished reading file data.
                        let fileContent:ArrayBuffer|string|null = file!.target!.result;
                        let fileSize:number = file.total;
                        handleFileContent(fileContent);
                        handleFileSize(fileSize);
                    }
                    reader.readAsDataURL(file); // start reading the file data.
                //}
            }
        }
        dropzone?.addEventListener('drop', drop);
        return ()=>removeEventListener('drop', drop)
    },[])

    return {dndStatus, fileContent, fileSize }
}