require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"gridddle":[function(require,module,exports){
exports.gridddle = function(size, color) {
  var i, j, k, l, lineHorizontal, lineVertical, ref, ref1, results, screenHeight, screenWidth, stepHorizontal, stepVertical;
  screenWidth = Screen.width;
  screenHeight = Screen.height;
  stepHorizontal = screenWidth / size;
  stepVertical = screenHeight / size;
  for (i = k = 0, ref = stepHorizontal; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
    lineVertical = new Layer({
      width: 1 / 2,
      height: screenHeight,
      x: size * i,
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
      y: j * size,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vbW9kdWxlcy9ncmlkZGRsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmdyaWRkZGxlID0gKHNpemUsIGNvbG9yKSAtPlxuICBzY3JlZW5XaWR0aCA9IFNjcmVlbi53aWR0aFxuICBzY3JlZW5IZWlnaHQgPSBTY3JlZW4uaGVpZ2h0XG4gIHN0ZXBIb3Jpem9udGFsID0gc2NyZWVuV2lkdGggLyBzaXplXG4gIHN0ZXBWZXJ0aWNhbCA9IHNjcmVlbkhlaWdodCAvIHNpemVcbiAgZm9yIGkgaW4gWzAuLnN0ZXBIb3Jpem9udGFsXVxuICAgIGxpbmVWZXJ0aWNhbCA9IG5ldyBMYXllclxuICAgICAgd2lkdGg6IDEvMlxuICAgICAgaGVpZ2h0OiBzY3JlZW5IZWlnaHRcbiAgICAgIHg6IHNpemUgKiBpXG4gICAgICB5OiAwXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gIGZvciBqIGluIFswLi5zdGVwVmVydGljYWxdXG4gICAgbGluZUhvcml6b250YWwgPSBuZXcgTGF5ZXJcbiAgICAgIHdpZHRoOiBzY3JlZW5XaWR0aFxuICAgICAgaGVpZ2h0OiAxLzJcbiAgICAgIHg6IDBcbiAgICAgIHk6IGogKiBzaXplXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBREFBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsSUFBRCxFQUFPLEtBQVA7QUFDakIsTUFBQTtFQUFBLFdBQUEsR0FBYyxNQUFNLENBQUM7RUFDckIsWUFBQSxHQUFlLE1BQU0sQ0FBQztFQUN0QixjQUFBLEdBQWlCLFdBQUEsR0FBYztFQUMvQixZQUFBLEdBQWUsWUFBQSxHQUFlO0FBQzlCLE9BQVMseUZBQVQ7SUFDRSxZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtNQUFBLEtBQUEsRUFBTyxDQUFBLEdBQUUsQ0FBVDtNQUNBLE1BQUEsRUFBUSxZQURSO01BRUEsQ0FBQSxFQUFHLElBQUEsR0FBTyxDQUZWO01BR0EsQ0FBQSxFQUFHLENBSEg7TUFJQSxlQUFBLEVBQWlCLEtBSmpCO0tBRGlCO0FBRHJCO0FBT0E7T0FBUyw0RkFBVDtpQkFDRSxjQUFBLEdBQXFCLElBQUEsS0FBQSxDQUNuQjtNQUFBLEtBQUEsRUFBTyxXQUFQO01BQ0EsTUFBQSxFQUFRLENBQUEsR0FBRSxDQURWO01BRUEsQ0FBQSxFQUFHLENBRkg7TUFHQSxDQUFBLEVBQUcsQ0FBQSxHQUFJLElBSFA7TUFJQSxlQUFBLEVBQWlCLEtBSmpCO0tBRG1CO0FBRHZCOztBQVppQjs7OztBREluQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIn0=
