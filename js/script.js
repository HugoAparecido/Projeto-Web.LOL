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