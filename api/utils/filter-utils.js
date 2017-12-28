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

    CalculatePartialPrice(search, offer, amount) {
        return (offer - search) / amount;
    }

    CalculatePartialAmount(search, offer, price) {
        return (offer - search) / price;
    }

    FindOffers(amountsSearch, offers) {
        let result = [];
        let totalSearch = amountsSearch;
        for (let i = 0; i < offers.length; i++) {
            let price = Number.parseFloat(offers[i][0]);
            let amount = Number.parseFloat(offers[i][1]);
            let offer = this.CalculateOffer(price, amount);

            if (this.IsOfferHigherThanSearch(totalSearch, offer)) {
                let newPrice = this.CalculatePartialPrice(totalSearch, offer, amount);
                let newAmount = this.CalculatePartialAmount(totalSearch, offer, price);
                let tempPartialResult = [newPrice, newAmount];
                result.push(tempPartialResult);
                break;
            }

            let tempResult = [price, amount];
            totalSearch -= offer;
            result.push(tempResult);
        }
        return result;
    };
}

module.exports = Utils;