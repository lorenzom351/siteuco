/* Salve este código em um arquivo chamado 'script.js' 
  na mesma pasta que o seu arquivo 'index.html'.
*/

// --- Seleção dos Elementos do DOM ---
// Aguarda o documento HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do formulário e do modal pelo seus IDs.
    const loginForm = document.getElementById('loginForm');
    const userIdInput = document.getElementById('userId');
    const passwordInput = document.getElementById('password');
    
    const messageModal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalBtn = document.getElementById('closeModalBtn');

    /**
     * Função para exibir o modal com uma mensagem específica.
     * @param {string} message - A mensagem a ser exibida no modal.
     */
    function showModal(message) {
        if (modalMessage && messageModal) {
            modalMessage.textContent = message;
            messageModal.classList.remove('hidden');
        }
    }

    /**
     * Função para esconder o modal.
     */
    function closeModal() {
        if (messageModal) {
            messageModal.classList.add('hidden');
        }
    }

    // --- Event Listeners ---

    // Adiciona um listener para o envio do formulário, se o formulário existir.
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Previne o comportamento padrão do formulário (que é recarregar a página).
            event.preventDefault();

            // Pega os valores dos campos, removendo espaços em branco no início e fim.
            const userId = userIdInput.value.trim();
            const password = passwordInput.value.trim();

            // Validação simples: verifica se os campos não estão vazios.
            if (userId === '' || password === '') {
                showModal('Por favor, preencha os campos de User ID e Password.');
                return; // Para a execução da função aqui.
            }

            // Se a validação passar, exibe os dados no console do navegador.
            // **IMPORTANTE**: Em uma aplicação real, aqui você faria uma requisição
            // `fetch()` para enviar os dados a um servidor (back-end) para autenticação.
            console.log('--- Dados para Login ---');
            console.log('User ID:', userId);
            console.log('Password:', password);
            console.log('------------------------');
            
            // Simula um login bem-sucedido e exibe uma mensagem no modal.
            showModal(`Login bem-sucedido! Bem-vindo, ${userId}!`);

            // Limpa os campos do formulário após o "login".
            loginForm.reset();
        });
    }

    // Adiciona um listener para o botão de fechar o modal, se ele existir.
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Permite fechar o modal clicando na área escura fora da caixa de diálogo.
    if (messageModal) {
        messageModal.addEventListener('click', function(event) {
            // Se o clique foi no fundo escuro (o próprio modal) e não nos filhos dele.
            if (event.target === messageModal) {
                closeModal();
            }
        });
    }
});
