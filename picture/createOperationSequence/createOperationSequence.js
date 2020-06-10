const {
	getRandomElementInArray,
} = require('../generalHelperFunctions/getRandomElementInArray')

const operationElements = {
	operators: ['add'],
	operands: {
		preOperators: [
			// 'all',
			//'some',
			'latestOperationResult',
			// 'lines',
			// 'rectangles',
			// 'circles',
			// 'triangles',
		],
		preOperatorDeterminers: [
			'ofSameParent',
			'ofSameGrandparent',
			'ofAllAncestry',
		],
		postOperators: ['line', 'rectangle', 'circle', 'triangle'],
	},
	resultIsVisible: () => true, // () => Math.random() > 0.25,
}

module.exports.createOperationSequence = (operationSequenceLength) => {
	// let operationSequence = [
	// 	{
	// 		operator: 'initialize',
	// 		resultIsVisible: operationElements.resultIsVisible(),
	// 	},
	// ]
	// for (let i = 0; i < operationSequenceLength; i++) {
	// 	operationSequence.push({
	// 		preOperatorOperand: getRandomElementInArray(
	// 			operationElements.operands.preOperators
	// 		),
	// 		preOperatorOperandDeterminer: getRandomElementInArray(
	// 			operationElements.operands.preOperatorDeterminers
	// 		),
	// 		operator: getRandomElementInArray(operationElements.operators),
	// 		postOperatorOperand: getRandomElementInArray(
	// 			operationElements.operands.postOperators
	// 		),
	// 		resultIsVisible: operationElements.resultIsVisible(),
	// 	})
	// }
	// console.log('operationSequence: ', operationSequence)

	return [
		{ operator: 'initialize', resultIsVisible: true },
		// {
		// 	preOperatorOperand: 'latestOperationResult',
		// 	preOperatorOperandDeterminer: 'ofSameParent',
		// 	operator: 'add',
		// 	postOperatorOperand: 'rectangle',
		// 	resultIsVisible: true,
		// },
		// {
		// 	preOperatorOperand: 'latestOperationResult',
		// 	preOperatorOperandDeterminer: 'ofAllAncestry',
		// 	operator: 'add',
		// 	postOperatorOperand: 'triangle',
		// 	resultIsVisible: true,
		// },
		{
			preOperatorOperand: 'latestOperationResult',
			preOperatorOperandDeterminer: 'ofSameParent',
			operator: 'add',
			postOperatorOperand: 'line',
			resultIsVisible: true,
		},
		{
			preOperatorOperand: 'latestOperationResult',
			preOperatorOperandDeterminer: 'ofSameParent',
			operator: 'add',
			postOperatorOperand: 'rectangle',
			resultIsVisible: true,
		},
	]
}
