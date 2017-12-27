'use strict';

class Utils {
    Comparator(a, b) {
        return Number.parseFloat(a[0]) > Number.parseFloat(b[0]) ? 1 : -1;
    };

    SplitParameters(values) {
        return values !== undefined ? values.split(',') : values;
    };

    SortByPrice(values, sortOption) {
        if (sortOption !== undefined) {
            if (sortOption === 'asc')
                return values.sort(this.Comparator);
            else
                return values.sort(this.Comparator).reverse();
        }
        return values;
    };

    HasSameAmount(amountsSearch, amount) {
        let result = false;
        for (let i = 0; i < amountsSearch.length; i++) {
            let amountSearch = amountsSearch[i];
            if (amount == amountSearch) {
                result = true;
                break;
            }
        }
        return result;
    }

    FindAmount(amountsSearch, offers) {
        let result = [];
        for (let i = 0; i < offers.length; i++) {
            let price = Number.parseFloat(offers[i][0]);
            let amount = Number.parseFloat(offers[i][1]);
            if (this.HasSameAmount(amountsSearch, amount)) {
                let offer = (price * amount).toFixed(2);
                result.push(offer);
            }
        }
        return result;
    };
}

module.exports = Utils;