const form = document.getElementById('nome');
let linhas = '';

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const inputNomeClient = document.getElementById('nome-cliente');
    const inputNumeroClient = document.getElementById('numero-cliente');

    let linha = '<tr>';
    linha += `<td>${inputNomeClient.value}</td>`;
    linha += `<td>${inputNumeroClient.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeClient.value = '';
    inputNumeroClient.value = '';
});
