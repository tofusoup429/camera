declare type DragAndDropStatus = "none" | "dragover" | "drop" | 'dbclick';
interface Returns {
    fileName: string;
    dndStatus: DragAndDropStatus;
    fileContent: ArrayBuffer | string | null;
    fileSize: number;
    initializeStates: () => void;
}
export declare const useDropzone: (_componentId?: string) => Returns;
export {};
