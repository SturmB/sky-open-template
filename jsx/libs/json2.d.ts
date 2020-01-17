// Type definitions for json-js 2017-06-12
// Project: https://github.com/douglascrockford/JSON-js
// Definitions by: Chris McGee <https://github.com/SturmB>

declare namespace JSON {
  function stringify(
    value: object | any[],
    replacer?: ((key: any, value: any) => any) | string[],
    space?: number | string,
  ): string;

  function parse(
    text: string,
    reviver?: (key: any, value: any) => any,
  ): object | any[];
}
