/* globals module */
'use strict';
let dataUtils = require('./utils/data-utils');

let mockedData = [{
    _id: 3,
    title: 'Darth Vader T-shirt',
    description: "Join the dark side",
    price: 100055,
    quantity: 10,
    category: 't-shirt',
    imageUrl: 'http://hideyourarms.com/wp-content/uploads/2011/10/Expressions-Darth-Vader-Shirt-480x380.jpg',
    color: 'red',
    isConfigurable: false
}, {
    _id: 2,
    title: 'Star Wars Vintage Poster',
    price: 155,
    quantity: 1,
    description: "Star Wars IV vintage poster. One of its kind!",
    category: 'poster',
    imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--S24cks6n--/c_scale,f_auto,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg',
    color: 'multy',
    isConfigurable: true,
}, {
    _id: 1,
    title: 'Boba Fett Mug',
    price: 15,
    quantity: 20,
    description: "Ideal for bear",
    category: 'mug',
    imageUrl: 'http://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/boba-fett-mug~0.jpg',
    color: 'green'
}]


module.exports = function ({
    models
}) {
    let {
        Product
    } = models;

    return {
        getRecentProducts() {
            return new Promise((resolve, reject) => {
                // resolve(mockedData);
                Product.find()
                    .exec((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res.slice(0, 4));
                    });
            })
        },
        getAllProducts() {
            return new Promise((resolve, reject) => {
                // resolve(mockedData);
                Product.find()
                 .exec((err, res) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(res);
                    });
            })
        },
        getProductById(id) {
            return new Promise((resolve, reject) => {
                // resolve(mockedData.find(x => x._id == id));
                Product.findOne({
                    _id: id
                }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(res);
                });
            });
        }
    };
};