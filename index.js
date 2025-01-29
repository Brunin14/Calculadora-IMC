const btn = document.querySelector("#btn");


function peso(){
    const pesoInput = document.getElementById("pesos").value;
    const alturaInput = document.getElementById("altura").value;

    if (!pesoInput || !alturaInput || isNaN(pesoInput) || isNaN(alturaInput)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos!";
        return;
    }

    let contaF = pesoInput / (alturaInput * alturaInput);
    console.log("IMC calculado:", contaF.toFixed(2));
    

    if (contaF <= 18.5){
        mensagem = "Abaixo do peso: "
    } else if (contaF <= 24.9){
        mensagem = "Peso normal: ";
    } else if (contaF <= 29.9){
        mensagem = "Sobrepeso (acima da média): ";
    } else {
        mensagem = "Obesidade: ";
    }

    document.getElementById("resultado").innerHTML = mensagem + contaF.toFixed(2);
}

btn.addEventListener("click", peso)

