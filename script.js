const input = document.getElementById('input');
input.focus();

document.querySelector('.ac').addEventListener('click', () => {
	input.value = '';
});
document.querySelector('.bs').addEventListener('click', () => {
	if (input.value != '') {
		input.value = input.value.slice(0, -1);
	}
});
document.querySelector('.div').addEventListener('click', () => {
	let inputValue = 0,
		lastChar = 0;
	inputValue = input.value;
	lastChar = inputValue.charAt(inputValue.length - 1);
	if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*') {
		input.value = inputValue.substring(0, inputValue.length - 1);
		input.value += '/';
	} else {
		input.value += '/';
	}
});
document.querySelector('.mult').addEventListener('click', () => {
	let inputValue = 0,
		lastChar = 0;
	inputValue = input.value;
	lastChar = inputValue.charAt(inputValue.length - 1);
	if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*') {
		input.value = inputValue.substring(0, inputValue.length - 1);
		input.value += '*';
	} else {
		input.value += '*';
	}
});
document.querySelector('.seven').addEventListener('click', () => {
	input.value += 7;
});
document.querySelector('.eight').addEventListener('click', () => {
	input.value += 8;
});
document.querySelector('.nine').addEventListener('click', () => {
	input.value += 9;
});
document.querySelector('.four').addEventListener('click', () => {
	input.value += 4;
});
document.querySelector('.five').addEventListener('click', () => {
	input.value += 5;
});
document.querySelector('.six').addEventListener('click', () => {
	input.value += 6;
});
document.querySelector('.one').addEventListener('click', () => {
	input.value += 1;
});
document.querySelector('.two').addEventListener('click', () => {
	input.value += 2;
});
document.querySelector('.three').addEventListener('click', () => {
	input.value += 3;
});

document.querySelector('.equal').addEventListener('click', () => {
	if (input.value != '') {
		input.value = eval(input.value);
		calculated = true;
	} else if ((calculated = true)) {
		input.value = '';
		calculated = false;
	}
});
document.querySelector('.plus').addEventListener('click', () => {
	let inputValue = 0,
		lastChar = 0;
	inputValue = input.value;
	lastChar = inputValue.charAt(inputValue.length - 1);
	if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*') {
		input.value = inputValue.substring(0, inputValue.length - 1);
		input.value += '+';
	} else {
		input.value += '+';
	}
});
document.querySelector('.minus').addEventListener('click', () => {
	let inputValue = 0,
		lastChar = 0;
	inputValue = input.value;
	lastChar = inputValue.charAt(inputValue.length - 1);
	if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*') {
		input.value = inputValue.substring(0, inputValue.length - 1);
		input.value += '-';
	} else {
		input.value += '-';
	}
});
document.querySelector('.zero').addEventListener('click', () => {
	if (input.value != '') {
		input.value += 0;
	} else {
		input.value = '';
	}
});
document.querySelector('.deci').addEventListener('click', () => {
	let inputValue = 0,
		lastChar = 0;
	inputValue = input.value;
	lastChar = inputValue.charAt(inputValue.length - 1);
	if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*' || lastChar == '.') {
		input.value = inputValue.substring(0, inputValue.length - 1);
		input.value += '.';
	} else {
		input.value += '.';
	}
});
