function contar () {
    var viper = document.getElementById('inicio')
    var angra = document.getElementById('final')
    var virgo = document.getElementById('passo')
    var res = document.getElementById('time')
    if (viper.value.length == 0 || angra.value.length == 0 || virgo.value.length == 0) {
        window.alert('ERRO! FALTAM DADOS')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(viper.value)
        var f = Number(angra.value)
        var p = Number(virgo.value)
        if (p <= 0) {
            window.alert('PASSO INVALIDO! CONSIDERANDO PASSO 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (c = i; c >= f; c-=p) {
                res.innerHTML += `${c} `
            }
        }
    }
}