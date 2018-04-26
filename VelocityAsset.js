const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

const Velocity = require('velocityjs');
const fs = require('fs')
const Compile = Velocity.Compile

module.exports = class VMAsset extends HTMLAsset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'html';
		}
    parse(code) {
      return super.parse(this.getVelocityParseResult(code));
    }
    getVelocityParseResult(code) {
      let json = fs.readFileSync( this.options.rootDir + "/velocity.json", 'utf-8');
      if (json) {
        const context = JSON.parse(json);
        return new Compile(Velocity.parse(code)).render(context);
      }
    }
}