exports.gridddle = (size, color) ->
  screenWidth = Screen.width
  screenHeight = Screen.height
  stepHorizontal = screenWidth / size
  stepVertical = screenHeight / size
  for i in [0..stepHorizontal]
    lineVertical = new Layer
      width: 1/2
      height: screenHeight
      x: size * i
      y: 0
      backgroundColor: color
  for j in [0..stepVertical]
    lineHorizontal = new Layer
      width: screenWidth
      height: 1/2
      x: 0
      y: j * size
      backgroundColor: color
