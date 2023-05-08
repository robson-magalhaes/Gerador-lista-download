var productList = [];

function adicionarProduto() {
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;
    var produtos = document.getElementById("produtos").value;

    var produto = { nome: nome, preco: preco, quantidade: quantidade, produtos : produtos};
    productList.push(produto);

    var novoProduto = document.createElement("li");
    var id = "produto" + (productList.length - 1);
    
    novoProduto.innerHTML = nome + "<br/> - Preço: R$" + preco + 
    " - quantidade: "+"<span id='"+id+"controlquantidade'>" + quantidade + "<br/>Produto: " + produtos +
    "</span><hr/>"/* <button onclick='removerUnidade(" + (productList.length - 1) + ")'>Remover</button>";*/
    
    document.getElementById("listaProdutos").appendChild(novoProduto);
}

function gerarListaProdutos() {
    var produtos = document.getElementById("listaProdutos").innerHTML;
    var file = new Blob([produtos], {type: "text/plain"});
    var a = document.createElement("a");
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = "listaProdutos.html";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0);
}

function removerUnidade(index) {
    var produto = productList[index];
    var estoqueSpan = document.getElementById("produto" + index + "controlEstoque");
    
}

function downloadFile(text, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}