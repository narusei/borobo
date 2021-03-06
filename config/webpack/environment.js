const { environment } = require('@rails/webpacker')
const typescript = require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const { resolve } = require('path')
environment.config.merge({
    resolve: {
        alias: {
            '@': resolve('app/javascript')
        }
    }
})
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('typescript', typescript)
environment.splitChunks()
module.exports = environment