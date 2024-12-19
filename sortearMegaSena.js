// Função que gera um sorteio da Mega-Sena 
function sortearMegaSena() {
  // Passo 1: Criar um array com números de 1 a 60
  let numeros = [];
  for (let i = 1; i <= 60; i++) {
    numeros.push(i);
  }

  // Passo 2: Embaralhar o array de números aleatoriamente
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]]; // Troca os elementos
  }

  // Passo 3: Selecionar os primeiros 6 números sorteados
  let sorteados = numeros.slice(0, 6);

  // Passo 4: Ordenar os números em ordem crescente
  sorteados.sort((a, b) => a - b);

  // Passo 5: Imprimir os números sorteados
  console.log("Números sorteados da Mega-Sena: " + sorteados.join(", "));
}

// Chamar a função para sortear os números
sortearMegaSena();
