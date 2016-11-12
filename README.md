# Gridddle
Grid module for FramerJS

![Grid module for FramerJS](/gridddle_logo.png)

##Lyrics
Sometimes I create a layout for my prototype directly in FramerJS. So I used to design layout with grid (this is more important and useful design tool) I decided to create grid module for my favorite prototyping tool.

##How to use it

1. Download gridddle.coffee;
2. Put it to module folder of your FramerJS project;
3. Connect gridddle to your code.

## How to set gridddle

```
# Connect gridddle module
module = require "gridddle"

# Define amount of cell and grid color
gridColor = "rgba(226, 74, 74, .5)"
amountOfCell = 16

# Call gridddle and pass it out gridddle settings
module.gridddle(amountOfCell, gridColor)
```
