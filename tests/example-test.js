'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.should();

describe('example', function () {
  it('should 1 equal to 1', function () {
    expect(1 === 1).to.be.true;
  });
  it('should 1 plus 1 equal 2', function () {
    (1 + 1).should.equal(2);
  });
});