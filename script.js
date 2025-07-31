// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Obter referências aos botões e modais
    const loginBtn = document.getElementById('loginBtn');
    const cadastroBtn = document.getElementById('cadastroBtn');

    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');

    const cadastroTypeModal = document.getElementById('cadastroTypeModal');
    const closeCadastroTypeModal = document.getElementById('closeCadastroTypeModal');
    const pessoaFisicaBtn = document.getElementById('pessoaFisicaBtn');
    const empresaBtn = document.getElementById('empresaBtn');

    const cadastroPessoaFisicaModal = document.getElementById('cadastroPessoaFisicaModal');
    const closeCadastroPessoaFisicaModal = document.getElementById('closeCadastroPessoaFisicaModal');
    const cadastroPessoaFisicaForm = document.getElementById('cadastroPessoaFisicaForm');

    const cadastroEmpresaModal = document.getElementById('cadastroEmpresaModal');
    const closeCadastroEmpresaModal = document.getElementById('closeCadastroEmpresaModal');
    const cadastroEmpresaForm = document.getElementById('cadastroEmpresaForm');

    // --- Funções para Abrir/Fechar Modais ---

    function openModal(modal) {
        modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        modal.classList.add('hidden');
    }

    // --- Event Listeners para Botões do Cabeçalho ---

    loginBtn.addEventListener('click', () => {
        openModal(loginModal);
    });

    cadastroBtn.addEventListener('click', () => {
        openModal(cadastroTypeModal);
    });

    // --- Event Listeners para Fechar Modais ---

    closeLoginModal.addEventListener('click', () => {
        closeModal(loginModal);
    });

    closeCadastroTypeModal.addEventListener('click', () => {
        closeModal(cadastroTypeModal);
    });

    closeCadastroPessoaFisicaModal.addEventListener('click', () => {
        closeModal(cadastroPessoaFisicaModal);
    });

    closeCadastroEmpresaModal.addEventListener('click', () => {
        closeModal(cadastroEmpresaModal);
    });

    // Fechar modais ao clicar fora deles
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModal(loginModal);
        }
    });

    cadastroTypeModal.addEventListener('click', (e) => {
        if (e.target === cadastroTypeModal) {
            closeModal(cadastroTypeModal);
        }
    });

    cadastroPessoaFisicaModal.addEventListener('click', (e) => {
        if (e.target === cadastroPessoaFisicaModal) {
            closeModal(cadastroPessoaFisicaModal);
        }
    });

    cadastroEmpresaModal.addEventListener('click', (e) => {
        if (e.target === cadastroEmpresaModal) {
            closeModal(cadastroEmpresaModal);
        }
    });


    // --- Event Listeners para Escolha de Tipo de Cadastro ---

    pessoaFisicaBtn.addEventListener('click', () => {
        closeModal(cadastroTypeModal);
        openModal(cadastroPessoaFisicaModal);
    });

    empresaBtn.addEventListener('click', () => {
        closeModal(cadastroTypeModal);
        openModal(cadastroEmpresaModal);
    });

    // --- Simulação de Submissão de Formulários ---

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o recarregamento da página
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Validação básica
        if (!email || !password) {
            // Em um aplicativo real, você usaria um modal ou mensagem na tela
            console.error('Por favor, preencha todos os campos de login.');
            return;
        }

        console.log('Tentativa de Login:', { email, password });
        // Aqui você faria uma requisição para um backend real
        // Ex: fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Erro de login:', error));

        // Fechar modal após simular o login
        closeModal(loginModal);
        // Limpar campos do formulário
        loginForm.reset();
        // Em um app real, redirecionaria o usuário ou atualizaria a UI
        alert('Login simulado com sucesso! (Verifique o console para os dados)');
    });

    cadastroPessoaFisicaForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o recarregamento da página
        const nome = document.getElementById('pfNome').value;
        const email = document.getElementById('pfEmail').value;
        const password = document.getElementById('pfPassword').value;
        const cpf = document.getElementById('pfCpf').value;

        // Validação básica
        if (!nome || !email || !password || !cpf) {
            console.error('Por favor, preencha todos os campos para Pessoa Física.');
            return;
        }

        console.log('Cadastro Pessoa Física:', { nome, email, password, cpf });
        // Aqui você faria uma requisição para um backend real
        closeModal(cadastroPessoaFisicaModal);
        cadastroPessoaFisicaForm.reset();
        alert('Cadastro de Pessoa Física simulado com sucesso! (Verifique o console para os dados)');
    });

    cadastroEmpresaForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o recarregamento da página
        const nomeEmpresa = document.getElementById('empresaNome').value;
        const cnpj = document.getElementById('empresaCnpj').value;
        const email = document.getElementById('empresaEmail').value;
        const password = document.getElementById('empresaPassword').value;

        // Validação básica
        if (!nomeEmpresa || !cnpj || !email || !password) {
            console.error('Por favor, preencha todos os campos para Empresa.');
            return;
        }

        console.log('Cadastro Empresa:', { nomeEmpresa, cnpj, email, password });
        // Aqui você faria uma requisição para um backend real
        closeModal(cadastroEmpresaModal);
        cadastroEmpresaForm.reset();
        alert('Cadastro de Empresa simulado com sucesso! (Verifique o console para os dados)');
    });
});
