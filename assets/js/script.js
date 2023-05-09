var productList = [];

function adicionarProduto() {
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;
    var produtos = document.getElementById("produtos").value;

    document.querySelector('#temp').style.display="block";

    var produto = { nome: nome, preco: preco, quantidade: quantidade, produtos : produtos};
    productList.push(produto);

    var novoProduto = document.createElement("ol");
    var id = "produto" + (productList.length - 1);
    
    novoProduto.innerHTML = nome + "<br/>Preço: R$" + preco + 
    "<br>Quantidade: "+"<span class='"+id+"controlquantidade item-lista'>" + quantidade + "<br/>Produto: " + produtos +
    "</span><hr/>"

    var list_produto = document.getElementById("listaProdutos").appendChild(novoProduto);
    list_produto.style.padding="10px";
    list_produto.style.margin="5px 10px 5px 20px";
    list_produto.style.border="solid 1px purple";
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