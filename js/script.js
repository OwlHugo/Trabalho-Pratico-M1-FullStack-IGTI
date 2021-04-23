function start() {

  var inputRange = document.querySelector('#inputRange');
  var inputText = document.querySelector('#inputText');
  var inputValue = document.querySelector('#inputValue');

  function handleRangeChange(event) {
    var currentValue = event.target.value;
    inputValue.value = currentValue;

    inputText.value = numberToDescription(currentValue);
  }

  inputRange.addEventListener('input', handleRangeChange);
}
function numberToDescription(number) {
  var size = number.toString().length;

  if (size === 1) {
    return sizeOneDescription(number);
  }

  if (size === 2) {
    return sizeTwoDescription(number);
  }

  if (size === 3) {
    return sizeThreeDescription(number);
  }

  return size;
}

function sizeOneDescription(number) {
  if (number === '0') return 'zero';
  if (number === '1') return 'um';
  if (number === '2') return 'dois';
  if (number === '3') return 'três';
  if (number === '4') return 'quatro';
  if (number === '5') return 'cinco';
  if (number === '6') return 'seis';
  if (number === '7') return 'sete';
  if (number === '8') return 'oito';
  if (number === '9') return 'nove';
}

function sizeTwoDescription(number) {
  if (number === '10') return 'dez';
  if (number === '11') return 'onze';
  if (number === '12') return 'doze';
  if (number === '13') return 'treze';
  if (number === '14') return 'quatorze';
  if (number === '15') return 'quinze';
  if (number === '16') return 'dezesseis';
  if (number === '17') return 'dezessete';
  if (number === '18') return 'dezoito';
  if (number === '19') return 'dezenove';
  if (number === '20') return 'vinte';
  if (number === '30') return 'trinta';
  if (number === '40') return 'quarenta';
  if (number === '50') return 'cinquenta';
  if (number === '60') return 'sessenta';
  if (number === '70') return 'setenta';
  if (number === '80') return 'oitenta';
  if (number === '90') return 'noventa';

  var first = number[0];
  var second = number[1];
  var prefix = '';

  if (first === '2') prefix = 'vinte e ';
  if (first === '3') prefix = 'trinta e ';
  if (first === '4') prefix = 'quarenta e ';
  if (first === '5') prefix = 'cinquenta e ';
  if (first === '6') prefix = 'sessenta e ';
  if (first === '7') prefix = 'setenta e ';
  if (first === '8') prefix = 'oitenta e ';
  if (first === '9') prefix = 'noventa e ';

  return prefix + sizeOneDescription(second);
}

function sizeThreeDescription(number) {
  if (number === '100') return 'cem';
  if (number === '200') return 'duzentos';
  if (number === '300') return 'trezentos';
  if (number === '400') return 'quatrocentos';
  if (number === '500') return 'quinhentos';
  if (number === '600') return 'seiscentos';
  if (number === '700') return 'setecentos';
  if (number === '800') return 'oitocentos';
  if (number === '900') return 'novecentos';

  var first = number[0];
  var prefix = '';

  if (first === '1') prefix = 'cento e ';
  if (first === '2') prefix = 'duzentos e ';
  if (first === '3') prefix = 'trezentos e ';
  if (first === '4') prefix = 'quatrocentos e ';
  if (first === '5') prefix = 'quinhentos e ';
  if (first === '6') prefix = 'seiscentos e ';
  if (first === '7') prefix = 'setecentos e ';
  if (first === '8') prefix = 'oitocentos e ';
  if (first === '9') prefix = 'novecentos e ';

  var second = number[1];
  var third = number[2];
  var rest = number.substring(1);

  if (second === '0') {
    return prefix + sizeOneDescription(third);
  }

  return prefix + sizeTwoDescription(rest);
}

start();

start();