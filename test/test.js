// add.test.js
const VelocityAsset = require('./../VelocityAsset')
const path = require('path')
const Parser = require('parcel-bundler/src/Parser')
describe('VelocityAsset', function() {
  it('velocity asset file parse', function() {
    const asset = new VelocityAsset(path.join(__dirname, './test.vm'), {  }, { 
      rootDir: path.join(__dirname), 
      parser: new Parser(),
      publicURL: '/' + path.basename('dist')
    })
    asset.process().then(res => {
      if (~res.indexOf('jiangtao')) {
        // console.log('ok')
      }
    })
  })
})