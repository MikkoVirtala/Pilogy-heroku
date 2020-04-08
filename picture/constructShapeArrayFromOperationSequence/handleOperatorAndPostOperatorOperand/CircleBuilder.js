const {
	getRandomIntegerInRangeExcludeMax,
} = require('../../getRandomIntegerInRangeExcludeMax')
const { Circle } = require('../../shapes/Circle')

class CircleBuilder {
	constructor(style) {
		this.r = style.getLength('short')
		this.fill = style.getColor()
		this.fillOpacity = style.getOpacity()
		this.stroke = style.getColor()
		this.strokeOpacity = style.getOpacity()
		this.strokeWidth = getRandomIntegerInRangeExcludeMax(1, 5)
		this.rotationInDegrees = getRandomIntegerInRangeExcludeMax(0, 360)
		this.attachmentPointIndex = getRandomIntegerInRangeExcludeMax(0, 4)
		this.rotationStyle = style.getRotationStyle()
		this.constantForRotationFunction = style.getConstantForRotationFunction()
	}

	setRotationInDegrees(normal, counter) {
		this.rotationInDegrees = this.rotationStyle({
			normal,
			counter,
			constant: this.constantForRotationFunction,
		})
	}

	setPointToAttach(pointToAttach) {
		this.pointToAttach = pointToAttach
	}

	setVisibility(visible) {
		this.visible = visible
	}

	build() {
		return new Circle(
			this.r,
			this.fill,
			this.fillOpacity,
			this.stroke,
			this.strokeOpacity,
			this.strokeWidth,
			this.rotationInDegrees,
			this.pointToAttach,
			this.attachmentPointIndex,
			this.visible
		)
	}
}

module.exports.CircleBuilder = CircleBuilder