// Convert the given function into ES6 with least amount of characters.

const  defaultParamsFunc = (a, b, c) => c === undefined ? a*b*4 : a*b*4; 

	console.log(defaultParamsFunc(3, 1)); // 12
	console.log(defaultParamsFunc(3, 10)); // 120