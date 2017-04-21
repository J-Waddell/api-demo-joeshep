'use strict'

const { bookshelf } = require('../db/database')

require('./show')
require('./director')

const Show_Director = bookshelf.Model.Extend({
    tableName: 'shows_directors',
    director: function(){ return this.belongsTo('Director')},
    show: function(){ return this.belongsTo('Show')}
})

module.exports = bookshelf.module('Show_Director', Show_Director)