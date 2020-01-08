import fs from "fs";

export class TemplateList {
  private _allFiles: string[];

  constructor(folder: string) {
    this._allFiles = fs.readdirSync(folder);
    // this._allFiles = ["stringOne", "stringTwo"];
  }

  get allFiles(): string[] {
    return this._allFiles;
  }

  set allFiles(value: string[]) {
    this._allFiles = value;
  }
}
