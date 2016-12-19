/* globals module require global __dirname process */
'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

module.exports = function() {
    mongoose.Promise = global.Promise;


    // let User = require('../models/user-model');
    // let Car = require('../models/car-model');
    // let CarBrandDetail = require('../models/car-brand-model');
    // let Rental = require('../models/rental-model');
    // let models = {
    //     User,
    //     Car,
    //     CarBrandDetail,
    //     Rental
    // };
    let models = {};

    let data = {};
    fs.readdirSync('./data')
        .filter(x => x.includes('-data'))
        .forEach(file => {
            let dataModule =
                require(path.join(__dirname, file))({ models });

            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });

    return data;
};