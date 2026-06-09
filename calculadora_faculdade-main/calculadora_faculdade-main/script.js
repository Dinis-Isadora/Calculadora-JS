const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const resultado = document.getElementById("resultado");

document.getElementById("somar").addEventListener("click", function () {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);

  resultado.innerHTML = n1 + n2;
});

document.getElementById("subtrair").addEventListener("click", function () {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);

  resultado.innerHTML = n1 - n2;
});

document.getElementById("multiplicar").addEventListener("click", function () {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);

  resultado.innerHTML = n1 * n2;
});

document.getElementById("dividir").addEventListener("click", function () {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);

  if (n2 === 0) {
    resultado.innerHTML = "Não é possível dividir por zero";
    return;
  }

  resultado.innerHTML = n1 / n2;
});

document.getElementById("limpar").addEventListener("click", function () {
  numero1.value = "";
  numero2.value = "";
  resultado.innerHTML = "0";
});
