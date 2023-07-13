// let botaoAdd = document.querySelector('.add-noticia');

// botaoAdd.addEventListener("click", function(){
    
// });

// const fileSelector = document.getElementById('file-selector');
// fileSelector.addEventListener('change', (event) => {
//   const fileList = event.target.files;
//   console.log(fileList);
// });

const form = document.getElementById('novaPostagem');
// const posts = localStorage.getItem("posts") || []


form.addEventListener("submit", (evento)=>{
    evento.preventDefault()

    const texto = evento.target.elements['texto'].value
    const imagem = evento.target.elements['imagem'].files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
      criaPostagem(event.target.result, texto);
    }
    reader.readAsDataURL(imagem);
  
    evento.target.reset();
    
    // criaPostagem(imagem.value, texto.value)
    // imagem.value = ""
    // texto.value = ""
    
} )

function criaPostagem (imagem, texto){
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("noticia-principal")

    const novaImagem = document.createElement("img");
    novaImagem.src = imagem;

    const novoTexto = document.createElement("section");
    novoTexto.innerHTML = texto

    novaDiv.appendChild(novaImagem);
    novaDiv.appendChild(novoTexto);
    // novaDiv.innerHTML += novoTexto

    const postagens = document.getElementById("main")
    postagens.appendChild(novaDiv)

    
    // const postagemAtual = {
    //     "texto": texto,
    //     "imagem": imagem
    // }

    // posts.push(postagemAtual)

    // localStorage.setItem("posts", JSON.stringify(posts))

    
}

// const botao = document.getElementById('botaoPostar');

// botao.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert("olá mundo")
// })