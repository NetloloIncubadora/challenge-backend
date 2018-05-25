const OrderBook = require('../fixture/offer');

class OfferService {
    constructor(){ }
 
    async getOffers(amounts, sort){
        try{
            const offers = new OrderBook();
            const asks = this.findByAmount(amounts, offers.asks);
            const bids = this.findByAmount(amounts, offers.bids);
            const orderedOffers = await Promise.all([asks, bids]).then((values) =>{
                const orderedAsks = values[0].sort(this.sortPrice(sort));
                const orderedBids = values[1].sort(this.sortPrice(sort));
                return { asks:orderedAsks, bids:orderedBids };
            }).catch((err) => {
                throw err;
            });
            return orderedOffers;
        } catch(err){
            throw err;
        }
    }

    async findByAmount(amounts, offers){
        try{        
            return offers.filter((offer)=> {
                            const foundOffer = amounts.find((amount)=> {
                                return parseFloat(amount).toFixed(2) === offer[1].toFixed(2);
                            });        
                            return foundOffer != undefined;                
                        }).map((offer) => {
                            return { calculatedPrice: this.calculateOfferPrice(offer), amount: offer[1]};
                        });
        } catch(err) {
            err.message += " Error could not find offer by amount";
            throw err;
        }
    }

    sortPrice(sort){
        try {
            if (sort === 'desc')
            return this.sortDesc;
        else
            return this.sortAsc;
        } catch(err) {
            throw new Error("Error sorting price");
        }
    }

    sortAsc(offerA, offerB){        
        try {
            return offerA.calculatedPrice - offerB.calculatedPrice;
        } catch(err) {
            throw new Error("Error sorting asc");
        }
    }
    
    sortDesc(offerA, offerB){
        try {
            return offerB.calculatedPrice - offerA.calculatedPrice;
        } catch(err) {
            throw new Error("Error sorting desc");
        }
    }

    calculateOfferPrice(offer){
        try {
            return (offer[0] * offer[1]).toFixed(3);
        } catch(err) {
            throw new Error("Error calculating offer price");
        }        
    }
}

module.exports = OfferService;