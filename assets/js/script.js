function adicionarProduto() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var estoque = document.getElementById("estoque").value;

    // Criar um novo elemento da lista de produtos
    var novoProduto = document.createElement("li");

    // Adicionar o nome, preço e estoque do produto ao elemento da lista
    novoProduto.innerHTML = nome + " - R$ " + preco + " - <span id='" + nome + "-estoque'>" + estoque + "</span> em estoque <button onclick='removerUnidade(\"" + nome + "\")'>Remover</button>";

    // Adicionar o novo produto à lista de produtos
    document.getElementById("listaProdutos").appendChild(novoProduto);
    nome.value.innerHTML = '';

    // Verificar se o estoque está esgotado
    if (estoque == 0) {
        // Se estiver esgotado, marcar o checkbox
        document.getElementById("esgotado").checked = true;
    }
}

function removerUnidade(nome) {
    // Obter o elemento <span> que mostra o estoque do produto
    var estoqueSpan = document.getElementById(nome + "-estoque");

    // Obter o valor atual do estoque
    var estoqueAtual = parseInt(estoqueSpan.textContent);

    // Verificar se ainda há estoque
    if (estoqueAtual > 0) {
        // Diminuir a quantidade de estoque em 1 unidade
        var novoEstoque = estoqueAtual - 1;

        // Atualizar o texto do elemento <span> com o novo estoque
        estoqueSpan.textContent = novoEstoque;

        // Verificar se o estoque está esgotado
        if (novoEstoque == 0) {
            // Se estiver esgotado, marcar o checkbox
            document.getElementById(nome + "-esgotado").checked = true;
        }
    }
}