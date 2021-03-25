while (true) {
	let num1 = Number(prompt('Первое число: '));
	let num2 = Number(prompt('Второе число: '));
	if (isNaN(num1)) {
		alert('первый ввод – не число');
		break;
	} else if (isNaN(num2)) {
		alert('второй ввод – не число');
		break;
	}
	if (num1 > num2) {
		alert('второе число меньше');
	} else if (num2 > num1) {
		alert('первое число меньше');
	} else {
		alert('числа равны');
	}
}
