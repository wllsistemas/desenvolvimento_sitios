var inputNome = document.getElementById('nome')
var inputCpfCnpj = document.getElementById('cpf_cnpj')
var inputIeRg = document.getElementById('rg_ie')
var inputCep = document.getElementById('cep')
var SelectTipoPessoa = document.getElementById('tipo_pessoa')
var btnBotao = document.getElementById('btnGravar')

btnBotao.addEventListener('click', validar)

function validar() {
    let possuiErro = false;
    removeAlerta(inputNome);
    removeAlerta(SelectTipoPessoa);
    removeAlerta(inputCpfCnpj);
    removeAlerta(inputIeRg);
    removeAlerta(inputCep);

    let nome = inputNome.value.trim();
    if (nome.length < 5) {
        possuiErro = true;
        adicionaAlertaDanger(inputNome, 'O nome deve possuir 5 caracteres');
    } else if (nome.split(' ').length < 2) {
        possuiErro = true;
        adicionaAlertaDanger(inputNome, 'O nome deve se composto');
    }

    if (SelectTipoPessoa.value == '') {
        possuiErro = true;
        adicionaAlertaDanger(SelectTipoPessoa, 'Você deve informar o tipo de pessoa');
    } else {
        let documento = inputCpfCnpj.value.replaceAll('.', '')
            .replaceAll('-', '')
            .replaceAll('*', '')
            .replaceAll(' ', '')
            .replaceAll('/', '');

        if (SelectTipoPessoa.value == 'JURIDICA' && documento.length != 14) {
            possuiErro = true;
            adicionaAlertaDanger(inputCpfCnpj, 'CNPJ deve possuir 14 digitos');
        } else if (SelectTipoPessoa.value == 'FISICA' && documento.length != 11) {
            possuiErro = true;
            adicionaAlertaDanger(inputCpfCnpj, 'CPF deve possuir 11 digitos');
        }

        let ieRg = inputIeRg.value.replaceAll('.', '')
            .replaceAll('-', '')
            .replaceAll('*', '')
            .replaceAll(' ', '')
            .replaceAll('/', '');

        if (SelectTipoPessoa.value == 'JURIDICA' && ieRg.length != 12) {
            possuiErro = true;
            adicionaAlertaDanger(inputIeRg, 'I.E. deve possuir 12 digitos');
        } else if (SelectTipoPessoa.value == 'FISICA' && ieRg.length != 9) {
            possuiErro = true;
            adicionaAlertaDanger(inputIeRg, 'R.G. deve possuir 9 digitos');
        }
    }

    let cep = inputCep.value.replaceAll('.', '')
        .replaceAll('-', '')
        .replaceAll('*', '')
        .replaceAll(' ', '')
        .replaceAll('/', '');

    if (cep.length != 8) {
        possuiErro = true;
        adicionaAlertaDanger(inputCep, 'CEP deve possuir 8 digitos');
    }

    if (!possuiErro) {
        adicionaAlertaSuccess(inputNome, 'Nome preenchido corretamente');
        adicionaAlertaSuccess(SelectTipoPessoa, 'Tipo pessoa preenchido corretamente');
        adicionaAlertaSuccess(inputCpfCnpj, 'CPF/CNPJ preenchido corretamente');
        adicionaAlertaSuccess(inputIeRg, 'IE/RG preenchido corretamente');
        adicionaAlertaSuccess(inputCep, 'CEP preenchido corretamente');

        document.getElementsByClassName('alerta_geral')[0].classList.remove('hide');
        document.getElementsByClassName('alerta_geral')[0].classList.remove('alerta_geral_danger');

        document.getElementsByClassName('alerta_geral')[0].classList.add('visible');
        document.getElementsByClassName('alerta_geral')[0].classList.add('alerta_geral_success');
        document.getElementsByClassName('alerta_geral')[0].textContent = 'Você merece usar meu sistema !!';
    } else {
        document.getElementsByClassName('alerta_geral')[0].classList.remove('hide');
        document.getElementsByClassName('alerta_geral')[0].classList.remove('alerta_geral_success');

        document.getElementsByClassName('alerta_geral')[0].classList.add('visible');
        document.getElementsByClassName('alerta_geral')[0].classList.add('alerta_geral_danger');
        document.getElementsByClassName('alerta_geral')[0].textContent = 'Existem erros !!';
    }

}

function adicionaAlertaDanger(input, mensagem) {
    let p = document.getElementsByClassName('alerta_' + input.id)[0];
    p.classList.remove('.alerta_success');
    p.classList.add('alerta_danger');
    p.textContent = mensagem;
}

function adicionaAlertaSuccess(input, mensagem) {
    let p = document.getElementsByClassName('alerta_' + input.id)[0];
    p.classList.remove('alerta_danger');
    p.classList.add('alerta_success');
    p.textContent = mensagem;
}

function removeAlerta(input) {
    let p = document.getElementsByClassName('alerta_' + input.id)[0];
    p.textContent = '';

    input.classList.remove('alerta_success');
    input.classList.remove('alerta_danger');
}