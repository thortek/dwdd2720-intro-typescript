import { ExampleCodeSnippet, VideoDisplayer } from "../types/ExampleCodeSnippet"

export class ExampleCodeSnippetImpl implements ExampleCodeSnippet, VideoDisplayer {
    constructor(
      public title: string,
      public description: string,
      public instructions: string,
      public solution: string,
      public code: string,
      public videoUrl: string
    ) {}
    displayVideo(theFrame: HTMLIFrameElement): void {
      //throw new Error("Method not implemented. Why didn't you listen to Thor?");
      theFrame.src = this.videoUrl
    }
  }

  export class CodeSnippetOnly implements ExampleCodeSnippet{
    constructor(
      public title: string,
      public description: string,
      public instructions: string,
      public solution: string,
      public code: string
    ) {}
  }