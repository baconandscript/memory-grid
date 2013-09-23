/*global define */
define([], function () {
    'use strict';

    var cube       = $('.cube');
    var totalCubes = $('.cube').length;
    var i          = 0; 
    var cubeArray  = [];
    var colorArray = [];
    var colors     = ['fafafa', 'fcfcfc', 'f7f7f7', 'e0e0e0'];

    // Fill array with number of cubes.
    for(i = 0; i <= totalCubes; i++) {
      cubeArray.push(i);
    }

    /* 
     * Loop through array while shuffling index and NOT duplicating a single number.
     * Shamelessly copied from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript 
     */
    var shuffle = function(array) {
      var counter = array.length, temp, index;

      // While there are elements in the array
      while (counter--) {
        // Pick a random index
        index = (Math.random() * (counter + 1)) | 0;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    };

    // Shuffle le array.
    cubeArray  = shuffle(cubeArray);

    for(var i = 0; i <= totalCubes; i++) {
      cube.eq(cubeArray[i]).delay(i * 50).queue(function(){
        var flipClasses = ['flipY', 'flipX'];
        var random = Math.round(Math.random() * (1 - 0));
        flipClasses = shuffle(flipClasses);
        $(this).addClass('flipped ' + flipClasses[random]);
      });
    }
    $('.cube').on('click', function(){
      var that       = $(this);
      var activeTile = that.find('.back');
      activeTile.toggleClass('active');
    });
});