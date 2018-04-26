// add.test.js
const VelocityAsset = require('./../VelocityAsset')
const path = require('path')

describe('VelocityAsset', function() {
  it('velocity asset file parse', async function() {
    const asset = new VelocityAsset(path.join(__dirname, './test.vm'), undefined, { rootDir: path.join(__dirname) })
    console.log((await asset.process()))
  })
})