function contar() {
    var inicio = document.getElementById(`inicio`)
    var fim = document.getElementById(`fim`)
    var passo = document.getElementById(`passo`)
    var res = document.getElementById(`res`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = `Preparando a contagem...`
        window.alert(`[ERRO] Impossível contar. Favor preencher todos os campos.`)
    }

    else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        res.innerHTML = `Contando: \u{23F3}<br>\u{27A1}`

        if (p <= 0) {
            window.alert(`Impossível contar. Considerando PASSO igual a 1.`)
            p = 1
        }

        if (i <= f) {
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{27A1} `
            }

        }

        else {
            for (i; i >= f; i -= p) {
                res.innerHTML += `${i} \u{27A1}`
            }
        }

        res.innerHTML += `\u{2705}`
    }

}