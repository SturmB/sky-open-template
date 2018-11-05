export class TypeAhead {
  private select: JQuery<HTMLElement>;
  private input: JQuery<HTMLInputElement>;
  private optionsOriginal: JQuery<HTMLOptionElement> | null;

  constructor(select: JQuery<HTMLElement>, input: JQuery<HTMLInputElement>) {
    this.select = select;
    this.input = input;
    this.optionsOriginal = null;
  }

  public setOptionsOriginal() {
    this.optionsOriginal = this.select.children("option") as JQuery<
      HTMLOptionElement
    >;
  }

  public filterOptionsIn(selectElement: JQuery<HTMLElement>) {
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
