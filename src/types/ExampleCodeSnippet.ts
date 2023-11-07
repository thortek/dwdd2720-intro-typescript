export interface ExampleCodeSnippet {
    title: string;
    description: string;
    instructions: string;
    solution: string;
    code: string;
}

export interface VideoDisplayer {
    videoUrl: string;
    displayVideo(theFrame: HTMLIFrameElement): void;
}