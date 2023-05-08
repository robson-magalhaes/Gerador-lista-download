var productList = [];

function adicionarProduto() {
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var estoque = document.getElementById("estoque").value;

    var produto = { nome: nome, preco: preco, estoque: estoque };
    productList.push(produto);

    var novoProduto = document.createElement("li");
    var id = "produto" + (productList.length - 1);

    novoProduto.innerHTML = nome + " - Preço: R$" + preco + 
    " - Estoque: "+"<span id='"+id+"controlEstoque'>" + estoque + 
    "</span> <button onclick='removerUnidade(" + (productList.length - 1) + ")'>Remover</button> <button onclick='adicionarUnidade(" + (productList.length - 1) + ")'>Adicionar</button>";

    document.getElementById("listaProdutos").appendChild(novoProduto);
    
    if (estoque == 0) {
        document.getElementById("esgotado").checked = true;
    }
}

function removerUnidade(index) {
    var produto = productList[index];
    var estoqueSpan = document.getElementById("produto" + index + "controlEstoque");
    var estoqueAtual = parseInt(estoqueSpan.textContent);
    if (estoqueAtual > 0) {
        var novoEstoque = estoqueAtual - 1;
        estoqueSpan.textContent = novoEstoque;
        produto.estoque = novoEstoque;
        if (novoEstoque == 0) {
            document.getElementById("produto" + index + "-esgotado").checked = true;
        }
    }
}

function adicionarUnidade(index) {
    var produto = productList[index];
    var estoqueSpan = document.getElementById("produto" + index + "controlEstoque");
    var estoqueAtual = parseInt(estoqueSpan.textContent);
    if (estoqueSpan != 0){
        var novoEstoque = estoqueAtual + 1;
        estoqueSpan.textContent = novoEstoque;
        produto.estoque = novoEstoque;
    }
}