const padre = document.getElementById('padre'),
    canasta = document.createElement('div'),
    canastaList = document.getElementById('canastaList')

padre.addEventListener('click', comprar)
function comprar(e) {
    e.preventDefault();
    if (e.target.classList.contains('card-btn')) {
        precio = e.target.parentElement.querySelector('.card-precio').textContent,
            nombre = e.target.parentElement.querySelector('.card-name').textContent
    }
    canastaList.classList.add('canasta')
    canasta.innerHTML = `
    <h2>Canasta</h2>
    <p>Elegiste la cartera ${nombre} de ${precio}</p>
`
    canastaList.appendChild(canasta)
}