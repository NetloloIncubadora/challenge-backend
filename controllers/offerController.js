'use strict';

const OfferService = require('../services/offerService');

// Get
exports.search = async (req, res) => {
    try {
        if (!(req.params.sort === 'asc' || req.params.sort === 'desc' || req.params.sort === undefined))
            return res.status(400).send("You entered an invalid parameter =/");

        const amounts  = req.params.amounts.split(',');
        if (amounts.length === 0)
            return res.status(400).send("You entered an invalid parameter =/");

        const isNotAmount = amounts.some((amount)=> {
            return isNaN(amount);
        });
        if (isNotAmount)
            return res.status(400).send("You entered an invalid parameter =/");

        const offerService = new OfferService();
        const offers = await offerService.getOffers(req.params.amounts.split(','), req.params.sort);
        return res.send(offers);
    } catch(err){
        console.log('DEU RUIm');
        throw err;
    }    
};