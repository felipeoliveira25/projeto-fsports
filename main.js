const imagens = JSON.parse(localStorage.getItem('imagens')) || []
const form = document.getElementById('novaPostagem');



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
    
    
    
} )

function criaPostagem (imagem, texto){
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("noticia-principal")

    const novaImagem = document.createElement("img");
    novaImagem.src = imagem;

    const novoBotao = document.createElement("button")
    novoBotao.classList.add("botao-remove")
    novoBotao.textContent = "X"

    const novoTexto = document.createElement("section");
    novoTexto.innerHTML = texto

    novoTexto.appendChild(novoBotao)

    novaDiv.appendChild(novaImagem);
    novaDiv.appendChild(novoTexto);
    // novaDiv.innerHTML += novoTexto

    const postagens = document.getElementById("main")
    postagens.appendChild(novaDiv)

   
   
    

    

    
 
    novoBotao.addEventListener("click", (event) =>{
        event.preventDefault();
        novaDiv.remove()
    })

    const index = imagens.indexOf(imagem)
    const existsInLocalStorage = index != -1
     if(existsInLocalStorage){
        novaDiv.remove()
        imagens.splice(index, 1)
        alert("Essa imagem já foi adicionada em alguma postagem. Evite repetições!!")
     } else {
        imagens.push(imagem)
     }

    
    localStorage.setItem("imagens", JSON.stringify(imagens) )
    
}

