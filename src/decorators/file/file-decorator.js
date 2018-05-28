'use strict';

const fs = require('fs');
const boom = require('boom');

module.exports = (fastify) => {
  fastify.decorate('readSingleFile', async (fileName) => await _readFile(fileName, fastify), [ 'config']);

  fastify.decorate('readMultFiles', (fileName) => {
    if (!Array.isArray(filesNames)) throw new Error('the array is required');

    const filesReady = filesNames.map((fileName) => _readFile(fileName, fastify).catch(e => e));
    return Promise.all(filesReady);
  }, [
    'config'
  ]); 
};

function _readFile(fileName, fastify) {
  return new Promise((resolve, reject) => {
    if (typeof fileName !== 'string') return reject(new Error('the string is required'));
    
    fs.stat(fileName, (err, stats) => {
      if (err) return reject(new Error('The file not found'));

      if (stats.isFile()) {
        fs.readFile(fileName, fastify.config.charset, (error, data) => {
          if (error) return reject(new Error('The conflict file'));
          resolve(data);
        });
      }
      else {        
        return reject(new Error('The path not found'));
      }
    });
  });
};