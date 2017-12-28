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

    CalculateOffer(price, amount) {
        return price * amount;
    }

    IsOfferHigherThanSearch(search, offer) {
        return offer > search;
    }

    CalculatePartialPrice(search, amount) {
        return search / amount;
    }

    SearchAmounts(amountsSearch, offers, sort) {
        let result = [];

        for (let i = 0; i < amountsSearch.length; i++) {
            let localAmount = amountsSearch[i];
            let tempAmount = {
                [localAmount]: this.FindOffers(localAmount, offers, sort)
            }
            result.push(tempAmount);
        }

        return result;
    }

    FindOffers(amountsSearch, offers, sort) {
        let result = [];
        let totalSearch = amountsSearch;
        for (let i = 0; i < offers.length; i++) {
            let price = Number.parseFloat(offers[i][0]);
            let amount = Number.parseFloat(offers[i][1]);
            let offer = this.CalculateOffer(price, amount);

            if (this.IsOfferHigherThanSearch(totalSearch, offer)) {
                let newPrice = this.CalculatePartialPrice(totalSearch, amount);
                let tempPartialResult = [newPrice, amount];
                result.push(tempPartialResult);
                break;
            }

            let tempResult = [price, amount];
            totalSearch -= offer;
            result.push(tempResult);
        }
        result = this.SortByPrice(result, sort);

        return result;
    };
}

module.exports = Utils;