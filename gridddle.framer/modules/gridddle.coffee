# Add visible/unvisible property for grid
exports.gridddle = (amount, color) ->
  amountSize = Screen.width / amount
  screenWidth = Screen.width
  screenHeight = Screen.height
  stepHorizontal = screenWidth / amountSize
  stepVertical = screenHeight / amountSize
  for i in [0..stepHorizontal]
    lineVertical = new Layer
      width: 1/2
      height: screenHeight
      x: amountSize * i
      y: 0
      backgroundColor: color
  for j in [0..stepVertical]
    lineHorizontal = new Layer
      width: screenWidth
      height: 1/2
      x: 0
      y: j * amountSize
      backgroundColor: color
