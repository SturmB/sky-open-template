export class TemplateFile {

  public fullPath: string = "";
  public fileName: string = "";

  constructor(fullPath: string) {
    this.fullPath = fullPath;
    const osFixedPath: string = fullPath.replace(/\\/g, "/");
    const fn: string | undefined = osFixedPath.split("/").pop();
    this.fileName = fn === undefined ? "File name malformed" : fn;
  }

  public toString() {
    return `fileName: ${this.fileName}
      fullPath: ${this.fullPath}`;
  }
}
