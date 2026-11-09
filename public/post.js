function enviarDados() {
    // Obter todos os valores dos campos obrigatórios
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const rua = document.getElementById('rua').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const telefone = document.getElementById('telefone').value;

    // Validação básica de campos vazios
    if (!nome || !sobrenome || !cpf || !email || !senha || !rua || !cep || !cidade || !estado || !telefone) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Criar o objeto cliente com a estrutura completa
    const cliente = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        email: email,
        senha: senha,
        rua: rua,
        cep: cep,
        cidade: cidade,
        estado: estado,
        telefone: telefone
    };

    // Requisição POST para o backend
    fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        alert("Cadastro realizado com sucesso!");
        document.getElementById('formCadastro').reset();
    })
    .catch(erro => {
        console.error("Erro ao cadastrar:", erro);
        alert("Erro ao conectar com o servidor.");
    });
}