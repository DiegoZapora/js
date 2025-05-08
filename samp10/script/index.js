let resultado = document.getElementById('res');
let limparVisor = true;

document.querySelectorAll('.num').forEach(botao => {
    botao.addEventListener('click', () => {
        let valor = botao.value;

        if (limparVisor) {
            res.innerText = '';
            limparVisor = false;
          }

        if (valor === '=') {
            try {
                resultado.innerText = eval(resultado.innerText);
                limparVisor = true;
            } catch {
                resultado.innerText = 'Erro';
                limparVisor = true;
            }
        } else if (valor === 'C') {
            resultado.innerText = '';
        } else {
            resultado.innerText += valor;
        }
    });
});