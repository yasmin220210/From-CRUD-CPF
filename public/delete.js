function deletarDados() {
    var email = document.getElementById('emailDeletar').value;

    if (!email) {
        alert("Digite um e-mail válido.");
        return;
    }

    fetch('http://localhost:3000/pessoas')
        .then(response => response.json())
        .then(data => {
            const pessoa = data.find(p => p.email === email);

            if (pessoa) {
                fetch(`http://localhost:3000/pessoas/${pessoa.id}`, {
                    method: 'DELETE'
                })
                .then(() => {
                    alert('Cliente removida com sucesso!');
                    document.getElementById('emailDeletar').value = '';
                });
            } else {
                alert('E-mail não encontrado.');
            }
        });
}