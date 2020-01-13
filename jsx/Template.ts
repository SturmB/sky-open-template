namespace OpenTemplate {
  export class TemplateFile {
    public fullPath: string = "";
    public fileName: string = "";

    /**
     * Constructor for TemplateFile. Extracts a given file's full path
     * and file name.
     *
     * @param {File} file - The file from which to get the full path
     * and the file name.
     */
    constructor(file: File) {
      this.fullPath = file.fsName;
      const fn: string | undefined = file.name.split(".").shift();
      this.fileName = fn === undefined ? "File name malformed" : fn;
    }

    /**
     * Returns a two-line string listing the contents of the File's
     * full path and its file name.
     *
     * @returns {string} The contents of the File's full path and its file name.
     */
    public toString(): string {
      return `fileName: ${this.fileName}
      fullPath: ${this.fullPath}`;
    }
  }
}
