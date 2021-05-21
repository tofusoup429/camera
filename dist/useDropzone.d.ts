declare type DragAndDropStatus = "none" | "dragover" | "drop" | 'dbclick';
interface Returns {
    fileName: string;
    dndStatus: DragAndDropStatus;
    fileContent: string | null;
    fileSize: number;
    dropzoneId: string;
    initializeStates: () => void;
}
export declare const useDropzone: (_componentId?: string) => Returns;
export {};
