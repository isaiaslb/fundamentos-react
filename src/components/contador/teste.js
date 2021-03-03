function gerarNumeros(qtd) {

    const meuArray = []
    var numero = 0
    var existeArray = false

    for (var i = 0; i < qtd; i++) {

        numero = parseInt(Math.random() * (59 - 1)) + 1

        for (var j = 0; j < meuArray.length; j++) {
            if (meuArray[j] == numero) {
                existeArray = true
            }
        }

        if (!existeArray) {
            meuArray[i] = parseInt(Math.random() * (59 - 1)) + 1
        }
        numero = null
        existeArray = false
    }
    return meuArray;
}

console.log(gerarNumeros(6));