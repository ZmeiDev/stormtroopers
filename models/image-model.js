/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Image', {
    likes: [{
        username: String
    }],
    dislikes: [{
        username: String
    }],
    comments: [{
        username: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }]
})