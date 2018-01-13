const mocha = require('mocha');
const {assert, expect} = require('chai');

const isNaturalNum = (num) => {
    return num >= 0 && num < 10;
};

mocha.describe('test', () => {
    const num = 5;
    it('10以下の自然数', () => assert.strictEqual(isNaturalNum(num), true));
    // it('foo', () => assert.typeOf(hoge(name), `string`));
    // it('foo', () => expect(hoge(name)).to.be.a(`string`));
});
