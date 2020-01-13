export class TypeAhead {
  private select: JQuery<HTMLElement>;
  private input: JQuery<HTMLInputElement>;
  private optionsOriginal: JQuery<HTMLOptionElement> | null;

  /**
   * The TypeAhead constructor.
   *
   * @param {JQuery<HTMLElement>} select - The Select element.
   * @param {JQuery<HTMLInputElement>} input - The Input element which contains
   * the search string.
   */
  constructor(select: JQuery<HTMLElement>, input: JQuery<HTMLInputElement>) {
    this.select = select;
    this.input = input;
    this.optionsOriginal = null;
  }

  /**
   * Store the original options for the select element.
   *
   */
  public setOptionsOriginal(): void {
    this.optionsOriginal = this.select.children("option") as JQuery<
      HTMLOptionElement
    >;
  }

  /**
   * Given a Select element, filter all of its Option elements to only show those
   * who pass a given test, in `findMatches`.
   *
   * @param {JQuery<HTMLElement>} selectElement - The Select element to be filtered.
   */
  public filterOptionsIn(selectElement: JQuery<HTMLElement>): void {
    this.select = selectElement;
    // noinspection JSMismatchedCollectionQueryUpdate
    const optionsCurrent: JQuery<HTMLOptionElement> = this.select.children(
      "option",
    ) as JQuery<HTMLOptionElement>;
    const matches: JQuery<HTMLOptionElement> | null = this.findMatches(
      this.input.val() as string,
    );
    if (matches !== null) {
      optionsCurrent.remove();
      this.select.append(matches);
    } else {
      this.select.append(this.optionsOriginal as JQuery<HTMLOptionElement>);
    }
  }

  /**
   * Filters the list of Option elements by a given search string.
   *
   * @param {string} search - The string of text to use for filtering the Option list.
   * @returns {JQuery<HTMLOptionElement> | null} The filtered list of Option elements,
   * or null if there are none to begin with or if the search string is blank.
   */
  private findMatches(search: string): JQuery<HTMLOptionElement> | null {
    const regex: RegExp = new RegExp(search, "gi");
    if (this.optionsOriginal !== null && search) {
      return this.optionsOriginal.filter(
        (index: number, option: HTMLOptionElement) => {
          return option.text.match(regex) !== null;
        },
      );
    }
    return null;
  }
}
