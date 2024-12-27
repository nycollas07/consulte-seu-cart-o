const botao = document.getElementById('bnt');
const resultado = document.getElementById('result');

botao.addEventListener('click', () => {
    
    resultado.textContent = ' Seu cartão nunca foi clonado.';
    
    resultado.style.color = 'green';
    resultado.style.fontWeight = 'bold';
});
