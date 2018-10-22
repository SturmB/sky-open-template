namespace OpenTemplate {
  export class TemplateFile {
    public fullPath: string = "";
    public fileName: string = "";

    public toString() {
      return `fileName: ${this.fileName}
      fullPath: ${this.fullPath}`;
    }
  }
}
