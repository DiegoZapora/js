var valores = [5, 4, 6, 7, 9, 8]
/*for (var pos = 0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}*/
for (var pos in valores) {
    console.log(`O vator ${pos} tem o valor ${valores[pos]}`)
}

