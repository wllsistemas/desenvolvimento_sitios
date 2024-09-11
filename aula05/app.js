var selectCor = document.getElementById('cor')
var input1 = document.getElementById('input1')
var alerta1 = document.querySelector('.alerta1');
var input2 = document.getElementById('input2')
var alerta2 = document.querySelector('.alerta2')
var btnExecutar = document.getElementById('btnExecutar')


btnExecutar.addEventListener('click', mudarCor)

function mudarCor() {
    input2.style.backgroundColor = input1.style.backgroundColor;
    alerta2.style.color = alerta1.style.color;

    input1.style.backgroundColor = selectCor.value;
    alerta1.style.color = selectCor.value;
}




































// input2.style.backgroundColor = input1.style.backgroundColor;
// input2.style.borderColor = input1.style.borderColor;
// input2.style.color = input1.style.color;
// alerta2.style.color = alerta1.style.color;

// input1.style.backgroundColor = selectCor.value;
// input1.style.borderColor = selectCor.value;
// input1.style.color = selectCor.value;
// alerta1.style.color = selectCor.value;