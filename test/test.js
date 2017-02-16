"use strict";

var expect = require('chai').expect;
var main = require('../main.js');

describe('greeting', function(){

  it('expects one argument', () =>{
    // expect(main.greeting()).to.equal('only one argument');
    expect(main.greeting('brad', 'selena')).to.equal('only one argument');

    expect(main.greeting('brad')).to.not.equal('only one argument');
  });

  it('expects input to be a string', () =>{
    expect(main.greeting(9)).to.equal('pass a string');
    expect(main.greeting('brad')).to.not.equal('pass a string');
  });

  it('returns a string', () =>{
    expect(main.greeting('brad')).to.be.a('string');
  });

  it('expects output to be a string', () => {
      expect(main.greeting('brad')).to.equal('Hello, brad');
  });

});

describe('reduce', function(){

  // input is an array
  it('expects an array/object as input', () => {
    expect(main.reduce('arr')).to.be.an('object');
  });

  // input array includes only numbers
  // output is a number
  // output is a sum of all elements

});

// output is a string
// output is expected string
