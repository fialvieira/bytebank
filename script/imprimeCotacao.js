function imprimeCotacao(nome, valor) {
    const lista = document.getElementById(nome)
    lista.innerHTML = '';
    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listaItem = document.createElement('li')
        const plurais = {
            'dolar': 'dolares',
            'iene': 'ienes'
        }
        listaItem.innerHTML = `${multiplicador} ${multiplicador > 1 ? plurais[nome] : nome}: R$${(valor * multiplicador).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}

export default imprimeCotacao