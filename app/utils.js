exports.getParams = (req) => {
    const sort = req.query.sort || "desc";
    let filter_amount = [];
    if (req.query.amount) {
        filter_amount = req.query.amount.split(',').map(item => parseFloat(item));
        filter_amount = filter_amount.sort();
    }

    return {
        sort,
        filter_amount
    };
};