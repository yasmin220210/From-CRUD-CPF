fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        var tabelaCorpo = document.getElementById('tabela-corpo');

        dados.forEach(objeto => {
            var tr = document.createElement('tr');
            var tdNome = document.createElement('td');
            var tdEmail = document.createElement('td');
            var tdFavorito = document.createElement('td');

            tdNome.innerText = objeto.nome || '-';
            tdEmail.innerText = objeto.email || '-';
            tdFavorito.innerText = objeto.produtoFavorito || '-';

            tr.appendChild(tdNome);
            tr.appendChild(tdEmail);
            tr.appendChild(tdFavorito);
            tabelaCorpo.appendChild(tr);
        });
    })
    .catch(erro => console.error("Erro ao carregar clientes:", erro));