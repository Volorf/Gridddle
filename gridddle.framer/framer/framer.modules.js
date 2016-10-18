require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"gridddle":[function(require,module,exports){
exports.gridddle = function(amount, color) {
  var amountSize, i, j, k, l, lineHorizontal, lineVertical, ref, ref1, results, screenHeight, screenWidth, stepHorizontal, stepVertical;
  amountSize = Screen.width / amount;
  screenWidth = Screen.width;
  screenHeight = Screen.height;
  stepHorizontal = screenWidth / amountSize;
  stepVertical = screenHeight / amountSize;
  for (i = k = 0, ref = stepHorizontal; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
    lineVertical = new Layer({
      width: 1 / 2,
      height: screenHeight,
      x: amountSize * i,
      y: 0,
      backgroundColor: color
    });
  }
  results = [];
  for (j = l = 0, ref1 = stepVertical; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
    results.push(lineHorizontal = new Layer({
      width: screenWidth,
      height: 1 / 2,
      x: 0,
      y: j * amountSize,
      backgroundColor: color
    }));
  }
  return results;
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vbW9kdWxlcy9ncmlkZGRsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmdyaWRkZGxlID0gKGFtb3VudCwgY29sb3IpIC0+XG4gIGFtb3VudFNpemUgPSBTY3JlZW4ud2lkdGggLyBhbW91bnRcbiAgc2NyZWVuV2lkdGggPSBTY3JlZW4ud2lkdGhcbiAgc2NyZWVuSGVpZ2h0ID0gU2NyZWVuLmhlaWdodFxuICBzdGVwSG9yaXpvbnRhbCA9IHNjcmVlbldpZHRoIC8gYW1vdW50U2l6ZVxuICBzdGVwVmVydGljYWwgPSBzY3JlZW5IZWlnaHQgLyBhbW91bnRTaXplXG4gIGZvciBpIGluIFswLi5zdGVwSG9yaXpvbnRhbF1cbiAgICBsaW5lVmVydGljYWwgPSBuZXcgTGF5ZXJcbiAgICAgIHdpZHRoOiAxLzJcbiAgICAgIGhlaWdodDogc2NyZWVuSGVpZ2h0XG4gICAgICB4OiBhbW91bnRTaXplICogaVxuICAgICAgeTogMFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICBmb3IgaiBpbiBbMC4uc3RlcFZlcnRpY2FsXVxuICAgIGxpbmVIb3Jpem9udGFsID0gbmV3IExheWVyXG4gICAgICB3aWR0aDogc2NyZWVuV2lkdGhcbiAgICAgIGhlaWdodDogMS8yXG4gICAgICB4OiAwXG4gICAgICB5OiBqICogYW1vdW50U2l6ZVxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURBQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLE1BQUQsRUFBUyxLQUFUO0FBQ2pCLE1BQUE7RUFBQSxVQUFBLEdBQWEsTUFBTSxDQUFDLEtBQVAsR0FBZTtFQUM1QixXQUFBLEdBQWMsTUFBTSxDQUFDO0VBQ3JCLFlBQUEsR0FBZSxNQUFNLENBQUM7RUFDdEIsY0FBQSxHQUFpQixXQUFBLEdBQWM7RUFDL0IsWUFBQSxHQUFlLFlBQUEsR0FBZTtBQUM5QixPQUFTLHlGQUFUO0lBQ0UsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7TUFBQSxLQUFBLEVBQU8sQ0FBQSxHQUFFLENBQVQ7TUFDQSxNQUFBLEVBQVEsWUFEUjtNQUVBLENBQUEsRUFBRyxVQUFBLEdBQWEsQ0FGaEI7TUFHQSxDQUFBLEVBQUcsQ0FISDtNQUlBLGVBQUEsRUFBaUIsS0FKakI7S0FEaUI7QUFEckI7QUFPQTtPQUFTLDRGQUFUO2lCQUNFLGNBQUEsR0FBcUIsSUFBQSxLQUFBLENBQ25CO01BQUEsS0FBQSxFQUFPLFdBQVA7TUFDQSxNQUFBLEVBQVEsQ0FBQSxHQUFFLENBRFY7TUFFQSxDQUFBLEVBQUcsQ0FGSDtNQUdBLENBQUEsRUFBRyxDQUFBLEdBQUksVUFIUDtNQUlBLGVBQUEsRUFBaUIsS0FKakI7S0FEbUI7QUFEdkI7O0FBYmlCOzs7O0FESW5CLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAifQ==
