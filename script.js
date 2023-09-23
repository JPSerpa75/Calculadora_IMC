function calcular() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    if (!(altura.includes(".") || altura.includes(","))) {
        altura = altura / 100
    }
    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        document.getElementById("result").style.display = "block"
        msg = "<b>Cuidado!</b></b> Abaixo do peso ideal<br> Seu IMC é " + imc.toFixed(2) + "kg/m²"
        document.getElementById("msg").innerHTML = msg
    } else if (imc > 18.4 && imc < 25) {
        document.getElementById("result").style.display = "block"
        msg = "<b>Saudável!</b> Peso ideal<br> Seu IMC é " + imc.toFixed(2) + "kg/m²"
        document.getElementById("msg").innerHTML = msg
    } else if (imc > 24.9 && imc < 30) {
        document.getElementById("result").style.display = "block"
        msg = "<b>Cuidado!</b> Acima do peso ideal<br> Seu IMC é " + imc.toFixed(2) + "kg/m²"
        document.getElementById("msg").innerHTML = msg
    } else if (imc > 29.9 && imc < 35) {
        document.getElementById("result").style.display = "block"
        msg = "<b>Cuidado!</b>  Obesidade de grau I<br> Seu IMC é " + imc.toFixed(2) + "kg/m²"
        document.getElementById("msg").innerHTML = msg
    } else if (imc > 34.9 && imc < 40) {
        document.getElementById("result").style.display = "block"
        msg = "<b>Cuidado!</b>  Obesidade de grau II<br> Seu IMC é " + imc.toFixed(2) + "kg/m²"
        document.getElementById("msg").innerHTML = msg
    } else if (imc > 39.9) {
        document.getElementById("result").style.display = "block"
        msg = "<b>Perigo!</b>  Obesidade de grau III<br> Seu IMC é " + imc.toFixed(2) + "kg/m²"
        document.getElementById("msg").innerHTML = msg
    }

}


function clearMsg() {
    document.getElementById("result").style.display = "none";
}