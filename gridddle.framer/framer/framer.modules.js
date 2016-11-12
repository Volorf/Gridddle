require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"gridddle":[function(require,module,exports){
exports.gridddle = function(amountOfCell, gridColor) {
  var amountSize, i, j, k, l, lineHorizontal, lineVertical, ref, ref1, results, screenHeight, screenWidth, stepHorizontal, stepVertical;
  amountSize = Screen.width / amountOfCell;
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
      backgroundColor: gridColor,
      name: "Vertical line"
    });
  }
  results = [];
  for (j = l = 0, ref1 = stepVertical; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
    results.push(lineHorizontal = new Layer({
      width: screenWidth,
      height: 1 / 2,
      x: 0,
      y: j * amountSize,
      backgroundColor: gridColor,
      name: "Horizontal line"
    }));
  }
  return results;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvZ3JpZGRkbGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLmdyaWRkZGxlID0gKGFtb3VudE9mQ2VsbCwgZ3JpZENvbG9yKSAtPlxuICBhbW91bnRTaXplID0gU2NyZWVuLndpZHRoIC8gYW1vdW50T2ZDZWxsXG4gIHNjcmVlbldpZHRoID0gU2NyZWVuLndpZHRoXG4gIHNjcmVlbkhlaWdodCA9IFNjcmVlbi5oZWlnaHRcbiAgc3RlcEhvcml6b250YWwgPSBzY3JlZW5XaWR0aCAvIGFtb3VudFNpemVcbiAgc3RlcFZlcnRpY2FsID0gc2NyZWVuSGVpZ2h0IC8gYW1vdW50U2l6ZVxuICBmb3IgaSBpbiBbMC4uc3RlcEhvcml6b250YWxdXG4gICAgbGluZVZlcnRpY2FsID0gbmV3IExheWVyXG4gICAgICB3aWR0aDogMS8yXG4gICAgICBoZWlnaHQ6IHNjcmVlbkhlaWdodFxuICAgICAgeDogYW1vdW50U2l6ZSAqIGlcbiAgICAgIHk6IDBcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JpZENvbG9yXG4gICAgICBuYW1lOiBcIlZlcnRpY2FsIGxpbmVcIlxuICBmb3IgaiBpbiBbMC4uc3RlcFZlcnRpY2FsXVxuICAgIGxpbmVIb3Jpem9udGFsID0gbmV3IExheWVyXG4gICAgICB3aWR0aDogc2NyZWVuV2lkdGhcbiAgICAgIGhlaWdodDogMS8yXG4gICAgICB4OiAwXG4gICAgICB5OiBqICogYW1vdW50U2l6ZVxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmlkQ29sb3JcbiAgICAgIG5hbWU6IFwiSG9yaXpvbnRhbCBsaW5lXCJcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQUEsT0FBTyxDQUFDLFFBQVIsR0FBbUIsU0FBQyxZQUFELEVBQWUsU0FBZjtBQUNqQixNQUFBO0VBQUEsVUFBQSxHQUFhLE1BQU0sQ0FBQyxLQUFQLEdBQWU7RUFDNUIsV0FBQSxHQUFjLE1BQU0sQ0FBQztFQUNyQixZQUFBLEdBQWUsTUFBTSxDQUFDO0VBQ3RCLGNBQUEsR0FBaUIsV0FBQSxHQUFjO0VBQy9CLFlBQUEsR0FBZSxZQUFBLEdBQWU7QUFDOUIsT0FBUyx5RkFBVDtJQUNFLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO01BQUEsS0FBQSxFQUFPLENBQUEsR0FBRSxDQUFUO01BQ0EsTUFBQSxFQUFRLFlBRFI7TUFFQSxDQUFBLEVBQUcsVUFBQSxHQUFhLENBRmhCO01BR0EsQ0FBQSxFQUFHLENBSEg7TUFJQSxlQUFBLEVBQWlCLFNBSmpCO01BS0EsSUFBQSxFQUFNLGVBTE47S0FEaUI7QUFEckI7QUFRQTtPQUFTLDRGQUFUO2lCQUNFLGNBQUEsR0FBcUIsSUFBQSxLQUFBLENBQ25CO01BQUEsS0FBQSxFQUFPLFdBQVA7TUFDQSxNQUFBLEVBQVEsQ0FBQSxHQUFFLENBRFY7TUFFQSxDQUFBLEVBQUcsQ0FGSDtNQUdBLENBQUEsRUFBRyxDQUFBLEdBQUksVUFIUDtNQUlBLGVBQUEsRUFBaUIsU0FKakI7TUFLQSxJQUFBLEVBQU0saUJBTE47S0FEbUI7QUFEdkI7O0FBZGlCIn0=
