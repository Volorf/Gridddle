# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Фролов Олег"
	twitter: ""
	description: ""


bg = new BackgroundLayer
module = require "gridddle"


layerA = new Layer
	width: 768
	height: 192
	backgroundColor: "rgba(0,0,255,1)"


module.gridddle(32, "rgba(255,0,0,.5)")

layerB = new Layer
	x: 32
	y: 224
	width: 704
	height: 320

layerC = new Layer
	y: 576
	x: 32
	width: 704
	height: 320

layerD = new Layer
	x: 32
	y: 928
	width: 704
	height: 320