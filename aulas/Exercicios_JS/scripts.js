let a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair, voltar)

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'yellow'
    a.style.color = 'black'
}
function entrar(){
    a.innerText = 'Entrou!'
    a.style.background = 'green'
}

function sair() {
    a.innerText = 'Saiu!';
    a.style.background = 'darkred';
    a.style.color = 'white';
       
}


function voltar() {
    a.innerText = 'Volte Aqui!!!'
    a.style.background = "#0684d3";
}
setTimeout(voltar, 3000)


function somar() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.querySelector('input#txtn2')
    let res = window.document.getElementById('res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} = ${s}`
}