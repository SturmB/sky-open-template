var TypeAhead = /** @class */ (function () {
    /**
     * The TypeAhead constructor.
     *
     * @param {JQuery<HTMLElement>} select - The Select element.
     * @param {JQuery<HTMLInputElement>} input - The Input element which contains
     * the search string.
     */
    function TypeAhead(select, input) {
        this.select = select;
        this.input = input;
        this.optionsOriginal = null;
    }
    /**
     * Store the original options for the select element.
     *
     */
    TypeAhead.prototype.setOptionsOriginal = function () {
        this.optionsOriginal = this.select.children("option");
    };
    /**
     * Given a Select element, filter all of its Option elements to only show those
     * who pass a given test, in `findMatches`.
     *
     * @param {JQuery<HTMLElement>} selectElement - The Select element to be filtered.
     */
    TypeAhead.prototype.filterOptionsIn = function (selectElement) {
        this.select = selectElement;
        // noinspection JSMismatchedCollectionQueryUpdate
        var optionsCurrent = this.select.children("option");
        var matches = this.findMatches(this.input.val());
        if (matches !== null) {
            optionsCurrent.remove();
            this.select.append(matches);
        }
        else {
            this.select.append(this.optionsOriginal);
        }
    };
    /**
     * Filters the list of Option elements by a given search string.
     *
     * @param {string} search - The string of text to use for filtering the Option list.
     * @returns {JQuery<HTMLOptionElement> | null} The filtered list of Option elements,
     * or null if there are none to begin with or if the search string is blank.
     */
    TypeAhead.prototype.findMatches = function (search) {
        var regex = new RegExp(search, "gi");
        if (this.optionsOriginal !== null && search) {
            return this.optionsOriginal.filter(function (index, option) {
                return option.text.match(regex) !== null;
            });
        }
        return null;
    };
    return TypeAhead;
}());
export { TypeAhead };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZUFoZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZUFoZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBS0U7Ozs7OztPQU1HO0lBQ0gsbUJBQVksTUFBMkIsRUFBRSxLQUErQjtRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0NBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBRW5ELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxtQ0FBZSxHQUF0QixVQUF1QixhQUFrQztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM1QixpREFBaUQ7UUFDakQsSUFBTSxjQUFjLEdBQThCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNwRSxRQUFRLENBQ29CLENBQUM7UUFDL0IsSUFBTSxPQUFPLEdBQXFDLElBQUksQ0FBQyxXQUFXLENBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFZLENBQzNCLENBQUM7UUFDRixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBNEMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLCtCQUFXLEdBQW5CLFVBQW9CLE1BQWM7UUFDaEMsSUFBTSxLQUFLLEdBQVcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ2hDLFVBQUMsS0FBYSxFQUFFLE1BQXlCO2dCQUN2QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQztZQUMzQyxDQUFDLENBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDIn0=