const twoDimArr1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

const twoDimArr2 = [[1], [2], [3]];

const twoDimArr3 = [[], [], [10, 20]];

function flatten2dArray(twoDimArr) {
	var flatArr = [];
	for (var i = 0; i < twoDimArr.length; i++) {
		for (var j = 0; j < twoDimArr[i].length; j++) {
			flatArr.push(twoDimArr[i][j]);
		}
	}
	console.log(flatArr);
}

flatten2dArray(twoDimArr1);
flatten2dArray(twoDimArr2);
flatten2dArray(twoDimArr3);
