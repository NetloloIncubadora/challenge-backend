'use strict';

const querystring = require('querystring');

module.exports = {
  bids: async (request, fastify) => {
    const {
      order
    } = request.query;

    if (order) {
      let result;
      if (order.toLocaleLowerCase() === 'asc') {
        result = await _handleBidsReadFile(fastify);
        return result.sort((a, b) => a - b);
      }
      else {
        result = await _handleBidsReadFile(fastify);
        return result.sort((a, b) => b - a);
      }
    }

    return _handleBidsReadFile(fastify);
  },

  bidsValues: async (request, fastify) => {
    const {
      values
    } = request.params;
    const parseValues = querystring.parse(values);

    let search = await _handleBidsReadFile(fastify);

    const isFound = _handleFilterValues(parseValues, search);
    return (isFound.length === 0) ? `Sorry but I don't found anything` : isFound;
  },

  price: async (request, fastify) => {
    const {
      order
    } = request.query;

    if (order) {
      let result;
      if (order.toLocaleLowerCase() === 'asc') {
        result = await _handlePriceReadFile(fastify);
        return result.sort((a, b) => a - b);
      }
      else {
        result = await _handlePriceReadFile(fastify);
        return result.sort((a, b) => b - a);
      }
    }

    return _handlePriceReadFile(fastify);
  },

  priceValues: async (request, fastify) => {
    const {
      values
    } = request.params;
    const parseValues = querystring.parse(values);

    let search = await _handlePriceReadFile(fastify)

    const isFound = _handleFilterValues(parseValues, search);
    return (isFound.length === 0) ? `Sorry but I don't found anything` : isFound;
  }
};

async function _handleBidsReadFile(fastify) {
  return JSON.parse(await fastify.readSingleFile(`${__dirname}/orderbook.json`))
    .bids
    .reduce((prev, current) => prev.concat(current), [])
    .reduce((prev, current, index) => (prev.length === 0) ? prev.concat(current) : (index % 2 === 0) ? prev.concat(current) : prev, [])
}

async function _handlePriceReadFile(fastify) {
  return JSON.parse(await fastify.readSingleFile(`${__dirname}/orderbook.json`))
    .bids
    .reduce((prev, current) => prev.concat(current), [])
    .reduce((prev, current, index) => (prev.length === 0 && index === 0) ? [] : (index % 2 !== 0) ? prev.concat(current) : prev, [])
}

function _handleFilterValues(parseValues, search) {
  let found;
  Object
    .keys(parseValues)
    .forEach((key) => (typeof parseValues[key] === 'string') ?
      found = search.filter((item) => item === Number(parseValues[key])) :
      found = parseValues[key].filter((item) => (search.filter((i) => Number(item) === i)).length !== 0)
    );

  return found;
}