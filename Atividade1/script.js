function adicionarItem() {
    console.log("Ola mundo")
    const itemDigitado = document.querySelector('#item').value
    console.log(itemDigitado)
    const lista = document.querySelector('#lista')
    console.log(lista)
    lista.innerHTML += `<li>${itemDigitado}</li>`
}