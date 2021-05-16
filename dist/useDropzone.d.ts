declare type DragAndDropStatus = "none" | "dragover" | "drop" | 'dbclick';
export declare const useDropzone: (_componentId?: string) => {
    dndStatus: DragAndDropStatus;
    fileContent: string | ArrayBuffer | null;
    fileSize: number;
    dropzoneId: string;
};
export {};
