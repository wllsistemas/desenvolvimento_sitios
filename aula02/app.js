var inputValor1 = document.getElementById('valor1');
var inputValor2 = document.getElementById('valor2');
var selectOperacao = document.getElementById('operacao');
var btnValidar = document.getElementById('btnExecutar');
var inputTextArea = document.getElementById('retorno');

btnValidar.addEventListener('click', operacao);

function operacao() {
    var resultado = 0;
    var valor1 = parseFloat(inputValor1.value);
    var valor2 = parseFloat(inputValor2.value);

    switch (selectOperacao.value) {
        case '+':
            resultado = (valor1 + valor2);
            break;
        case '-':
            resultado = (valor1 - valor2);
            break;
        case '*':
            resultado = (valor1 * valor2);
            break;
        case '/':
            resultado = (valor1 / valor2);
            break;
    }

    // if (selectOperacao.value == '+') {
    //     resultado = (parseInt(inputValor1.value) + parseInt(inputValor2.value));
    // } else if (selectOperacao.value == '-') {
    //     resultado = (parseInt(inputValor1.value) - parseInt(inputValor2.value));
    // } else if (selectOperacao.value == '*') {
    //     resultado = (parseInt(inputValor1.value) * parseInt(inputValor2.value));
    // } else if (selectOperacao.value == '/') {
    //     resultado = (parseFloat(inputValor1.value) / parseInt(inputValor2.value));
    // }

    inputTextArea.value = `${inputValor1.value} ${selectOperacao.value} ${inputValor2.value} = ${resultado}`;
}


