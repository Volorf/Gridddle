# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Фролов Олег"
	twitter: ""
	description: ""


module = require "gridddle"

# Layers

bg = new BackgroundLayer

layerA = new Layer
	width: 768
	height: 141
	backgroundColor: "rgba(0,0,255,1)"

layerB = new Layer
	x: 47
	y: 188
	width: 656
	height: 281
	borderRadius: 16

layerC = new Layer
	y: 516
	x: 47
	width: 656
	height: 281
	borderRadius: 16

layerD = new Layer
	x: 47
	y: 844
	width: 656
	height: 281
	borderRadius: 16
	
layerE = new Layer
	x: 47
	y: 1170
	width: 656
	height: 281
	borderRadius: 16

module.gridddle(16, "rgba(0,0,0,.4)")