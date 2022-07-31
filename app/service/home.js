'use strict';

const Service = require('egg').Service;

class GirlService extends Service {
    async getGirl(id) {
        return {
            id,
            name: '小红',
            age: 18,
        }
    }
}

module.exports = GirlService;
