'use strict';

class Utils {
    Comparator(a, b) {
        return a[0] > b[0] ? 1 : -1;
    };

    SplitParameters(values) {
        return values !== undefined ? values.split(',') : values;
    };

    SortResults(values, sortOption) {
        if (sortOption !== undefined) {
            if (sortOption === 'asc')
                return values.sort(Comparator);
            else
                return values.sort(Comparator).reverse();
        }
        return values;
    };

    // Should be below the lowest amount or below one of them?
    IsBelowPrice(amount, offer) {
        return offer < amount;
    };
    // Should be below the lowest amount or below one of them?
    IsBelowPrices(amounts, offer) {
        let result = false;

        for (let i = 0; i < amounts.length; i++) {
            let amount = amounts[i];
            if (offer < amount) {
                result = true;
                break;
            }
        }

        return result;
    };

    FindAmount(amounts, offers) {
        let result = [];
        for (let i = 0; i < offers.length; i++) {
            let offer = offers[i][0];
            if (IsBelowPrices)
                result.push(offer);
            // for (let j = 0; j < amounts.length; j++) {
            //     let amount = amounts[j];
            //     if (IsBelowPrice(amount, offer))
            //         result.push(offer);
            //     // if (offer == amount) {
            //     //     result.push(offer);
            //     // }
            // }
        }
        return result;
    };
}

module.exports = Utils;