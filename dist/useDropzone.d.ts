declare type DragAndDropStatus = "none" | "dragover" | "drop";
export declare const useDropzone: (_componentId?: string) => {
    dndStatus: DragAndDropStatus;
    fileContent: string | ArrayBuffer | null;
    fileSize: number;
};
export {};
