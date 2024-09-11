var inputNome = document.getElementById('nome');
var inputCpf = document.getElementById('cpf');
var inputIdade = document.getElementById('idade');
var selectSexo = document.getElementById('sexo');
var botao = document.getElementById('btnGravar');
var inputTextArea = document.getElementById('retorno');


btnGravar.addEventListener('click', validar);

function validar() {
    let possuiErros = false;

    removeAlerta(inputNome);
    removeAlerta(inputCpf);
    removeAlerta(inputIdade);
    removeAlerta(selectSexo);

    let nome = inputNome.value.trim();
    if (nome.length < 4) {
        possuiErros = true;
        adicionaAlerta(inputNome, '* O nome deve possuir no mínimo 4 letras');
    }

    let cpf = inputCpf.value.trim();
    cpf = cpf.replaceAll('.', '').replaceAll('-', '');
    if (cpf.length != 11) {
        possuiErros = true;
        adicionaAlerta(inputCpf, '* O CPF deve possuir 11 digitos');
    }

    if (selectSexo.value == 'F' && inputIdade.value < 21) {
        possuiErros = true;
        adicionaAlerta(inputIdade, '* Sexo F deve ser maior ou igual 21 anos');
    } else if (selectSexo.value == 'M' && inputIdade.value < 18) {
        possuiErros = true;
        adicionaAlerta(inputIdade, '* Sexo M deve ser maior ou igual 18 anos');
    } else if (inputIdade.value < 18) {
        possuiErros = true;
        adicionaAlerta(inputIdade, '* A idade deve ser maior ou igual 18 anos');
    }

    if (selectSexo.value == '') {
        possuiErros = true;
        adicionaAlerta(selectSexo, '* Informe o sexo');
    }

    let boxAlerta = document.getElementsByClassName('alerta-geral')[0];
    if (possuiErros) {
        boxAlerta.classList.remove('hide');
        boxAlerta.classList.add('visible');
    } else {
        boxAlerta.classList.remove('visible');
        boxAlerta.classList.add('hide');
    }
}

function adicionaAlerta(input, mensagem) {
    input.style.backgroundColor = 'red';
    input.style.color = 'white';

    var p = document.getElementsByClassName('alerta-' + input.id);
    p[0].textContent = mensagem;
}

function removeAlerta(input) {
    input.style.backgroundColor = 'white';
    input.style.color = 'black';

    var p = document.getElementsByClassName('alerta-' + input.id);
    p[0].textContent = '';
}
