let a = Number(prompt('The first number: '));
let b = Number(prompt('The second number: '));

for (a; a<=b; a++) {
	let binary = a.toString(2);
	let counter = 0;
	for (char of binary) {
		if (char === '1') counter ++;
	}
	if (counter === 4) alert(`${a} - ${binary}`);
}