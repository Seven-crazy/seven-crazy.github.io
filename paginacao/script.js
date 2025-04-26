// 1. Olá Mundo
function mostrarOlaMundo() {
    document.getElementById('mensagem').innerText = 'Olá Mundo!';
}

// 2. Soma de dois inteiros
function calcularSoma() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado-soma').innerText = `Resultado: ${resultado}`;
}

// 3. Alterar propriedade por ID
function alterarPorId() {
    const elemento = document.getElementById('texto-id');
    elemento.classList.toggle('texto-alterado');
}

// 4. Alterar propriedade por Name
function alterarPorName() {
    const elemento = document.getElementsByName('texto-name')[0];
    elemento.classList.toggle('texto-alterado');
}

// 5. Alterar propriedade por Class
function alterarPorClass() {
    const elemento = document.getElementsByClassName('texto-class')[0];
    elemento.classList.toggle('texto-alterado');
}
