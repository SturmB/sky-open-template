namespace OpenTemplate {
  export class TemplateFile {
    public fullPath: string = "";
    public fileName: string = "";

    constructor(file: File) {
      this.fullPath = file.fsName;
      const fn: string | undefined = file.name.split(".").shift();
      this.fileName = fn === undefined ? "File name malformed" : fn;
    }

    public toString() {
      return `fileName: ${this.fileName}
      fullPath: ${this.fullPath}`;
    }
  }
}
