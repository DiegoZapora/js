function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora sao: ${hora} horas.</strong>`
    if (hora >= 0 && hora < 12) {
        img.src = 'a.png'
        document.body.style.background = '#f4d324'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'b.png'
        document.body.style.background = '#6e361d'
    } else {
        img.src = 'c.png'
        document.body.style.background = '#849795'
    }
}
