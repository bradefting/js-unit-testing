"use strict";

module.exports = {
  //code goes here
  greeting: function(name){
    if(arguments.length !== 1){
      return 'only one argument'
    }
    if(typeof name !== 'string'){
      return 'pass a string';
    }
    return `Hello, ${name}`
  }

  // reduce: function(arr){
  //   arr = [1,2];
  //
  //   if(typeof arr === 'object')
  //   return 'object';
  // }


};
