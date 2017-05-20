'use strict'

let express = require('express')

let Board = (() => {
	let button = ''
	let message = ''

	return class Board {
		constructor() {
			message = 'Board.'
		}

		withButton(button) {
			this.button = button
			return this;
		}

		get response() { // really complicated calculations
			return {
				//title : 'fuck off',
				button : button,
				message: message
			}
		}
	}
})()

module.exports = () => {
	return new Board()
}

/*module.exports = () => {
	create: () => {
		return new Board()
	}
}*/