// Verifica se o admin está autenticado na sessão
if (sessionStorage.getItem('adminLogado') !== 'true') {
    alert("Acesso negado! Faça login como administrador.");
    window.location.href = "admin-login.html";
}

function sairAdmin() {
    sessionStorage.removeItem('adminLogado');
    window.location.href = "admin-login.html";
}