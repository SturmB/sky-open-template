var TypeAhead = /** @class */ (function () {
    function TypeAhead(select, input) {
        this.select = select;
        this.input = input;
        this.optionsOriginal = null;
    }
    TypeAhead.prototype.setOptionsOriginal = function () {
        this.optionsOriginal = this.select.children("option");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZUFoZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZUFoZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBS0UsbUJBQVksTUFBMkIsRUFBRSxLQUErQjtRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU0sc0NBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBRW5ELENBQUM7SUFDSixDQUFDO0lBRU0sbUNBQWUsR0FBdEIsVUFBdUIsYUFBa0M7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsaURBQWlEO1FBQ2pELElBQU0sY0FBYyxHQUE4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDcEUsUUFBUSxDQUNvQixDQUFDO1FBQy9CLElBQU0sT0FBTyxHQUFxQyxJQUFJLENBQUMsV0FBVyxDQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBWSxDQUMzQixDQUFDO1FBQ0YsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQTRDLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixNQUFjO1FBQ2hDLElBQU0sS0FBSyxHQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUNoQyxVQUFDLEtBQWEsRUFBRSxNQUF5QjtnQkFDdkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUM7WUFDM0MsQ0FBQyxDQUNGLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQyJ9