// Menu e barra de pesquisa responsivos
let link_pagina_nav_li1 = document.querySelector("li.link-pagina-nav-li1");
let link_pagina_nav_li2 = document.querySelector("li.link-pagina-nav-li2");
let form_pesquisa = document.querySelector(".form-li");
document.querySelector("li.menu-responsivo-li").onclick = () => {
    link_pagina_nav_li1.classList.toggle("ativo");
    link_pagina_nav_li2.classList.toggle("ativo");
}
document.querySelector(".botao-pesquisar-responsivo").onclick = () => {
    form_pesquisa.classList.toggle("ativo");
}
window.onscroll = () => {
    link_pagina_nav_li1.classList.remove("ativo");
    link_pagina_nav_li2.classList.remove("ativo");
    form_pesquisa.classList.remove("ativo");
};
// Tirar e colocar carrinho
// Produto1
function TirarCarrinho1() {
    document.getElementById("carrinho1").style.display = "none";
}
function ColocarCarrinho1() {
    document.getElementById("carrinho1").style.display = "block";
}
// Produto2
function TirarCarrinho2() {
    document.getElementById("carrinho2").style.display = "none";
}
function ColocarCarrinho2() {
    document.getElementById("carrinho2").style.display = "block";
}
// Produto3
function TirarCarrinho3() {
    document.getElementById("carrinho3").style.display = "none";
}
function ColocarCarrinho3() {
    document.getElementById("carrinho3").style.display = "block";
}
// Produto4
function TirarCarrinho4() {
    document.getElementById("carrinho4").style.display = "none";
}
function ColocarCarrinho4() {
    document.getElementById("carrinho4").style.display = "block";
}
// Produto5
function TirarCarrinho5() {
    document.getElementById("carrinho5").style.display = "none";
}
function ColocarCarrinho5() {
    document.getElementById("carrinho5").style.display = "block";
}
// Produto6
function TirarCarrinho6() {
    document.getElementById("carrinho6").style.display = "none";
}
function ColocarCarrinho6() {
    document.getElementById("carrinho6").style.display = "block";
}
// Produto7
function TirarCarrinho7() {
    document.getElementById("carrinho7").style.display = "none";
}
function ColocarCarrinho7() {
    document.getElementById("carrinho7").style.display = "block";
}
// Produto8
function TirarCarrinho8() {
    document.getElementById("carrinho8").style.display = "none";
}
function ColocarCarrinho8() {
    document.getElementById("carrinho8").style.display = "block";
}
// Clique noproduto para desativar o carrinho