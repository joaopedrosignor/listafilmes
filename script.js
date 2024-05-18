const btnCriar = document.querySelector('#btnCriar')
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')

btnCriar.addEventListener('click',function (infosDoEvento){
    infosDoEvento.preventDefault();

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value

    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        novoFilme.style.color='red'
        novoFilme.classList.toggle('item-lista')
    })
    
    
    
    novoFilme.innerHTML = `
    <h1>${inputUsuario.value}</h1>
    <p>Avaliação: xxxx</p>
    <span>vinhrea</span>
    `
    novoFilme.append(btnEditar)
    listaFilmes.append(novoFilme)
    
    inputUsuario.value = ""
})