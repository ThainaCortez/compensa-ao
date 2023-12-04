function calcularIMC() {
  // Obter valores de altura e peso do formulário
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  // Converter altura para metros
  const alturaMetros = altura / 100;

  // Calcular IMC
  const imc = peso / (alturaMetros * alturaMetros);

  // Exibir resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}</p>`;

  // Determinar o contexto do IMC
  let contexto = '';
  if (imc < 18.5) {
    contexto = 'Abaixo do peso';
  } else if (imc < 24.9) {
    contexto = 'Peso normal';
  } else if (imc < 29.9) {
    contexto = 'Sobrepeso';
  } else {
    contexto = 'Obesidade';
  }

  resultadoDiv.innerHTML += `<p>Contexto: ${contexto}</p>`;
}
