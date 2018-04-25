module.exports = function (bundler) {
    bundler.addAssetType('vm', require.resolve('./VelocityAsset.js'));
};