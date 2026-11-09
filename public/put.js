function buscarDados() {
    var email = document.getElementById('emailBusca').value;

    fetch('http://localhost:3000/pessoas')
        .then(resposta => resposta.json())
        .then(dados => {
            let pessoaEncontrada = dados.find(pessoa => pessoa.email === email);

            if (pessoaEncontrada) {
                document.getElementById('identificador').value = pessoaEncontrada.id;
                document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome;
                document.getElementById('produtoAtualizar').value = pessoaEncontrada.produtoFavorito || '';
                alert("Cliente encontrada!");
            } else {
                alert("Cliente não encontrada.");
            }
        });
}

function atualizarDados() {
    var id = document.getElementById('identificador').value;
    var email = document.getElementById('emailBusca').value;
    var nome = document.getElementById('nomeAtualizar').value;
    var produtoFavorito = document.getElementById('produtoAtualizar').value;

    if (!id) {
        alert("Busque uma cliente antes de atualizar!");
        return;
    }

    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, email: email, produtoFavorito: produtoFavorito })
    })
    .then(resposta => resposta.json())
    .then(() => alert("Cadastro atualizado com sucesso!"));
}