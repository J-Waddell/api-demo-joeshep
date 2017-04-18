'use strict'

const { bookshelf } = require('../db/database')
require('./favorite')

const Show = bookshelf.Model.extend({
    tableName: 'shows',
    opvotes: function(){ return this.hasMany('Favorite')}
}, {
    getAll: function() {
        console.log("Get all called from Show Model")
        return this.forge()
        .fetchAll()
        .then( (rows) => {
            return rows
        })
        .catch ( (error) => {
            return error
        })
    }
})

module.exports = bookshelf.model('Show', Show)