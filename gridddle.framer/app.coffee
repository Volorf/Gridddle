# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Gridddle Demo"
	author: "Oleg Frolov"
	twitter: "Volorf"
	description: "Gridddle Demo"


module = require "gridddle"

# Layers

bg = new BackgroundLayer

blueColor = "rgba(77, 144, 226, 1)"
blueLightColor = "rgba(77, 144, 226, .1)"
blueLightColor20 = "rgba(77, 144, 226, .3)"

layerA = new Layer
	width: 768
	height: 141
	backgroundColor: blueColor

layerB = new Layer
	x: 47
	y: 188
	width: 656
	height: 281
	borderRadius: 16
	backgroundColor: blueLightColor
	
layerBB = new Layer
	x: 47
	borderRadius: 16
	backgroundColor: blueLightColor20
	height: 186
	width: 187
	parent: layerB
	y: 48
	
layerBBB = new Layer
	x: 282
	y: 48
	borderRadius: 16
	backgroundColor: blueLightColor20
	height: 45
	width: 328
	parent: layerB
	
layerBBBB = new Layer
	x: 283
	y: 141
	borderRadius: 16
	backgroundColor: blueLightColor20
	height: 47
	width: 280
	parent: layerB

layerC = new Layer
	y: 516
	x: 47
	width: 656
	height: 281
	borderRadius: 16
	backgroundColor: blueLightColor
	
layerCC = new Layer
	y: 47
	width: 187
	height: 187
	borderRadius: 16
	backgroundColor: blueLightColor20
	parent: layerC
	x: 47
	
layerCCC = new Layer
	y: 47
	width: 328
	height: 46
	borderRadius: 16
	backgroundColor: blueLightColor20
	parent: layerC
	x: 282
	
layerCCCC = new Layer
	y: 142
	width: 281
	height: 45
	borderRadius: 16
	backgroundColor: blueLightColor20
	parent: layerC
	x: 282

layerD = new Layer
	x: 47
	y: 844
	width: 656
	height: 281
	borderRadius: 16
	backgroundColor: blueLightColor
	
layerDD = new Layer
	x: 47
	y: 47
	height: 187
	borderRadius: 16
	backgroundColor: blueLightColor20
	width: 187
	parent: layerD
	
layerDDD = new Layer
	x: 282
	y: 47
	height: 47
	borderRadius: 16
	backgroundColor: blueLightColor20
	width: 328
	parent: layerD
	
layerDDDD = new Layer
	x: 282
	y: 141
	height: 47
	borderRadius: 16
	backgroundColor: blueLightColor20
	width: 281
	parent: layerD
	
layerE = new Layer
	x: 47
	y: 1170
	width: 656
	height: 281
	borderRadius: 16
	backgroundColor: blueLightColor
	
layerEE = new Layer
	x: 47
	y: 49
	width: 187
	borderRadius: 16
	backgroundColor: blueLightColor20
	height: 187
	parent: layerE
	
layerEEE = new Layer
	x: 282
	y: 49
	width: 328
	borderRadius: 16
	backgroundColor: blueLightColor20
	height: 47
	parent: layerE
	
layerEEEE = new Layer
	x: 282
	y: 141
	width: 281
	borderRadius: 16
	backgroundColor: blueLightColor20
	height: 50
	parent: layerE

gridColor = "rgba(226, 74, 74, .5)"
amountOfCell = 16

module.gridddle(amountOfCell, gridColor)